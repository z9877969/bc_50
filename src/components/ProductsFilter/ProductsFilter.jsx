import s from "./ProductsFilter.module.css";

const ProductsFilter = ({ changeFilter }) => {
  return (
    <div className={s.filter}>
      <ul className={s.list}>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="apple"
            type="checkbox"
            id="apple"
            onChange={changeFilter}
          />
          <label className={s.label} htmlFor="apple">
            Apple
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="xiaomi"
            type="checkbox"
            id="xiaomi"
            onChange={changeFilter}
          />
          <label className={s.label} htmlFor="xiaomi">
            Xiaomi
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="samsung"
            type="checkbox"
            id="samsung"
            onChange={changeFilter}
          />
          <label className={s.label} htmlFor="samsung">
            Samsung
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="zte"
            type="checkbox"
            id="zte"
            onChange={changeFilter}
          />
          <label className={s.label} htmlFor="zte">
            Zte
          </label>
        </li>
        <li className={s.item}>
          <input
            className={s.input}
            name="filter"
            value="huawei"
            type="checkbox"
            id="huawei"
            onChange={changeFilter}
          />
          <label className={s.label} htmlFor="huawei">
            Huawei
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ProductsFilter;
