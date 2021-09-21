import { Form, Input, Button, Checkbox, message, Card } from "antd";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import background from "./house_background.jpg";

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
    } else {
      unsuccessfulLogin();
    }
  };

  const backgroundStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

  const useStyles = makeStyles({
    root: {
      transform: "scale(1.0)",
      borderWidth: 100,
      shadowColor: "red",
      shadowOffset: { height: 50, width: 20 },
      shadowOpacity: 0.9,
      shadowRadius: 0.9,
    },
  });

  const unsuccessfulLogin = () => {
    message.error('Your user id or password is incorrect. Please try again.');
  };

  return (
    <div style={backgroundStyles}>
      <Card title="Login to Utopia" style={{ width: "640px" }}>
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
            className={useStyles().root}
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
            className={useStyles().root}
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
            className={useStyles().root}
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
            className={useStyles().root}
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

          <Form.Item className={useStyles().root} label="Create account">
            <Button onClick={() => history.push("/register")}>
              Register Now
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
