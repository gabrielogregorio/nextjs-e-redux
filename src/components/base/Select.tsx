import { useState } from 'react';
import styles from '../../../styles/components/select.module.css';
import { keyOption } from '../../core/types/select';
import { Button } from './Button.';
interface selectOptionInterface {
  options: keyOption[];
  active: string;
}

export function SelectOptionComponent({
  options,
  active
}: selectOptionInterface) {
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);

  function handleClick(index) {
    options[index].action();
  }

  function renderItems() {
    return options.map((option, index) => (
      <div key={index} className={styles.option_list__item}>
        <Button type="button" onClick={() => handleClick(index)}>
          {option.img}
        </Button>
      </div>
    ));
  }

  return (
    <div
      onClick={() => setToggleVisibility((prev) => !prev)}
      className={styles.option}
    >
      <Button className={styles.option__selected}>
        {options.filter((option) => option.key === active)[0]?.img}
      </Button>
      <div
        style={{ display: toggleVisibility ? 'block' : 'none' }}
        className={styles.option_list}
      >
        {renderItems()}
      </div>
    </div>
  );
}
