// styles
import classes from './styles.module.css';

export default function CategoryCard({categoryData, setCategoryInd}) {
  return (
    <button onClick={setCategoryInd} className={classes.root}>
      <div>
        <img className={classes.img} src={categoryData.bannerImg} alt="category_img" />
        <p>{categoryData.categoryName}</p>
      </div>
    </button>
  )
}