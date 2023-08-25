import { useContext } from 'react';
import { TranslationContext } from '../Context/context';

const useTranslation = (words) => {
  const { language } = useContext(TranslationContext);
  const arrOfValue = words.split('.');
  const keyAreaView = arrOfValue[0];
  const keyTargetWord = arrOfValue[1];
  return language[keyAreaView][keyTargetWord];
};

export default useTranslation;
