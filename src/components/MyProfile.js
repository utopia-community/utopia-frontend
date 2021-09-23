import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Descriptions, Divider, Form, message } from "antd";
import { Table, Tag, Space } from "antd";
import { getAccountInfo, getAllOrders } from "../utils";

const { Column, ColumnGroup } = Table;

class MyProfile extends React.Component {
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
      .then(res => {
        this.setState({
          accountInfo: res,
        });
        console.log("got account info");
        console.log(res);
      })
      .catch(err => {
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
        <Col span={6} />
        <Col span={12}>
          <br />
          <Divider>
            <h1>ACCOUNT INFO</h1>
          </Divider>
          <Descriptions
            title="Personal Information"
            bordered
            layout="vertical"
            labelStyle={{ color: "red" }}
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
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
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
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
        <Col span={6} />
      </Row>
    );
  }
}

export default MyProfile;
