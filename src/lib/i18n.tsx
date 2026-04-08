'use client';

import { createContext, useContext, ReactNode, useState } from 'react';
import { translations, type Language, type Translations } from './translations';

// Create the context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export function LanguageProvider({ children, defaultLanguage = 'en' }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as Translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for using translations
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}

// Helper function for getting translations outside of React components (if needed)
export function getTranslation(language: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[language];

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path; // Fallback to the path itself if key not found
    }
  }

  return typeof value === 'string' ? value : path;
}
