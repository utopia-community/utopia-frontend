import { Form, Input, InputNumber, Button, Card } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Checkout = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Card title="Payment details">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name on card"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="John Smith" />
        </Form.Item>

        <Form.Item
          name={["card", "card"]}
          label="Card information"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="1234 1234 1234 1234" />
          <Input.Group compact>
            <Input style={{ width: "50%" }} placeholder="MM / YY" />
            <Input style={{ width: "50%" }} placeholder="CVV" />
          </Input.Group>
        </Form.Item>

        <Form.Item
          name={["address", "address"]}
          label="Billing address"
          rules={[
            {
              required: true,
            },
          ]}
        >
                    <Input placeholder="Lombard St, San Francisco, CA 94133" />
        </Form.Item>

        {/* <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item> */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Pay
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Checkout;
