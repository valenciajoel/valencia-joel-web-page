'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useLenis } from '@/lib/motion/lenis-provider';

export function ModularNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Filosofía', targetId: '#philosophy' },
    { name: 'Expertise', targetId: '#expertise' },
    { name: 'Proyectos', targetId: '#projects' },
    { name: 'Contacto', targetId: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, {
        offset: -80, // Navbar height offset
        duration: 2,
        // Custom elastic easing
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
      scrolled && 'bg-background/80 backdrop-blur-md border-border-active'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0">
            <button 
              onClick={(e) => handleScrollTo(e, '#hero')} 
              className="font-heading font-bold text-2xl tracking-tighter text-white"
            >
              Joel<span className="text-primary">.dev</span>
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <button 
                key={link.name} 
                onClick={(e) => handleScrollTo(e, link.targetId)} 
                className="text-gray-300 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border-active">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => (
              <button 
                key={link.name} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-secondary rounded-md" 
                onClick={(e) => handleScrollTo(e, link.targetId)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
