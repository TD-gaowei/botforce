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
    children: <Templates />,
  },
  {
    key: "2",
    label: "Templates",
    children: <Templates />,
  },
];

const onChange = (key) => {
  console.log(key);
};

const Content = () => {
  const { visible, setVisible } = useEditBotPageStore();

  console.log("::::", visible, setVisible);

  return (
    <div className={styles.content}>
      {visible ? (
        <EditBot />
      ) : (
        <>
          <ToolBar />
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            style={{ height: "36px" }}
          />
        </>
      )}
    </div>
  );
};
export default Content;
