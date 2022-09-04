import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
  const toggleCart = useSelector(state => state.ui.toggleCart);
  const cartItems = useSelector(state => state.cart.items)
  const items = cartItems.map(item =>
    <CartItem
      key={item.id}
      item={{ title: item.title, quantity: item.quantity, total: item.quantity * item.price, price: item.price }}
    />)

  return (

    <Fragment>
      {
        toggleCart &&
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items}
          </ul>
        </Card>
      }
    </Fragment>
  );
};

export default Cart;
