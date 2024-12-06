// libs
import { useState } from "react";
import { useDispatch } from "react-redux";

// slices
import {addCategory} from "../../store/slices/categoriesSlice";

// styles
import classes from "./styles.module.css";

export default function AddCategory({categoryLength, genderButtons}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState(genderButtons[0].value);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState(null);

  const dispatch = useDispatch();

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
    setCategoryName("");
  };

  const submitButtonHandler = () => {
    const categoryNameTrimmed = categoryName.trim();
    if (categoryNameTrimmed === "") {return;}

    dispatch(addCategory({
      gender: selectedGender,
      categoryName: categoryNameTrimmed,
      categoryImg: categoryImg,
    }));
    
    toggleIsOpen();
  }

  return (
    <>
      <div className={`${classes.root} ${isOpen && classes.rootActive}`}>
        <button onClick={toggleIsOpen} className={classes.addButton}>+</button>

        {isOpen && (
          <div className={`${classes.addCategoryBox} ${categoryLength < 2 && classes.boxLeft}`}>
            <div className={classes.header}>
              <p className={classes.headerText}>Добавить Категорию</p>
              <button onClick={toggleIsOpen} className={classes.closeButton}>+</button>
            </div>
            
            <div className={classes.genderBox}>
              {genderButtons.map((genderButton, i) =>
                <button onClick={() => setSelectedGender(genderButton.value)} className={`${classes.genderButton} ${selectedGender === genderButton.value && classes.selectedGenderButton}`} key={i}>(svg) {genderButton.buttonTitle}</button>
              )}
            </div>

            <input type="text" placeholder="Категория" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className={classes.input}/>

            {/* TODO: добавить фото */}
            (Add Photo)

            <button className={classes.submitButton} onClick={submitButtonHandler}>Добавить</button>
          </div>
        )}
      </div>

      {isOpen && <div className={classes.bg}></div>}
    </>
  );
}
