import { NavLink } from 'react-router-dom';
import Styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const itemsCount = useSelector((state: any) => state.cart.itemsCount);

  let activeClass = Styles.link + " " + Styles.active;

  return (
    <nav className={Styles.navbar}>
      <NavLink to="/" className={({ isActive }) => isActive ? activeClass : Styles.link}>Home</NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? activeClass : Styles.link}>Products</NavLink>
      <NavLink to="/cart" className={({ isActive }) => isActive ? activeClass : Styles.link}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <p className={Styles.count}>{itemsCount}</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
