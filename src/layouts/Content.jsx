import ToolBar from "./content/ToolBar.jsx";
import styles from "./index.module.css";
import { Tabs } from "antd";
import Templates from "../components/templates/index.jsx";
import EditBot from "../pages/edit-bot/index.jsx";
import { useEditBotPageStore } from "../stores/index.js";

const items = [
  {
    key: "1",
    label: "My bots",
    children: <div style={{ padding: "24px" }}>My bots Page!</div>,
  },
  {
    key: "2",
    label: "Templates",
    children: <Templates />,
  },
];

const Content = () => {
  const { visible, setVisible } = useEditBotPageStore();

  return (
    <div className={styles.content}>
      {visible ? (
        <EditBot />
      ) : (
        <>
          <ToolBar />
          <Tabs defaultActiveKey="2" items={items} style={{ height: "36px" }} />
        </>
      )}
    </div>
  );
};
export default Content;
