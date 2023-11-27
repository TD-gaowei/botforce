import Avatar from "@cobalt/react-avatar";
import styles from "./message.module.css";
import Icon from "@cobalt/react-icon";

import mapSrc from "../../../assets/maps.png";

const Message = () => {
  return (
    <div className={styles.message}>
      <Avatar color="light-theme" style={{ background: "#f1edf8" }}>
        <Icon name={"robot"} color={"#3e048b"} />
      </Avatar>

      <div>
        <img src={mapSrc} style={{ height: "300px" }} />
      </div>
    </div>
  );
};

export default Message;
