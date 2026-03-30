import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonTechProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

export const ButtonTech = React.forwardRef<HTMLButtonElement, ButtonTechProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm text-sm font-bold uppercase tracking-widest font-mono transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary',
          'h-11 px-8 py-2 border',
          variant === 'default' &&
            'bg-primary text-background border-transparent hover:bg-white hover:text-black',
          variant === 'outline' &&
            'bg-transparent border-border-active text-primary hover:bg-border-active hover:text-white',
          variant === 'ghost' &&
            'bg-transparent border-transparent text-gray-400 hover:text-primary',
          className
        )}
        {...props}
      />
    );
  }
);
ButtonTech.displayName = 'ButtonTech';
