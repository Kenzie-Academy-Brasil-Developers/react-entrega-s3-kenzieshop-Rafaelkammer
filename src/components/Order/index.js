import "./style.css";

import { useSelector } from "react-redux";
import Product from "../Product";

const Order = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <h1>Meus Digimons</h1>
      <div className="container">
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable />
        ))}
      </div>
    </>
  );
};

export default Order;
