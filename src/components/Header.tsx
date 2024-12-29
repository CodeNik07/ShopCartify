import React, { ReactElement } from "react";
import Nav from "./Nav";
import useCart from "../hooks/useCart";

type PropsTyps = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsTyps): ReactElement => {
  const { totalItem, totalPrice } = useCart();

  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>ShopCartify</h1>
        <div className="header__price-box">
          <p>Total Items: {totalItem}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};

export default Header;
