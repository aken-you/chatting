import { useState } from 'react';

import { ThemeContext } from 'styled-components';

import { fonts, lightColors, darkColors } from '@styles/theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleThemeChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';

    localStorage.setItem('theme', nextTheme);
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const theme = { fonts, colors: isDark ? darkColors : lightColors };

  return <ThemeContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
