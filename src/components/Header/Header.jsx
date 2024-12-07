// components
import SvgIcon from '../SvgIcon'

// styles
import classes from './styles.module.css';

export default function Header() {
  // TODO add search logic
  return (
    <div className={classes.root}>
      <div className={classes.searchBox}>
        <input className={classes.searchInput} placeholder='Поиск'/>
        <button className={classes.searchButton}>
          <SvgIcon iconName={"search"} width={18} height={18.97}/>
        </button>
      </div>
    </div>
  )
}