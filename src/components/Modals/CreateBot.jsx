import { Modal } from "antd";
import { Form, Input } from "antd";

function noop() {}

const { TextArea } = Input;

const CreateBot = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isModalOpen, handleOk, onCancel } = props;

  return (
    <Modal
      title="Create a bot"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={onCancel}
      okText={"Save"}
    >
      <Form
        name="basic"
        layout={"vertical"}
        style={{
          maxWidth: 600,
        }}
        onFinish={noop}
        onFinishFailed={noop}
        autoComplete="off"
      >
        <Form.Item
          label="Bot name"
          name="botname"
          rules={[
            {
              required: true,
              message: "Please input bot name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input bot description!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBot;
