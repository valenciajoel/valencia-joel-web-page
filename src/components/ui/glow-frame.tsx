import { cn } from '@/lib/utils';
import React from 'react';

interface GlowFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlowFrame({ children, className, ...props }: GlowFrameProps) {
  return (
    <div
      className={cn(
        'group relative rounded-xl border border-border-active/20 bg-secondary/50 p-6 overflow-hidden transition-colors duration-500 hover:border-primary/50',
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
