import { UserOutlined } from "@ant-design/icons";
// import { Avatar } from "antd";

import Avatar from "@cobalt/react-avatar";
import styles from "./message.module.css";
import { Typography } from "antd";
import Icon from "@cobalt/react-icon";
const { Paragraph } = Typography;

const Message = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, body } = props;

  return (
    <div className={styles.message}>
      {type === "You" ? (
        <Avatar color="light-theme" style={{ background: "#f1edf8" }}>
          <span style={{ color: "#3e048b" }}>YO</span>
        </Avatar>
      ) : (
        <Avatar color="light-theme" style={{ background: "#f1edf8" }}>
          <Icon name={"robot"} color={"#3e048b"} />
        </Avatar>
      )}

      <div>
        <h4 style={{ margin: 0 }}>{type}</h4>

        <Paragraph
          style={{ color: "#6F767D", margin: 0 }}
          ellipsis={{ rows: 3 }}
        >
          {body}
        </Paragraph>
      </div>
    </div>
  );
};

export default Message;
