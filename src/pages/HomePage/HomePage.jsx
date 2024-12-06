// components
import Header from '../../components/Header';
import Categories from '../../components/Categories'
import ShowProducts from '../../components/ShowProducts'

// styles
import classes from './styles.module.css';

export default function HomePage() {
  return (
    <div className={classes.root}>
      <Header />
      <Categories />
      <ShowProducts />
    </div>
  )
}