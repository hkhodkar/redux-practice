import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  { id: 'p1', title: 'my first book', price: 12.99, description: 'this is my first book', quantity: 1 },
  { id: 'p2', title: 'my second book', price: 14.99, description: 'this is my seconf book', quantity: 1 },
]

const Products = (props) => {

  const productList = Dummy_Products.map(item =>
    <ProductItem
      id={item.id}
      key={item.id}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      description={item.description}
    />)

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList}
      </ul>
    </section>
  );
};

export default Products;
