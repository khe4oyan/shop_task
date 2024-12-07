// libs
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import TransparentBg from '../TransparentBg';

// slices
import { addSubCategoryByCategoryInd } from '../../store/slices/categoriesSlice';

// styles
import classes from './styles.module.css';

export default function AddSubCategory({categoryLength, categoryName, selectedCategoryInd, selectedGender}) {
  const [isOpen, setIsOpen] = useState(false);
  const [subCategoryText, setSubCategoryText] = useState("");

  const dispatch = useDispatch();

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
    setSubCategoryText("");
  };

  const submitButtonHandler = () => {
    const subCategoryTextTrimmed = subCategoryText.trim();
    if (subCategoryTextTrimmed === "") { return; }
    dispatch(addSubCategoryByCategoryInd({
      gender: selectedGender,
      categoryInd: selectedCategoryInd,
      subCategoryName: subCategoryTextTrimmed,
    }));
    toggleIsOpen();
  }

  return (
    <>
      <div className={`${classes.root} ${isOpen && classes.rootActive}`}>
        <button onClick={toggleIsOpen} className={classes.addButton}>+</button>

        {isOpen && (
          <div className={`${classes.addCategoryBox} ${(categoryLength === undefined || categoryLength < 3) && classes.boxLeft}`}>
            <div className={classes.header}>
              <p className={classes.headerText}>{categoryName}: Добавить Подкатегорию</p>
              <button onClick={toggleIsOpen} className={classes.closeButton}>+</button>
            </div>

            <input value={subCategoryText} onChange={(e) => setSubCategoryText(e.target.value)} type="text" placeholder="Подкатегория" className={classes.input}/>

            <button className={classes.submitButton} onClick={submitButtonHandler}>Добавить</button>
          </div>
        )}
      </div>

      <TransparentBg isShow={isOpen}/>
    </>
  );
}