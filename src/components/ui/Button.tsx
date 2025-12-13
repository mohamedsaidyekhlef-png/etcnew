import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const variants = {
      // Primary: Elegant, solid, warm
      primary: 'bg-brand-orange text-white font-semibold shadow-lg hover:bg-[#e08d0b] border border-transparent',
      // Secondary: Royal Green
      secondary: 'bg-brand-green text-white font-semibold hover:bg-[#003d2a] shadow-lg border border-transparent',
      // Outline: Elegant border
      outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-brand-orange/50',
      // Ghost: Subtle
      ghost: 'bg-transparent text-gray-300 hover:text-brand-orange hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs uppercase tracking-wider',
      md: 'px-6 py-3 text-sm uppercase tracking-wider',
      lg: 'px-8 py-4 text-base uppercase tracking-widest',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none font-sans',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
