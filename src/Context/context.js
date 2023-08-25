import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import en from '../locales/en/translation';

export const TranslationContext = createContext({
  language: en,
});

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(en);
  const value = useMemo(() => (
    { language, setLanguage }
  ), [language]);
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.shape({
    key: PropTypes.shape({}),
  }),
};

TranslationProvider.defaultProps = {
  children: PropTypes.shape({
    key: null,
  }),
};
