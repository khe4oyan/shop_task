// libs
import { useState } from 'react';

// styles
import classes from './styles.module.css';

export default function ProductCardSlider({ img }) {
  const [slideInd, setSlideInd] = useState(0);

  const prevSlideInd = () => {
    setSlideInd(prev => {
      return prev - 1 < 0 ? (img.length - 1) : prev - 1;
    });
  }

  const nextSlideInd = () => {
    setSlideInd(prev => {
      return prev + 1 < img.length ? prev + 1 : 0;
    });
  }

  return (
    <div className={classes.root}>
      <img src={img[slideInd]} alt="product_banner" className={classes.img}/>
      <div className={classes.buttons}>
        <div className={classes.buttonBox}>
          <button className={classes.button} onClick={prevSlideInd}>{"<"}</button>
        </div>

        <div className={classes.buttonBox}>
          <button className={classes.button} onClick={nextSlideInd}>{">"}</button>
        </div>
      </div>
    </div>
  )
}