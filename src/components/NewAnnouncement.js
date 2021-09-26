import { Card, Form, Input, Button, message, Select } from "antd";
import { useHistory } from "react-router-dom";
import { newAnnouncement } from "../utils";

const NewAnnouncement = () => {
  const history = useHistory();
  const { Option } = Select;

  const onFinish = (values) => {
    newAnnouncement({
      title: values.title,
      category: values.category,
      content: values.content,
    })
      .then(() => {
        history.push("/announcements");
        message.success("New announcement has been successfully created!");
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  return (
    <Card title="Create new announcement" style={{minHeight: "0"}}>
      <Form
        name="newAnnouncement"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input the title." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category." }]}
        >
          <Select>
            <Option value="GENERAL_ANNOUNCEMENT">General announcement</Option>
            <Option value="COMMITTEE_MEETING">Committee meeting</Option>
            <Option value="MAINTENANCE_UPDATE">Maintenance update</Option>
            <Option value="OTHERS">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="content"
          label="Description"
          rules={[
            { required: true, message: "Please input your description." },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 7, maxRows: 12 }} />
        </Form.Item>

        <br />

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default NewAnnouncement;
