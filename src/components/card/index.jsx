import { Typography, Avatar, Button } from "antd";

import styles from "./index.module.css";
import {
  UserOutlined,
  CodepenCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useEditBotPageStore } from "../../stores/index.js";

const { Paragraph } = Typography;

const Card = () => {
  const { setVisible } = useEditBotPageStore();

  const onOpenEditBotPage = () => {
    setVisible(true);
  };

  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0",
        }}
      >
        <Avatar size={52} icon={<UserOutlined />} />

        <div style={{ display: "flex", gap: "12px" }}>
          <CodepenCircleOutlined size={24} />
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{
              width: "88px",
              height: "40px",
              background: "#E8EAEB",
              color: "#000",
            }}
            onClick={onOpenEditBotPage}
          >
            Use
          </Button>
        </div>
      </div>
      <h4 style={{ color: "#3E048B", paddingTop: "24px" }}>Healthcare</h4>
      <h2 style={{ margin: 0 }}>Doctor assistant bot</h2>
      <Paragraph ellipsis={{ rows: 3 }} style={{ color: "#6F767D" }}>
        Provide doctor a smooth experience to manage their appointments
      </Paragraph>
    </div>
  );
};

export default Card;
