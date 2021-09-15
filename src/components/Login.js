import { Form, Input, Button, Checkbox } from 'antd';
let Authen_state = 0
let input_username
let input_password

const Auth = () => {
  input_username = document.getElementById("username").value;
  input_password = document.getElementById("password").value;

  if (input_username === "AAAA" && input_password === "BBBB") {
    Authen_state = 1;
    document.getElementById("output").innerHTML = "Login Successfully"
  } else {
    Authen_state = 0;
    document.getElementById("output").innerHTML = "Login Failed"
  }
  console.log(Authen_state)
 
}

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input id="username"/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password id="password"/>
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
        <Button type="primary" htmlType="submit" onClick={Auth}>
          Submit
        </Button>
      </Form.Item>

      <Form.Item 
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
          <Button >Register Now</Button>
      </Form.Item>

      <Form.Item 
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >  <div type="text" id="output">
           
          
          </div>
      </Form.Item>

    </Form>
  );
};
  export default Login;


  