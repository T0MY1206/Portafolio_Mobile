import React, { createContext, useState, useEffect, useContext } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      // Siempre iniciar en modo oscuro por defecto, ignorar tema guardado
      setTheme('dark');
      // Guardar dark como tema por defecto
      await AsyncStorage.setItem('theme', 'dark');
    } catch (error) {
      console.error('Error loading theme:', error);
      setTheme('dark');
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const colors = {
    light: {
      bgPrimary: '#ffffff',
      bgSecondary: '#f5f5f5',
      textPrimary: '#1a1a1a',
      textSecondary: '#666666',
      accent: '#3b82f6',
      accentHover: '#2563eb',
      border: '#e5e5e5',
    },
    dark: {
      bgPrimary: '#1a1a1a',
      bgSecondary: '#2d2d2d',
      textPrimary: '#ffffff',
      textSecondary: '#b3b3b3',
      accent: '#60a5fa',
      accentHover: '#3b82f6',
      border: '#404040',
    }
  };

  const currentColors = colors[theme] || colors.light;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

