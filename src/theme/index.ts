// Typography
export const fonts = {
  body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  heading: '"Cormorant Garamond", serif',
  display: '"Playfair Display", serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
};

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

export const typography = {
  h1: 'text-4xl sm:text-5xl font-serif font-bold text-sage-800',
  h2: 'text-3xl sm:text-4xl font-serif font-bold text-sage-800',
  h3: 'text-2xl font-serif font-bold text-sage-800',
  h4: 'text-xl font-serif font-semibold text-sage-800',
  body: 'text-sage-700',
  caption: 'text-sm text-sage-500',
  button: 'font-medium text-center text-white bg-terracotta-600 hover:bg-terracotta-700 transition-colors duration-200',
  link: 'text-terracotta-600 hover:text-terracotta-700 hover:underline',
};

// Colors
export const colors = {
  primary: {
    light: '#f5d0cd',
    DEFAULT: '#d15c50',
    dark: '#9d3d31',
  },
  secondary: {
    light: '#d9ddd9',
    DEFAULT: '#6e7d6e',
    dark: '#465046',
  },
  background: {
    light: '#fdf9f2',
    DEFAULT: '#f7f8f7',
    dark: '#f3e6cc',
  },
  text: {
    primary: '#323632',
    secondary: '#6e7d6e',
    light: '#f7f8f7',
  },
};

// Spacing
export const spacing = {
  section: 'py-12 md:py-16 lg:py-20',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  gutter: 'mb-8 md:mb-12',
};

// Buttons
export const buttons = {
  primary: 'px-6 py-2.5 rounded-lg bg-terracotta-600 text-white hover:bg-terracotta-700 transition-colors duration-200',
  secondary: 'px-6 py-2.5 rounded-lg border-2 border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50 transition-colors duration-200',
  outline: 'px-6 py-2.5 rounded-lg border border-sage-300 text-sage-700 hover:bg-sage-50 transition-colors duration-200',
};

// Cards
export const cards = {
  default: 'bg-white rounded-xl shadow-md overflow-hidden',
  elevated: 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200',
  withBorder: 'bg-white rounded-xl border border-sage-200 overflow-hidden',
};

// Forms
export const forms = {
  input: 'w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent',
  label: 'block text-sm font-medium text-sage-700 mb-1',
  error: 'mt-1 text-sm text-red-600',
};

export default {
  typography,
  colors,
  spacing,
  buttons,
  cards,
  forms,
};
