import { Form, Input, InputNumber, Button } from "antd";
import background from "./Background.png";
import { makeStyles } from '@mui/styles';

const Register = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  /* eslint-disable no-template-curly-in-string */

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

    backgroundImage: `url(${background})` ,
    backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    
  }

  const useStyles = makeStyles({
    root: {
      
      //margin: "100px",
      //padding: "100px",
      transform: "scale(1.5)",
      borderWidth: 100,
      shadowColor: 'red',
      shadowOffset: { height: 50, width: 20 },
      shadowOpacity: 0.9,
      shadowRadius: 0.9,
    },
  });

  return (
    <div style={backgroundStyles}>
      <Form
      style={{padding: "200px"}}
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
            //type: 'number',
            //min: 0,
            //max: 99,
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
        label="Your Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} className={useStyles().root}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};

export default Register;
