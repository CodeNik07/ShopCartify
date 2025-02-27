import { createContext, ReactElement, useEffect, useState } from "react";

export type ProductsType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductsType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type useProductContextType = { products: ProductsType[] };

const initContextState: useProductContextType = { products: [] };

const ProductsContext = createContext<useProductContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductsType[]>(initState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
