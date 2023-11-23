import { Typography, Avatar, message } from "antd";
import Icon from "@cobalt/react-icon";
import styles from "./index.module.css";
import CobaltButton from "@cobalt/react-button";
const { Paragraph } = Typography;

const Card = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  // eslint-disable-next-line react/prop-types
  const { botname, description } = props;
  // const { setVisible } = useEditBotPageStore();
  // const { setName } = useBotStore();

  const onOpenEditBotPage = () => {
    // setVisible(true);
    // setName(botname);
    messageApi.open({
      type: "success",
      content: "Bot is now in use!",
    });
  };

  return (
    <div className={styles.card}>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0",
        }}
      >
        <Avatar
          size={52}
          icon={<Icon name={"calendar_medical"} color="#3e048b" />}
        />

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Icon name={"visibility"} size="tiny" />
          <CobaltButton type="secondary" onClick={onOpenEditBotPage}>
            <Icon name={"create"} size="tiny" />
            <span style={{ paddingLeft: "8px" }}>Use</span>
          </CobaltButton>
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
