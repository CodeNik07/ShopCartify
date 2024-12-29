import { useContext } from "react";
import ProductsContext, { useProductContextType } from "../context/ProductsProvider";

const useProducts = (): useProductContextType => {
  return useContext(ProductsContext);
};

export default useProducts;