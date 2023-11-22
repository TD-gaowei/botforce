import { Select } from "antd";

const IndustryDropdown = (props) => {
  // eslint-disable-next-line react/prop-types
  const { industry, onSelect } = props;

  const handleChange = (val) => {
    onSelect(val);
  };

  return (
    <Select
      value={industry}
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: "total", label: "total" },
        { value: "medical", label: "medical" },
        { value: "finance", label: "finance" },
        { value: "educate", label: "educate" },
      ]}
    />
  );
};

export default IndustryDropdown;
