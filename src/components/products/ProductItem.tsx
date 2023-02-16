import { item } from '~types/item';
import Styles from './ProductItem.module.css';
import { useDispatch} from 'react-redux';
import { addToCart } from 'src/features/cart/cartSlice';

const ProductItem = (props: item) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props));
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <img alt={props.name} src={props.image} className={Styles.image} />
      <p>
        <b>Description:</b>
        <br/>{props.description}
      </p>
      <p>
        <b>Price:</b>
        <br/>{props.price} $
      </p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductItem;