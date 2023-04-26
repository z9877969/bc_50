import {
  BtnRemove,
  BtnSubmit,
  ButtonClose,
  CartProduct,
  CartWrapper,
  DescrWrapper,
  ProductsList,
} from "./Cart.styled";

import PropTypes from "prop-types";
import sprite from "../../assets/icons/sprite.svg";

const Cart = ({ isOpen, closeCart, products }) => {
  // state = {isOpen: false} | propducts

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  return (
    <div
      style={
        isOpen
          ? { position: "absolute", top: 0, width: "100vw", height: "100vh" }
          : {}
      }
      onClick={handleBackdropClick}
    >
      <CartWrapper isOpen={isOpen}>
        <ButtonClose type="button" onClick={closeCart}>
          <svg>
            <use href={sprite + "#icon-cross"}></use>
          </svg>
        </ButtonClose>
        <ProductsList>
          {products.map(({ currency, model, price, url, id }) => (
            <CartProduct key={id}>
              <img src={url} alt={model} />
              <DescrWrapper>
                <h3>{model}</h3>
                <span>{price}</span>
                <span>{currency}</span>
              </DescrWrapper>
              <BtnRemove type="button">
                <svg>
                  <use href={sprite + "#icon-bin2"}></use>
                </svg>
              </BtnRemove>
            </CartProduct>
          ))}
        </ProductsList>
        <BtnSubmit type="button">Submit</BtnSubmit>
      </CartWrapper>
    </div>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
