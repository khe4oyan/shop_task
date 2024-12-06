// libs
import { useSelector } from "react-redux";

// components
import CategoryCard from "../CategoryCard";
import SubCategoryCard from "../SubCategoryCard";
import AddCategory from '../AddCategory';
import AddSubCategory from '../AddSubCategory'

// styles
import classes from "./styles.module.css";

export default function Categories() {
  const { categories } = useSelector((state) => state.categoriesSlice);
  
  const genderButtonHandler = (event) => {
    // const gender =  event.target.value
    // TODO
  };

  const gender = "female";
  const selecedCategoryInd = 0; // TODO: заглушка. Зделать его рабочим из Slice
  const selectCategory = () => {} // TODO заглушка
  const selectSubCategory = () => {} // TODO заглушка

  return (
    <div className={classes.root}>
      <div className={classes.categories}>
        <div className={classes.genderBox}>
          <button
            className={classes.genderButton}
            onClick={genderButtonHandler}
            value="female"
          >
            female
          </button>
          <button
            className={classes.genderButton}
            onClick={genderButtonHandler}
            value="male"
          >
            male
          </button>
        </div>
        <div className={classes.categoryCardsBox}>
          {categories[gender].map((categoryData, i) => (
            <CategoryCard
              categoryData={categoryData}
              setCategoryInd={() => {
                selectCategory(i);
              }}
              key={i}
            />
          ))}
          <AddCategory />
        </div>
      </div>

      <div className={classes.subCategoryBox}>
        {categories[gender][selecedCategoryInd].subcategories.map(
          (subCategoryName, i) => (
            <SubCategoryCard
              subCategoryName={subCategoryName}
              selectSubCategor={() => {
                selectSubCategory(i);
              }}
              key={i}
            />
          )
        )}
        <AddSubCategory />
      </div>
    </div>
  );
}
