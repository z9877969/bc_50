import "./App.css";

import Cart from "../Cart/Cart";
import { Component } from "react";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import Main from "../Main/Main";

class App extends Component {
  state = {
    isCartOpen: false,
    cartProducts: [],
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  addProductToCart = (product) => {
    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, product],
    }));
  };

  render() {
    return (
      <>
        <Header openCart={this.openCart} />
        <Main addProductToCart={this.addProductToCart} />
        <Cart
          isOpen={this.state.isCartOpen}
          closeCart={this.closeCart}
          products={this.state.cartProducts}
        />
        {/* <Counter test="Test string" /> */}
      </>
    );
  }
}

export default App;
