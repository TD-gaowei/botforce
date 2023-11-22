import { Typography, Avatar, Button } from "antd";

import styles from "./index.module.css";
import {
  UserOutlined,
  CodepenCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useBotStore, useEditBotPageStore } from "../../stores/index.js";

const { Paragraph } = Typography;

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { botname, description } = props;
  const { setVisible } = useEditBotPageStore();
  const { setName } = useBotStore();

  const onOpenEditBotPage = () => {
    setVisible(true);
    setName(botname);
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
      <h2 style={{ margin: 0 }}>{botname}</h2>
      <Paragraph ellipsis={{ rows: 3 }} style={{ color: "#6F767D" }}>
        {description}
      </Paragraph>
    </div>
  );
};

export default Card;
