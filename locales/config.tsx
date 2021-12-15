import { selectLanguage } from '../src/core/features/languages/selectors';
import { useAppSelector } from '../src/core/hooks/useRedux';
import EN_US from './en_US';
import PT_BR from './pt_BR';

export function GetLang({ keyLang }: any) {
  const dataLang = {
    EN_US,
    PT_BR
  };

  const {
    lang: { lang }
  } = useAppSelector(selectLanguage);

  return <>{dataLang[lang][keyLang]}</>;
}
