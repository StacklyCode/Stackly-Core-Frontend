import { FC, createContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '@Styles/styled';
import { Dark, Light } from '@Styles/theme';

interface IContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeUseContext = createContext({} as IContextProps);

const ThemeContext: FC = ({ children }) => {
  const [theme, setTheme] = useState(Light);
  useEffect(() => {
    const themeLocal = localStorage.getItem('theme');
    setTheme(!themeLocal ? Light : themeLocal === 'Light' ? Light : Dark);
    localStorage.setItem(
      'theme',
      `${!themeLocal ? 'Light' : themeLocal === 'Light' ? 'Light' : 'Dark'}`
    );
  }, []);

  return (
    <ThemeUseContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeUseContext.Provider>
  );
};

export default ThemeContext;
