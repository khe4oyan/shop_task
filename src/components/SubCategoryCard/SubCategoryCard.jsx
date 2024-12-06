// styles
import classes from './styles.module.css';

export default function SubCategoryCard({ subCategoryName, isSelectedSubCategory, selectSubCategory }) {
  return (
    <button className={classes.root} onClick={selectSubCategory}>
      {subCategoryName}
      <div className={`${classes.line} ${isSelectedSubCategory && classes.lineActive}`}></div>
    </button>
  )
}