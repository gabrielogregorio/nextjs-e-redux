import { setTheme } from '../../core/features/themes/slices';

import { setLanguage } from '../../core/features/languages/slices';
import { toggleContrast } from '../../core/features/contrast/slices';
import { ImContrast } from 'react-icons/im';
import { RiContrast2Fill, RiContrast2Line } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../core/hooks/useRedux';
import styles from '../../../styles/components/header.module.css';
import { SelectOptionComponent } from '../base/Select';
import { selectTheme } from '../../core/features/themes/selectors';
import { selectLanguage } from '../../core/features/languages/selectors';
import { Button } from '../base/Button.';
import { languageEnum } from '../../core/types/core/lang';
import { themeEnum } from '../../core/types/core/themes';

export function HeaderComponent() {
  const dispatch = useAppDispatch();
  const {
    theme: { theme }
  } = useAppSelector(selectTheme);
  const {
    lang: { lang }
  } = useAppSelector(selectLanguage);

  return (
    <nav className={styles.header}>
      <div className={styles.header__logo}>
        <p>Logo</p>
      </div>

      <div className={styles.header__button}>
        <div>
          <Button onClick={() => dispatch(toggleContrast())}>
            <ImContrast width={30} height={20} />
          </Button>
        </div>
      </div>

      <SelectOptionComponent
        active={lang}
        options={[
          {
            key: languageEnum.PT_BR,
            img: (
              <img
                width={30}
                height={20}
                src="/br.png"
                alt="Bandeira brasileira"
              />
            ),
            action: () => dispatch(setLanguage(languageEnum.PT_BR))
          },
          {
            key: languageEnum.EN_US,
            img: (
              <img
                width={30}
                height={20}
                src="/en.png"
                alt="Bandeira americana"
              />
            ),
            action: () => dispatch(setLanguage(languageEnum.EN_US))
          }
        ]}
      />

      <SelectOptionComponent
        active={theme}
        options={[
          {
            key: themeEnum.LIGHT,
            img: <RiContrast2Line width={30} height={20} />,
            action: () => dispatch(setTheme(themeEnum.LIGHT))
          },
          {
            key: themeEnum.DARK,
            img: <RiContrast2Fill width={30} height={20} />,
            action: () => dispatch(setTheme(themeEnum.DARK))
          }
        ]}
      />
    </nav>
  );
}
