import useCart from "../hooks/useCart";

type PropsTyps = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsTyps) => {
  const { totalItem, totalPrice } = useCart();

  const year = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shoping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItem}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shoping Cart &copy; {year}</p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;
  return content;
};

export default Footer;
