// libs
import { useState } from 'react';

// components
import TransparentBg from '../TransparentBg';

// styles
import classes from './styles.module.css';

export default function AddSubCategory() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const submitButtonHandler = () => {
    // TODO: логика добавления подкатегории
  }

  const categoryName = "Кольцо" // заглушка

  return (
    <>
      <div className={`${classes.root} ${isOpen && classes.rootActive}`}>
        <button onClick={toggleIsOpen} className={classes.addButton}>+</button>

        {isOpen && (
          <div className={classes.addCategoryBox}>
            <div className={classes.header}>
              <p className={classes.headerText}>{categoryName}: Добавить Подкатегорию</p>
              <button onClick={toggleIsOpen} className={classes.closeButton}>+</button>
            </div>

            <input type="text" placeholder="Подкатегория" className={classes.input}/>

            <button className={classes.submitButton} onClick={submitButtonHandler}>Добавить</button>
          </div>
        )}
      </div>

      <TransparentBg isShow={isOpen}/>
    </>
  );
}