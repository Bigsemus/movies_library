import React, { useContext, useMemo } from 'react';
import classes from './LangBtn.module.scss';
import { TranslationContext } from '../../Context/context';
import ua from '../../locales/ua/translation';
import en from '../../locales/en/translation';

const LangBtn = () => {
  const { setLanguage } = useContext(TranslationContext);
  return useMemo(() => (
    <div className={classes.langBtn}>
      <select
        onChange={(event) => {
          setLanguage(event.currentTarget.value === 'Ukraine' ? ua : en);
        }}
      >
        <option value="English">English</option>
        <option value="Ukraine">Ukraine</option>
      </select>
    </div>
  ), [setLanguage]);
};

export default LangBtn;
