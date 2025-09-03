import { useState, useEffect } from 'react';
import { ThemeContext } from '@/lib/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isAutoMode, setIsAutoMode] = useState(true);

  // Function to determine theme based on time
  const getThemeBasedOnTime = () => {
    const now = new Date();
    const hour = now.getHours();
    
    // Light mode during daytime (6 AM to 6 PM), dark mode during nighttime
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  };

  useEffect(() => {
    // Check if user has disabled auto mode
    const autoModeDisabled = localStorage.getItem('auto-theme-disabled') === 'true';
    
    if (autoModeDisabled) {
      // Use saved theme preference or system preference if auto mode is disabled
      setIsAutoMode(false);
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
    } else {
      // Auto mode: set theme based on time
      setIsAutoMode(true);
      const timeBasedTheme = getThemeBasedOnTime();
      setTheme(timeBasedTheme);
    }
  }, []);

  // Update theme every minute to check for time changes
  useEffect(() => {
    if (!isAutoMode) return;

    const interval = setInterval(() => {
      const newTheme = getThemeBasedOnTime();
      if (newTheme !== theme) {
        setTheme(newTheme);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [theme, isAutoMode]);

  // Apply theme to document whenever theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const updateTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    setIsAutoMode(false);
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('auto-theme-disabled', 'true');
  };

  const toggleTheme = () => {
    updateTheme(theme === 'light' ? 'dark' : 'light');
  };

  const enableAutoMode = () => {
    setIsAutoMode(true);
    localStorage.removeItem('auto-theme-disabled');
    const timeBasedTheme = getThemeBasedOnTime();
    setTheme(timeBasedTheme);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme: updateTheme, 
      toggleTheme, 
      isAutoMode,
      enableAutoMode 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
