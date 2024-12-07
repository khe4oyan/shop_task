// components
import AddPhoto from '../AddPhoto/AddPhoto';

// styles
import classes from './styles.module.css';

export default function PhotoShower({ className, setFiles, img, removeImg, isShowTitle = false }) {
  return (
    <>
      {img ? (
        <div className={className}>
          <img src={img} alt="product_banner" className={className} />
          <button onClick={removeImg} className={classes.deleteButton}>+</button>
        </div>
      ) : (
        <AddPhoto
          className={className}
          isShowTitle={isShowTitle}
          setFiles={setFiles}
        />
      )}
    </>
  );
}
