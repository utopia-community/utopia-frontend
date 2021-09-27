import React from "react";
import { Row, Col, Avatar, Descriptions, Divider, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getAccountInfo} from "../utils";
import "./AccountInfo.css";

class AccountInfo extends React.Component {
  state = {
    accountInfo: {
      email: null,
      firstName: null,
      lastName: null,
      address: null,
    },
    orderData: null,
  };

  componentDidMount() {
    // 1. query current logged in user's info
    getAccountInfo()
      .then((res) => {
        this.setState({
          accountInfo: res,
        });
        console.log("got account info");
        console.log(res);
      })
      .catch((err) => {
        console.log("did not get account info");
        message.error(err.message);
      });

    // 2. query current logged in user's REQUES.
    // getAllRequests()
    //   .then(res => {
    //       this.setState({orderData: res});
    //       console.log(res);
    //   });
  }
  render() {
    return (
      <Row>
        <Col flex={1}></Col>
        <Col flex={3}>
          <br />
          <Divider>
            <h1>ACCOUNT INFO</h1>
          </Divider>
          <div className="AccountInfo-div">
            <Avatar size={100} icon={<UserOutlined />} />
          </div>
          <br />
          <Descriptions
            title="Personal Information"
            bordered
            layout="vertical"
            size="small"
            column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="First Name">
              {this.state.accountInfo.firstName}
            </Descriptions.Item>
            <Descriptions.Item label="Last Name">
              {this.state.accountInfo.lastName}
            </Descriptions.Item>
            <Descriptions.Item label="Email Address">
              {this.state.accountInfo.email}
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Descriptions
            title="Address"
            bordered
            column={{ xxl: 3, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
          >
            <Descriptions.Item label="Address">
              {this.state.accountInfo.address}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <br />
          <br />
          <br />
          <br />
        </Col>
        <Col flex={1}></Col>
      </Row>
    );
  }
}

export default AccountInfo;
