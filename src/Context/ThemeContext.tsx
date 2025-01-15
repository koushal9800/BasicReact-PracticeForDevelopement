import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useContext error');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');
  const THEME_KEY = '@theme';

useEffect(()=>{
    const loadTheme = async ()=>{
        try{
            const storedTheme = await AsyncStorage.getItem(THEME_KEY);
            if(storedTheme === 'dark'){
                setTheme('dark')
            }else {
                setTheme('light')
            }
        } catch(e){
            console.log(e)
        }
    }
    loadTheme()
},[])

  const toggleTheme = async() => {
    // setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    try{
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        await AsyncStorage.setItem(THEME_KEY,newTheme)
    }catch(e){
        console.log(e)
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
