import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padded?: boolean;
}

const maxWidths = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

const Container = ({
  children,
  className = '',
  size = 'xl',
  padded = true,
}: ContainerProps) => {
  return (
    <div 
      className={`
        mx-auto 
        ${padded ? 'px-4 sm:px-6 lg:px-8' : ''} 
        ${maxWidths[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
