import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const variants = {
      // Tech-forward primary: Gradient from Orange to Royal Green
      primary: 'bg-gradient-to-r from-brand-orange to-brand-green text-white font-bold border-0 shadow-[0_0_20px_-5px_rgba(244,157,17,0.4)] hover:shadow-[0_0_30px_-5px_rgba(0,78,54,0.6)]',
      // Glassmorphism secondary
      secondary: 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20',
      // Ghost for links
      ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
      // Special "Glow" variant for CTAs
      glow: 'bg-white text-void hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs font-medium',
      md: 'px-6 py-3 text-sm font-medium',
      lg: 'px-8 py-4 text-base font-semibold',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none font-display tracking-wide',
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
