import { Button, Card, Checkbox, Form, Input, Space, message } from "antd";
import { useHistory } from "react-router-dom";
import { login } from "../utils";
import "./Login.css";

const Login = (props) => {
    const history = useHistory();

    const onFinish = (data) => {
        login(data)
            .then((user) => {
                message.success(
                    `Welcome back, ${user.firstName + " " + user.lastName}`
                );
                props.onLogin(user);
            })
            .catch((err) => {
                message.error(err.message);
            });
    };

    return (
        <div className="Login-background">
            <Card title="Login to Utopia" className="Login-card">
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
                        <Input id="username"/>
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