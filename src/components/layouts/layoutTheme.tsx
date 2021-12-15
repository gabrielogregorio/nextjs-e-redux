import styles from '../../../styles/components/layout.module.css';
import { selectContrast } from '../../core/features/contrast/selectors';
import { selectTheme } from '../../core/features/themes/selectors';
import { themeEnum } from '../../core/types/core/themes';
import { useAppSelector } from '../../core/hooks/useRedux';

export default function LayoutTheme({ children }: any) {
  const {
    contrast: { contrast }
  } = useAppSelector(selectContrast);
  const {
    theme: { theme }
  } = useAppSelector(selectTheme);

  const themeContrast = contrast ? 'contrast' : '';

  return (
    <div className={`${styles.layout} ${themeContrast} ${theme}`}>
      {children}
    </div>
  );
}
