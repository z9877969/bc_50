import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./ProductsListItem.module.scss";

const ProductsListItem = ({ sale, url, model, price = null, currency }) => {
  return (
    <li className={s.item}>
      <div className={s.imageWrapper}>
        {/* <p className={`products__sale ${sale ? "products__sale--active" : ""}`}> */}
        <p className={clsx(s.sale, sale && s.saleActive)}>Акція</p>
        <img className={s.image} src={url} alt={model} />
      </div>
      <div className={s.descr}>
        <h3 className={s.model}>{model}</h3>
        <span className={s.price}>{price ? price : "Ціна не визначена"}</span>
        {price > 0 && <span className={s.currency}>{currency}</span>}
      </div>
      <button className={s.btnBuy} type="button">
        Купити
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
  sale: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string.isRequired,
};

export default ProductsListItem;
