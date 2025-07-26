import { ReactNode } from 'react';

type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'subtitle1' | 'subtitle2'
  | 'body1' | 'body2'
  | 'caption' | 'overline';

type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'warning' | 'info';

interface TypographyProps {
  variant?: TextVariant;
  component?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  weight?: TextWeight;
  color?: TextColor;
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
}

const variantMapping: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-4xl md:text-5xl font-serif font-bold leading-tight',
  h2: 'text-3xl md:text-4xl font-serif font-bold leading-tight',
  h3: 'text-2xl md:text-3xl font-serif font-semibold leading-tight',
  h4: 'text-xl md:text-2xl font-serif font-semibold leading-snug',
  h5: 'text-lg md:text-xl font-serif font-semibold leading-snug',
  h6: 'text-base md:text-lg font-serif font-semibold leading-snug',
  subtitle1: 'text-lg font-medium leading-relaxed',
  subtitle2: 'text-base font-medium leading-relaxed',
  body1: 'text-base leading-relaxed',
  body2: 'text-sm leading-relaxed',
  caption: 'text-xs leading-relaxed',
  overline: 'text-xs font-medium uppercase tracking-wider',
};

const colorStyles: Record<TextColor, string> = {
  primary: 'text-sage-900',
  secondary: 'text-sage-700',
  tertiary: 'text-sage-500',
  error: 'text-red-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
};

const weightStyles: Record<TextWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const Typography = ({
  variant = 'body1',
  component,
  children,
  className = '',
  weight,
  color = 'primary',
  align = 'left',
  gutterBottom = false,
  noWrap = false,
  paragraph = false,
  ...props
}: TypographyProps) => {
  const Component = component || (paragraph ? 'p' : variantMapping[variant]);
  const baseStyle = variantStyles[variant];
  const weightStyle = weight ? weightStyles[weight] : '';
  const colorStyle = colorStyles[color];
  const alignStyle = `text-${align}`;
  const gutterStyle = gutterBottom ? 'mb-4' : '';
  const wrapStyle = noWrap ? 'whitespace-nowrap overflow-hidden text-ellipsis' : '';

  const classes = [
    baseStyle,
    weightStyle,
    colorStyle,
    alignStyle,
    gutterStyle,
    wrapStyle,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
