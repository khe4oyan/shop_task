// components
import ProductCardSlider from '../ProductCardSlider/ProductCardSlider';

// styles
import classes from './styles.module.css';

export default function ProductCard({ productData }) {
  const  {
    article,
    price,
    img,
    // categoryInd,
    // subCategoryInd,
    // gender,
  } = productData;

  return (
    <div className={classes.root}>
      {
        img.length === 1 ? 
        <img src={img} alt="productImg" className={classes.img}/> :
        <ProductCardSlider img={img}/>
      }
      <div className={classes.info}>
        <p className={classes.article}>{article}</p>
        <p className={classes.price}>{price}$</p>
      </div>
    </div>
  )
}