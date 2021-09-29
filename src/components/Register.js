import { Form, Input, Button, Card } from "antd";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import "./Register.css"
import { useEffect, useState } from "react";
import { register } from "../utils";


/*const RegisterContent = (props) => {
  return (
    <Space direction="vertical">
      <h5>
        <Text type="secondary"> {props.date}</Text>
      </h5>
      <Text>{props.content}</Text>
    </Space>
  );
};*/

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
  /*
  const registerInfo = () => {
    
    message.success({
      content: "Register Successfully!",
      duration: 5,
    });
    history.push("/login");
    //onFinish();
  };
  
  
  const [register_account, setAccount] = useState([]);

  useEffect(() => {
    register()
      .then((data) => {
        setAccount(data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  }, []);
*/
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
    register({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      address: values.address,
    })
      .then(() => {
        history.push("/login");
        message.success("New account has been successfully created!");
      })
      .catch((err) => {
        message.error(err.message);
      });
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
            name = "firstName"
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
            name = "lastName"
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
            name = "username"
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
            name = "password"
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
            name = "address"
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
            <Button type="primary" htmlType="submit" onClick={() => history.push("/login")}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      
      </Card>
      
    </div>
  );
};

export default Register;
