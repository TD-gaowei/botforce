import { Button, Typography } from "antd";

import styles from "./index.module.css";
import CreateBot from "../../components/Modals/CreateBot.jsx";
import { useState } from "react";

const { Title } = Typography;

const ToolBar = () => {
  const [visible, setVisible] = useState(false);

  const onShowModal = () => setVisible(true);

  const onCloseModal = () => setVisible(false);

  return (
    <div className={styles.toolbar}>
      <Title level={4} style={{ margin: 0 }}>
        BotForce
      </Title>
      <Button type={"primary"} onClick={onShowModal} className={styles.button}>
        + New bot
      </Button>
      {visible ? (
        <CreateBot isModalOpen={visible} onCancel={onCloseModal} />
      ) : null}
    </div>
  );
};
export default ToolBar;
