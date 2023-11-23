import { useState } from "react";

import styles from "./index.module.css";
import Icon from "@cobalt/react-icon";
import { Typography, Tag, Divider } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
import { Input, Switch } from "antd";
import Upload from "./Upload.jsx";
import Message from "./Message.jsx";
import UploadBotIcon from "./UploadBotIcon.jsx";

import welcomeSrc from "../../../assets/welcome.png";

const tags = [
  "Seek medication advice",
  "My prescription",
  "Cancel appointment",
  "My clinic visit recording",
  "Change the date of appointment",
  "Describe my symptom",
];

const { TextArea } = Input;
const Content = () => {
  const [apis, setApis] = useState([]);
  const [api, setApi] = useState(false);

  const [apiText, setApiText] = useState("");

  const [instruction, setInstruction] = useState("");
  const [instructionIsPreview, setInstructionIsPreview] = useState(false);

  const [preview, setPreview] = useState(true);

  const onInstructionChange = (e) => setInstruction(e.target.value);

  const onInstructionKeyDownChange = (e) => {
    if (e.key === "Enter") {
      setInstructionIsPreview(true);
    }
  };

  const onApiChange = (e) => {
    const val = e.target.value;
    setApiText(val);
  };

  const onApiKeyDownChange = (e) => {
    if (e.key === "Enter") {
      setApis((prev) => [...prev, apiText]);
      setApiText("");
      setApi(false);
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

        <div
          style={{
            background: "#FAFAFA",
            padding: "0 24px",
            borderRadius: "4px",
          }}
        >
          {apis.map((api, _idx) => (
            <>
              <div key={api} style={{ padding: "16px 0" }}>
                {api}
              </div>
              {_idx !== apis.length - 1 && <Divider />}
            </>
          ))}
        </div>

        <div style={{ marginTop: "4px" }}>
          {api ? (
            <Input
              value={apiText}
              allowClear
              onChange={onApiChange}
              onKeyDown={onApiKeyDownChange}
            />
          ) : (
            <div
              onClick={() => setApi(true)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Icon
                name={"add_circle_outline"}
                size={"tiny"}
                color={"#3E048B"}
              />
              <span
                style={{
                  paddingLeft: "4px",
                  color: "#AEB3B8",
                  fontSize: "14px",
                }}
              >
                Type Api link, press “Enter” to add an Api
              </span>
            </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flex: 1,
                background: "#F2F4F5",
              }}
            >
              {/*<h3>Welcome</h3>*/}
              {/*<p>Pick an option from below prompts to get started</p>*/}
              {/*<div*/}
              {/*  style={{*/}
              {/*    display: "flex",*/}
              {/*    gap: "12px",*/}
              {/*    flexWrap: "wrap",*/}
              {/*    width: "80%",*/}
              {/*  }}*/}
              {/*>*/}
              {/*  {tags.map((t) => (*/}
              {/*    <Tag key={t}>{t}</Tag>*/}
              {/*  ))}*/}
              {/*</div>*/}
              <img src={welcomeSrc} alt={"welcome"} width="80%" />
              <Input
                placeholder={"Ask me anything"}
                style={{ position: "fixed", bottom: "50px", width: "600px" }}
              />
            </div>
          ) : (
            <div style={{ flex: 1 }}>
              <Message />

              <Input
                placeholder={"Ask me anything"}
                style={{ position: "fixed", bottom: "50px", width: "640px" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
