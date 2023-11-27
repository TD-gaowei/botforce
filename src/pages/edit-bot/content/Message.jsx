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
          ellipsis={{ rows: 10 }}
        >
          {body}
        </Paragraph>
        {type === "BotForce" && (
          <div style={{ display: "flex", flexDirection: "row", gap: "6px" }}>
            <Icon name={"thumb_up_outline"} size={"tiny"} color={"#AEB3B8"} />
            <Icon name={"thumb_down_outline"} size={"tiny"} color={"#AEB3B8"} />
            <Icon name={"feature_survey"} size={"tiny"} color={"#AEB3B8"} />
            <Icon name={"refresh"} size={"tiny"} color={"#AEB3B8"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
