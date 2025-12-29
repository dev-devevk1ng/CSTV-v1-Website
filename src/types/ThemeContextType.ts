export type Theme = 'light' | 'dark' | 'blast-pro-series';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
