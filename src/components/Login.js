import { Form, Input, Space, Button, Checkbox, message, Card } from "antd";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import background from "../images/townhouse-background.jpeg";
import { login } from "../utils";

const Login = (props) => {
  const history = useHistory();

  const onFinish = (data) => {
    login(data)
      .then(() => {
        console.log("successfully logged in");
        props.onLogin();
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            <Input id="username" />
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
            <Input.Password id="password" />
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
            <Space>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button onClick={() => history.push("/register")}>
                Register Now
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
