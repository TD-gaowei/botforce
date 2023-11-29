import { useEffect, useMemo, useState } from "react";

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
import BotForceMessages from "./mockData.js";
import MapMessage from "./MapMessage.jsx";
import BouncingDotsLoader from "./loading/index.jsx";

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

  const [preview, setPreview] = useState(false);

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

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const onBotForceChange = (e) => {
    const val = e.target.value;

    setMessage(val);
  };

  const onBotForceKeyDownChange = (e) => {
    if (e.key === "Enter") {
      setMessages((prev) => [...prev, { type: "You", body: message }]);

      setIsLoading(true);
      setTimeout(() => {
        const matchedMessage = BotForceMessages.find((m) =>
          message.includes(m.identity),
        );

        if (!matchedMessage) {
          setMessage("");
          setIsLoading(false);
          return;
        }
        setIsLoading(false);

        setMessages((prev) => [
          ...prev,
          { type: "BotForce", body: matchedMessage.body },
        ]);

        setMessage("");
      }, 1000);
    }
  };

  const hasMap = useMemo(() => {
    return messages.some((m) => m.body.includes("Maps"));
  }, [messages]);

  const [parentRef, setParentRef] = useState(null);
  const [childRef, setChildRef] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!parentRef || !childRef) return;

    parentRef?.scrollTo({
      top: childRef?.clientHeight - parentRef?.clientHeight + 12,
      behavior: "smooth",
    });
  }, [childRef, parentRef, messages]);

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
            <h3 style={{ margin: 0 }}>Bot Training</h3>
            <p style={{ margin: 0 }}>
              Train your bot effortlessly using natural language
            </p>
          </div>
          <div style={{ gap: "8px", display: "flex" }}>
            <Switch onChange={(val) => setPreview(val)} />
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
            <div
              style={{ height: "calc(100vh - 350px)", overflow: "auto" }}
              ref={(element) => setParentRef(element)}
            >
              <div ref={(element) => setChildRef(element)}>
                {messages?.map((m) => (
                  <Message type={m.type} body={m.body} key={m.body} />
                ))}
                {isLoading ? <BouncingDotsLoader /> : null}

                {hasMap && <MapMessage />}
              </div>

              <Input
                value={message}
                placeholder={"Ask me anything"}
                style={{ position: "fixed", bottom: "50px", width: "640px" }}
                onChange={onBotForceChange}
                onKeyDown={onBotForceKeyDownChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
