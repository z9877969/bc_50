import "./Header.css";

import logoImg from "../../assets/images/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ openCart }) => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logoImg} alt="logo" />
      </a>
      <div className="header__user-info">
        <span className="header__user-name">B</span>
        <span className="header__user-email">user@mail.com</span>
      </div>
      <div className="header__cart-info">
        <button
          type="button"
          className="header__btn-cart"
          onClick={() => {
            openCart();
          }}
        >
          <svg>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
