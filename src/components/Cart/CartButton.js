import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItem = useSelector(state => state.cart.totalCount)
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
