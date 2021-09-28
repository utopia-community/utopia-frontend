import { Form, Input, Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import "./Register.css"

const Register = () => {
  const history = useHistory();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const registerInfo = () => {
    message.success({
      content: "Register Successfully!",
      duration: 5,
    });
    history.push("/login");
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

  const onFinish = (values) => {
    console.log(values);
  };

  // SYC: mui Style not needed
  // const useStyles = makeStyles({
  //   root: {
  //     //margin: "100px",
  //     //padding: "100px",
  //     transform: "scale(1.0)",
  //     borderWidth: 100,
  //     shadowColor: "red",
  //     shadowOffset: { height: 50, width: 20 },
  //     shadowOpacity: 0.9,
  //     shadowRadius: 0.9,
  //   },
  // });

  return (
    <div className="Register-background">
      <Card title="Create a Utopia account" className="Register-card">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "firstName"]}
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "lastName"]}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "username"]}
            label="Username"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "password"]}
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "address"]}
            label="Residential unit"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          >
            <Button type="primary" htmlType="submit" onClick={registerInfo}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
