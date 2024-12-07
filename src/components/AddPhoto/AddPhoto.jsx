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
  return (
    <label htmlFor={idName} className={`${classes.root} ${className}`}>
      <input
        type="file"
        accept="image/*"
        multiple={isMultiple}
        id={idName}
        onChange={(e) => setFiles(e.target.files)}
        style={{ display: "none" }}
      />
      <SvgIcon iconName="addPhoto" />
      {isShowTitle && <p className={classes.title}>Загрузить Фото</p>}
    </label>
  );
}
