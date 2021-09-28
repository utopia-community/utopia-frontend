import React from "react";
import { Form, Input, Button, message, Modal, Upload, Col, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { newRequest } from "../utils";

class NewRequest extends React.Component {
  onFinish = (data) => {
    newRequest(data)
      .then(() => {
        message.success(`New request is submitted!`);
        this.props.onSuccess();
      })
      .catch((err) => {
        this.props.onCancel();
        message.error(err.message);
      });
  };

  render = () => {
    const { Option } = Select;

    return (
      <>
        <Modal
          title="New Request"
          visible={this.props.displayModal}
          onCancel={this.props.onCancel}
          footer={null}
          destroyOnClose={true}
        >
          <Form name="request" onFinish={this.onFinish} preserve={false}>
            <Form.Item
              name="title"
              label="Issue"
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
                <Option value="BOOK_FACILITIES">Book facilities</Option>
                <Option value="REQUEST_REPAIR">Request for repair</Option>
                <Option value="LODGE_COMPLAINT">Lodge a complaint</Option>
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

            <Col>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                className="upload-list-inline"
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Col>
            <br />
            <Col>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Form>
        </Modal>
      </>
    );
  };
}

export default NewRequest;
