import "./Main.css";

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

const Main = () => {
  return (
    <main>
      <div style={containerStyle}>
        <ProductsFilter />
        <ProductsList products={productsValue} />
      </div>
    </main>
  );
};

export default Main;
