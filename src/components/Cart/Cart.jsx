import {
  BtnRemove,
  BtnSubmit,
  ButtonClose,
  CartProduct,
  CartWrapper,
  DescrWrapper,
  ProductsList,
} from "./Cart.styled";

import sprite from "../../assets/icons/sprite.svg";

console.log("sprite :>> ", sprite);

const Cart = () => {
  return (
    <CartWrapper isOpen >
      <ButtonClose type="button">
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </ButtonClose>
      <ProductsList>
        <CartProduct>
          <img
            class="cart-image"
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <DescrWrapper>
            <h3>ZTE RedMagic</h3>
            <span>11999</span>
            <span>UAH</span>
          </DescrWrapper>
          <BtnRemove type="button">
            <svg class="cart-icon-remove">
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </BtnRemove>
        </CartProduct>
      </ProductsList>
      <BtnSubmit class="cart-btn-order" type="button">
        Submit
      </BtnSubmit>
    </CartWrapper>
  );
};

export default Cart;
