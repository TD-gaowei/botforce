import clsx from "clsx";
import styles from "./index.module.css";
import { Typography } from "antd";
const { Title } = Typography;

const functions = ["Integrations", "Automation Designer", "BotForce"];

const FunctionAside = () => {
  return (
    <div className={styles["function-aside"]}>
      <Title level={4} className={styles.title}>
        Builder
      </Title>
      <ul>
        {functions.map((f) => (
          <li
            key={f}
            className={clsx(styles.text, {
              [styles.selected]: f === "BotForce",
            })}
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionAside;
