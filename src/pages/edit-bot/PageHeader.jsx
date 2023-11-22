import { LeftOutlined } from "@ant-design/icons";
import { Button, Badge } from "antd";

import styles from "./index.module.css";
import { useBotStore, useEditBotPageStore } from "../../stores/index.js";

const PageHeader = () => {
  const { setVisible } = useEditBotPageStore();
  const { name } = useBotStore();

  return (
    <div className={styles["page-header"]}>
      <div className={styles.left}>
        <LeftOutlined
          style={{ cursor: "pointer" }}
          onClick={() => setVisible(false)}
        />
        <div style={{ marginLeft: "16px" }}>
          <h4 style={{ margin: 0 }}>{name}</h4>
          <p style={{ margin: 0 }}>
            <Badge color="#EDA813" />
            <span style={{ paddingLeft: "10px" }}>Draft</span>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <Button style={{ width: "64px", height: "40px" }}>Save</Button>
        <Button
          style={{
            width: "80px",
            height: "40px",
            background: "#3E048B",
            color: "#fff",
          }}
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
