import React, { useState } from "react";
import { Card, Form, Input, Button, Select } from "antd";
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
    });
    history.push("/announcements");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title="Create new announcement">
      <Form
        name="newAnnouncement"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{
          title: "",
          category: "category1",
          content: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
            <Option value="category1">General announcement</Option>
            <Option value="category2">Committee meeting</Option>
            <Option value="category3">Maintenance update</Option>
            <Option value="category4">Others</Option>
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
