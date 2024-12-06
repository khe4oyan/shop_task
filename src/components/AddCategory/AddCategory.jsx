// libs
import { useState } from "react";

// components
import TransparentBg from '../TransparentBg';

// styles
import classes from "./styles.module.css";

export default function AddCategory() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const submitButtonHandler = () => {
    // TODO: логика добавления категории
  }

  return (
    <>
      <div className={`${classes.root} ${isOpen && classes.rootActive}`}>
        <button onClick={toggleIsOpen} className={classes.addButton}>+</button>

        {isOpen && (
          <div className={classes.addCategoryBox}>
            <div className={classes.header}>
              <p className={classes.headerText}>Добавить Категорию</p>
              <button onClick={toggleIsOpen} className={classes.closeButton}>+</button>
            </div>
            
            <div className={classes.genderBox}>
              <button className={classes.genderButton}>Женский</button>
              <button className={classes.genderButton}>Мужской</button>
            </div>

            <input type="text" placeholder="Категория" className={classes.input}/>

            {/* TODO: добавить фото */}

            <button className={classes.submitButton} onClick={submitButtonHandler}>Добавить</button>
          </div>
        )}
      </div>

      <TransparentBg isShow={isOpen}/>
    </>
  );
}
