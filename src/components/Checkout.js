import { useState } from "react";

import { Form, Input, Modal } from "antd";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const Checkout = (props) => {
    const [submitting, setSubmitting] = useState(false);

    return (
        <Modal
            title="Enter payment details"
            visible={props.displayModal}
            onCancel={props.onCancel}
            okButtonProps={{
                loading: submitting,
            }}
            onOk={() => {
                setSubmitting(true);
                setTimeout(() => {
                    setSubmitting(false);
                    props.onSuccess();
                }, 1000);
            }}
        >
            <Form {...layout} name="checkout-form">
                <Form.Item
                    name={["user", "name"]}
                    label="Name on card"
                    rules={[{required: true, message: "Please enter name on card."}]}
                >
                    <Input placeholder="John Smith"/>
                </Form.Item>

                <Form.Item
                    label="Card information"
                    rules={[
                        {
                            required: true,
                            message: "Please enter card information.",
                        },
                    ]}
                >
                    <Form.Item name={["card", "number"]} noStyle>
                        <Input placeholder="1234 1234 1234 1234"/>
                    </Form.Item>
                    <Input.Group compact>
                        <Form.Item name={["card", "expiry"]} noStyle>
                            <Input style={{width: "50%"}} placeholder="MM / YY"/>
                        </Form.Item>
                        <Form.Item
                            name={["card", "cvv"]}
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter card security code.",
                                },
                            ]}
                        >
                            <Input style={{width: "50%"}} placeholder="CVV"/>
                        </Form.Item>
                    </Input.Group>
                </Form.Item>

                <Form.Item
                    name={["address", "address"]}
                    label="Billing address"
                    rules={[
                        {
                            required: true,
                            message: "Please enter the billing address.",
                        },
                    ]}
                >
                    <Input placeholder="Lombard St, San Francisco, CA 94133"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default Checkout;