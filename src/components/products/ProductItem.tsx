import { product } from '~types/product';
import Styles from './ProductItem.module.css';
import { useDispatch} from 'react-redux';
import { addToCart } from 'src/features/cart/cartSlice';
import { useSelector } from 'react-redux';

const ProductItem = (props: product) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const lastItem = cart.items[cart.items.length - 1];
  const id = lastItem ? lastItem.id + 1 : 1;
  const item = {
    id: id,
    name: props.name,
    image: props.image,
    description: props.description,
    price: props.price
  }

  const handleAddToCart = () => {
    dispatch(addToCart(item));
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