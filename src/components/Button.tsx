import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
}

const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500';

const variants = {
  primary: 'bg-terracotta-600 text-white hover:bg-terracotta-700',
  secondary: 'bg-white text-terracotta-600 border-2 border-terracotta-600 hover:bg-terracotta-50',
  outline: 'bg-transparent text-sage-700 border border-sage-300 hover:bg-sage-50',
  ghost: 'bg-transparent text-sage-700 hover:bg-sage-100',
  link: 'bg-transparent text-terracotta-600 hover:text-terracotta-700 hover:underline p-0 h-auto',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  as: Component = 'button',
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={fullWidth ? 'w-full' : 'inline-block'}
    >
      <Component
        className={`${buttonClasses} ${fullWidth ? 'w-full' : ''}`}
        {...props}
      >
        {content}
      </Component>
    </motion.div>
  );
};

export default Button;
