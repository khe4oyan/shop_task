// styles
import classes from './styles.module.css';

export default function CategoryCard({categoryData, setCategoryInd, isSelectedCategory}) {
  return (
    <button onClick={setCategoryInd} className={`${classes.root} ${isSelectedCategory && classes.selectedCategory}`}>
      <div>
        <img className={classes.img} src={categoryData.img} alt="category_img" />
        <p>{categoryData.name}</p>
      </div>
    </button>
  )
}