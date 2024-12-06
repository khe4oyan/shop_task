// libs
import { useSelector } from "react-redux";

// components
import ProductCard from "../ProductCard/ProductCard";

// styles
import classes from "./styles.module.css";

export default function ShowProducts() {
  const { allProducts } = useSelector((state) => state.productsSlice);

  // TODO: sorted by filters

  return (
    <div className={classes.root}>
      {allProducts.map((productData, i) => (
        <ProductCard productData={productData} key={i} />
      ))}
    </div>
  );
}
