import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Cart = (props) => {
  const toggleCart = useSelector(state => state.ui.toggleCart)

  return (

    <Fragment>
      {
        toggleCart &&
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
            />
          </ul>
        </Card>
      }
    </Fragment>
  );
};

export default Cart;
