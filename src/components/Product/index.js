import "./style.css";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="info">
        <h2>{name}</h2>
        <h3>R$ {price.toFixed(2)}</h3>
      </div>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCartThunk(id))}>
          Remover
        </button>
      ) : (
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar
        </button>
      )}
    </div>
  );
};

export default Product;
