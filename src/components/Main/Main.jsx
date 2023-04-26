import "./Main.css";

import { Component } from "react";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsList from "../ProductsList/ProductsList";
import productsValue from "../../data/products.json";

const containerStyle = {
  minWidth: "840px",
  display: "flex",
  justifyContent: "center",
  columnGap: "8px",
  margin: "0 auto",
  backgroundColor: "#aed5ed",
  padding: "8px 20px",
};

// = ({ addProductToCart }) =>
class Main extends Component {
  state = {
    filter: [],
  };

  changeFilter = (e) => {
    const { value, checked } = e.target;

    this.setState((prev) => ({
      filter: checked
        ? [...prev.filter, value]
        : prev.filter.filter((el) => el !== value),
    }));

    console.log("value :>> ", value);
  };

  filterByType = () => {
    if (this.state.filter.length === 0) return productsValue;
    return productsValue.filter((el) => this.state.filter.includes(el.type));
  };

  render() {
    const filteredProducts = this.filterByType();

    return (
      <main>
        <div style={containerStyle}>
          <ProductsFilter changeFilter={this.changeFilter} />
          <ProductsList
            products={filteredProducts}
            addProductToCart={this.props.addProductToCart}
          />
        </div>
      </main>
    );
  }
}

export default Main;
