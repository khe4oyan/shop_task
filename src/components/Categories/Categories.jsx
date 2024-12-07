// libs
import { useSelector, useDispatch } from "react-redux";
import { selectGender, selectCategoryInd, selectSubCategoryInd } from "../../store/slices/categoriesSlice";

// components
import CategoryCard from "../CategoryCard";
import SubCategoryCard from "../SubCategoryCard";
import AddCategory from "../AddCategory";
import AddSubCategory from "../AddSubCategory";
import SvgIcon from '../SvgIcon';

// styles
import classes from "./styles.module.css";

export default function Categories() {
  const {
    selectedCategoryInd,
    selectedSubCategoryInd,
    selectedGender,
    categories,
  } = useSelector((state) => state.categoriesSlice);

  const dispatch = useDispatch();

  const genderButtonHandler = (event) => {
    const gender = event.target.value
    dispatch(selectGender(gender));
  };

  const selectCategory = (indCategory) => {
    dispatch(selectCategoryInd(indCategory));
  }; 

  const selectSubCategory = (indSubCategory) => {
    dispatch(selectSubCategoryInd(indSubCategory));
  };

  const genderButtons = [
    {
      value: "female",
      buttonTitle: "Женский",
      svg: "female",
    },
    {
      value: "male",
      buttonTitle: "Мужской",
      svg: "male",
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.categories}>
        <div className={classes.genderBox}>
          {genderButtons.map((buttonData, i) => (
            <button
              key={i}
              className={`${classes.genderButton} ${selectedGender === buttonData.value && classes.activeButton}`}
              onClick={genderButtonHandler}
              value={buttonData.value}
            >
              <SvgIcon iconName={buttonData.svg} width={19} height={18} className={classes.svgIcon}/>
            </button>
          ))}
        </div>
        <div className={classes.categoryCardsBox}>
          {categories[selectedGender].map((categoryData, i) => (
            <CategoryCard
              categoryData={categoryData}
              setCategoryInd={() => {
                selectCategory(i);
              }}
              isSelectedCategory = {i === selectedCategoryInd}
              key={i}
            />
          ))}
          <AddCategory genderButtons={genderButtons} categoryLength={categories[selectedGender].length} />
        </div>
      </div>

      <div className={classes.subCategoryBox}>
        {categories[selectedGender][selectedCategoryInd]?.subCategories?.map(
          (subCategoryName, i) => (
            <SubCategoryCard
              subCategoryName={subCategoryName}
              selectSubCategory={() => {
                selectSubCategory(i);
              }}
              isSelectedSubCategory={ i === selectedSubCategoryInd}
              key={i}
            />
          )
        )}
        
        {
          categories[selectedGender].length > 0 &&
          <AddSubCategory
            categoryName={categories[selectedGender][selectedCategoryInd]?.name}
            categoryLength={categories[selectedGender][selectedCategoryInd]?.subCategories?.length}
            selectedCategoryInd={selectedCategoryInd}
            selectedGender={selectedGender}
          />
        }
      </div>
    </div>
  );
}
