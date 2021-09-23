import { Form, Input, Button, Card } from "antd";
import background from "./house_background.jpg";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { message } from "antd";
import { register } from "../utils";

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
    message.info({
      content: "Register Successfully!",
      duration: 5,
      className: "custom-class",
      style: {
        marginTop: "10vh",
        // fontSize: '20px',
      },
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
      //margin: "100px",
      //padding: "100px",
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
      <Card title="Create a Utopia account" style={{ width: "640px" }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            className={useStyles().root}
            name={["user", "firstName"]}
            label="First Name"
            rules={[
              {
                required: true,
                //type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className={useStyles().root}
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
            className={useStyles().root}
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
            className={useStyles().root}
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
            className={useStyles().root}
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
            className={useStyles().root}
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
