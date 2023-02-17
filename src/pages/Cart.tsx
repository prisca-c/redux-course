import { useSelector } from 'react-redux';
import { removeFromCart } from 'src/features/cart/cartSlice';
import { Product } from '~types/Product';
import Styles from './Cart.module.css';
import { useAppDispatch } from '../app/hooks';


const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  console.log(cart);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (item: Product) => {
    dispatch(removeFromCart(item));
  }

  return (
    <div>
      <h1>Cart</h1>

      <p><b>Total:</b> {cart.value} $</p>

      <div className={Styles.list}>
        {cart.items.map((item: Product) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img alt={item.name} src={item.image} className={Styles.image}/>
            <p>
              <b>Description:</b>
              <br/>{item.description}
            </p>
            <p>
              <b>Price:</b>
              <br/>{item.price} $
            </p>
            <button onClick={() => handleRemoveFromCart(item)}>Remove from cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;