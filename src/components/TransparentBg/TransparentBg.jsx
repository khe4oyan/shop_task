// styles
import classes from './styles.module.css';

export default function TransparentBg({ isShow }) {
  return (
    <>
      {isShow && <div className={classes.root}></div>}
    </>
  )
}