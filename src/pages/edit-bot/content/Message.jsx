import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import styles from "./message.module.css";

const Message = () => {
  return (
    <div className={styles.message}>
      <Avatar size={40} icon={<UserOutlined />} />
      <div>
        <h4 style={{ margin: 0 }}>You</h4>
        <p style={{ margin: 0 }}>Hi</p>
      </div>
    </div>
  );
};

export default Message;
