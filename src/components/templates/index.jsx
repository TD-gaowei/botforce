import { Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import IndustryDropdown from "./IndustryDropdown.jsx";
import { useState } from "react";
import Card from "../card/index.jsx";

const { Text } = Typography;

const Templates = () => {
  const [industry, setIndustry] = useState("total");

  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
  };

  const onIndustrySelect = (val) => {
    setIndustry(val);
  };

  return (
    <div>
      <div className={styles.template}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ marginRight: "8px" }}>Industry: </Text>
          <IndustryDropdown onSelect={onIndustrySelect} industry={industry} />
        </div>

        <Input
          value={search}
          className={styles.input}
          addonBefore={<SearchOutlined />}
          allowClear
          onChange={onSearch}
        />
      </div>
      <div style={{ padding: "24px", display: "flex", gap: "24px" }}>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Templates;
