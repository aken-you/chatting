import { createContext, useContext, useState } from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { fonts, lightColors, darkColors } from '@styles/theme';

interface Props {
  children: React.ReactNode;
}

type ThemeContextType = {
  themeMode: 'light' | 'dark';
  handleThemeChange: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const useTheme = () => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme should be used within ThemeProvider');
  }

  return value;
};

const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleThemeChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';

    localStorage.setItem('theme', nextTheme);
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const theme = { fonts, colors: isDark ? darkColors : lightColors };

  return (
    <ThemeContext.Provider value={{ themeMode: isDark ? 'dark' : 'light', handleThemeChange }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
