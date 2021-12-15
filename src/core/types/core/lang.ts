export enum languageEnum {
  PT_BR = 'PT_BR',
  EN_US = 'EN_US'
}

interface languageInterface {
  lang: languageEnum;
}

export const initialStateLanguage: languageInterface = {
  lang: languageEnum.PT_BR
};
