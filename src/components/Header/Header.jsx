// styles
import classes from './styles.module.css';

export default function Header() {
  // TODO add search logic
  return (
    <div className={classes.root}>
      <div className={classes.searchBox}>
        <input className={classes.searchInput} placeholder='Поиск'/>
        {/* TODO: add svg */}
        <button className={classes.searchButton}>(s)</button>
      </div>
    </div>
  )
}