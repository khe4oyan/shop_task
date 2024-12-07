// components
import SvgIcon from "../SvgIcon";

// styles
import classes from "./styles.module.css";

export default function AddPhoto({
  idName,
  setFiles,
  isMultiple = false,
  isShowTitle = true,
  className = "",
}) {
  const onChangeFiles = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const imgSrc = URL.createObjectURL(file);
      setFiles(imgSrc);
    } else {
      setFiles(null);
    }
  }

  return (
    <label htmlFor={idName} className={`${classes.root} ${className}`}>
      <input
        type="file"
        accept="image/*"
        multiple={isMultiple}
        id={idName}
        onChange={onChangeFiles}
        style={{ display: "none" }}
      />
      <SvgIcon iconName="addPhoto" />
      {isShowTitle && <p className={classes.title}>Загрузить Фото</p>}
    </label>
  );
}
