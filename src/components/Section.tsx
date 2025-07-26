import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padded?: boolean;
  id?: string;
}

const Section = ({
  children,
  className = '',
  containerClassName = '',
  size = 'xl',
  padded = true,
  id,
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${className}`}
    >
      <Container 
        size={size} 
        padded={padded}
        className={containerClassName}
      >
        {children}
      </Container>
    </section>
  );
};

export default Section;
