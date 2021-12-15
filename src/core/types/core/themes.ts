export enum themeEnum {
  DARK = 'DARK',
  LIGHT = 'LIGHT'
}
interface themeInterface {
  theme: themeEnum;
}

export const initialStateTheme: themeInterface = {
  theme: themeEnum.LIGHT
};
