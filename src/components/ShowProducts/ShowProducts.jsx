// libs
import { useSelector } from "react-redux";

// components
import ProductCard from "../ProductCard/ProductCard";

// styles
import classes from "./styles.module.css";

export default function ShowProducts() {
  const { allProducts } = useSelector((state) => state.productsSlice);
  const {
    selectedCategoryInd,
    selectedSubCategoryInd,
    selectedGender,
  } = useSelector(state => state.categoriesSlice);

  const showableProducts = [];

  for (let i = 0; i < allProducts.length; ++i) {
    console.log(allProducts[i]);
    
    if (
      allProducts[i].gender === selectedGender &&
      allProducts[i].categoryInd === selectedCategoryInd &&
      allProducts[i].subCategoryInd === selectedSubCategoryInd
    ) {
      showableProducts.push(allProducts[i]);
    }
  }

  return (
    <div className={classes.root}>
      {showableProducts.map((productData, i) => (
        <ProductCard productData={productData} key={i} />
      ))}
    </div>
  );
}
