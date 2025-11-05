import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './themeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)") ? 'dark' : 'light'))

  const handleThemeSwitch = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const values = { currentTheme, handleThemeSwitch };

  useEffect(() => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};