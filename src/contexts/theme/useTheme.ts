import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme/ThemeContext';
import type { ThemeContextType } from '@/types/ThemeContextType';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};