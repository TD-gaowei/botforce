import "./App.css";
import Header from "./layouts/Header.jsx";
import ProductAside from "./layouts/ProductAside.jsx";
import FunctionAside from "./layouts/FunctionAside.jsx";

import styles from "./index.module.css";
import Content from "./layouts/Content.jsx";

function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <ProductAside />
        <FunctionAside />
        <Content />
      </div>
    </>
  );
}

export default App;
