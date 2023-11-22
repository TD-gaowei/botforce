import React, { useState } from "react";

import styles from "./index.module.css";
import { Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
import { Input, Switch } from "antd";
import Upload from "./Upload.jsx";
import Message from "./Message.jsx";
import UploadBotIcon from "./UploadBotIcon.jsx";

const { TextArea } = Input;
const Content = () => {
  const [apis, setApis] = useState([]);
  const [api, setApi] = useState(false);

  const [instruction, setInstruction] = useState("");
  const [instructionIsPreview, setInstructionIsPreview] = useState(false);

  const [preview, setPreview] = useState(true);

  const onInstructionChange = (e) => setInstruction(e.target.value);

  const onInstructionKeyDownChange = (e) => {
    if (e.key === "Enter") {
      setInstructionIsPreview(true);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <h3>Configuration</h3>
        <Paragraph style={{ color: "#6F767D" }}>
          Empower your bot with personalized instructions, knowledge base
          enhancements and API imports. Configure its capabilities according to
          your requirements.
        </Paragraph>

        <div style={{ alignSelf: "center", paddingTop: "24px" }}>
          <UploadBotIcon />
        </div>

        <h3>Instruction</h3>
        {instructionIsPreview ? (
          <Paragraph style={{ color: "#6F767D" }}>{instruction}</Paragraph>
        ) : (
          <TextArea
            value={instruction}
            rows={4}
            placeholder={"What does Health bot do? How does it behave?"}
            onChange={onInstructionChange}
            onKeyDown={onInstructionKeyDownChange}
          />
        )}

        <h3 style={{ paddingTop: "24px" }}>Import content</h3>
        <Upload />

        <h3 style={{ paddingTop: "24px" }}>Connected Api</h3>

        {apis.map((api) => (
          <div key={api}>1111</div>
        ))}
        <div onClick={() => setApi(true)}>
          {api ? (
            <Input allowClear />
          ) : (
            <>
              <PlusCircleOutlined />
              <span style={{ paddingLeft: "4px" }}>
                Type Api link, press “Enter” to add an Api
              </span>
            </>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div>
            <h3 style={{ margin: 0 }}>Train</h3>
            <p style={{ margin: 0 }}>
              Train your bot effortlessly using natural language
            </p>
          </div>
          <div style={{ gap: "8px", display: "flex" }}>
            <Switch defaultChecked onChange={(val) => setPreview(val)} />
            <span style={{ margin: 0 }}>Preview mode</span>
          </div>
        </div>

        <div className={styles.bottom}>
          {preview ? (
            <div>Preview Page!</div>
          ) : (
            <div style={{ flex: 1 }}>
              <Message />
              <Message />
            </div>
          )}

          <Input placeholder={"Ask me anything"} />
        </div>
      </div>
    </div>
  );
};

export default Content;
