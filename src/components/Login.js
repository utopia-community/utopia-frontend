import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";

let username;
let password;

const Login = (props) => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onInputName = (e) => {
    username = e.target.value;
  };

  const onInputPassword = (e) => {
    password = e.target.value;
  };

  const validateLogin = (username, password) => {
    if (username === "AAAA" && password === "BBBB") {
      props.onLogin();
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input id="username" onChange={onInputName} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password id="password" onChange={onInputPassword} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            validateLogin(username, password);
          }}
        >
          Submit
        </Button>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={() => history.push("/register")}>Register Now</Button>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {" "}
        <div type="text" id="output"></div>
      </Form.Item>
    </Form>
  );
};
export default Login;
