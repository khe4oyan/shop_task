// styles
import classes from './styles.module.css';

export default function SubCategoryCard({ subCategoryName }) {
  return (
    <button className={classes.root}>
      {subCategoryName}

      <div className={`${classes.line} ${false && classes.lineActive}`}></div>
    </button>
  )
}