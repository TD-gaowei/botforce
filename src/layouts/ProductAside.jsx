import styles from "./index.module.css";

import products from "../assets/products.png";

import apps from "../assets/apps.png";

const ProductAside = () => {
  return (
    <aside className={styles["product-aside"]}>
      <img src={products} alt="products" className={styles.products} />
      <div>
        <img src={apps} alt={"apps"} style={{ width: "54px" }} />
        <div style={{ height: "12px" }}></div>
      </div>
    </aside>
  );
};

export default ProductAside;
