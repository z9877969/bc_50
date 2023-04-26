import "./ProductsList.css";

import ProductsListItem from "../ProductsListItem/ProductsListItem";
import PropTypes from "prop-types";

const ProductsList = (props) => {
  const { products, addProductToCart } = props;

  return (
    <ul className="products">
      {products.map((product) => (
        <ProductsListItem
          key={product.id}
          id={product.id}
          sale={product.sale}
          url={product.url}
          model={product.model}
          price={product.price}
          currency={product.currency}
          addProductToCart={addProductToCart}
        />
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
