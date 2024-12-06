// styles
import classes from './styles.module.css';

export default function ProductCard({ productData }) {
  console.log(Object.getOwnPropertyNames(productData).join(" | "));
  
  return (
    <div className={classes.root}>
      <img src={productData.img} alt="productImg" className={classes.img}/>
      <div className={classes.info}>
        <p className={classes.article}>{productData.article}</p>
        <p className={classes.price}>{productData.price}$</p>
      </div>
    </div>
  )
}