// styles
import classes from './styles.module.css';

export default function ProductCardSlider({ img }) {
  return (
    <div className={classes.root}>
      <img src={img[0]} alt="product_banner" className={classes.img}/>
    </div>
  )
}