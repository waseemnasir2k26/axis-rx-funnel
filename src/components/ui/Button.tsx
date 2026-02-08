import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'lg',
      isLoading,
      fullWidth,
      className = '',
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center font-satoshi font-bold uppercase tracking-wider rounded-axis-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';

    const variants = {
      primary:
        'bg-royal-blue text-white cta-button shadow-glow hover:shadow-glow-hover',
      secondary: 'bg-navy text-off-white hover:bg-navy/90 shadow-soft',
      outline:
        'border-2 border-royal-blue text-royal-blue bg-transparent hover:bg-royal-blue hover:text-white',
      ghost: 'text-royal-blue hover:bg-royal-blue/10',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-[40px]',
      md: 'px-6 py-3 text-base min-h-[48px]',
      lg: 'px-8 py-4 text-lg min-h-[56px]',
    };

    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={fullWidth ? 'w-full' : 'inline-block'}
      >
        <button
          ref={ref}
          type={type}
          className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
          disabled={disabled || isLoading}
          {...props}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            children
          )}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export default Button;
