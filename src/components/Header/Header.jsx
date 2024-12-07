// components
import SvgIcon from "../SvgIcon";
import AddNewProduct from "../AddNewProduct";

// styles
import classes from "./styles.module.css";

export default function Header() {
  return (
    <div className={classes.root}>
      <div className={`container ${classes.container}`}>
        <div className={classes.searchBox}>
          <input className={classes.searchInput} placeholder="Поиск" />
          <button className={classes.searchButton}>
            <SvgIcon iconName={"search"} width={18} height={18.97} />
          </button>
        </div>
        <AddNewProduct />
      </div>
    </div>
  );
}
