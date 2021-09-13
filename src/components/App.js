import * as React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import "./Announcement.js";
import "./Profile.js";
import "./Login.js";

import { Layout, Button, Menu, Space, Card } from "antd";
import {
  ToolOutlined,
  ContainerOutlined,
  DollarCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Announcement from "./Announcement.js";
import Profile from "./Profile.js";
import Payment from "./Payment.js";
import Request from "./Request.js";
import Login from "./Login.js";

const { Header, Content, Sider } = Layout;

function App() {
  const history = useHistory();

  return (
    <Layout>
      <Header className="header">
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            className="logo"
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
              letterSpacing: 0.5,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            UTOPIA
          </div>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <Space>
              <Button type="default" size="middle">
                Logout
              </Button>
            </Space>
          </div>
        </div>
      </Header>

      <Layout>
        <Sider theme="light" width={200} className="site-layout-background">
          <Menu defaultSelectedKeys={["1"]} mode="inline" theme="light">
            <Menu.Item
              key="1"
              icon={<ContainerOutlined />}
              onClick={() => {
                history.push("/page_announcement");
              }}
            >
              Announcement
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<ToolOutlined />}
              onClick={() => {
                history.push("/page_request");
              }}
            >
              Request
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<DollarCircleOutlined />}
              onClick={() => {
                history.push("/page_payment");
              }}
            >
              Payment
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UserOutlined />}
              onClick={() => {
                history.push("/page_profile");
              }}
            >
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100vh",
            }}
          >
            <Switch>
              <Route path="/page_announcement" exact>
                <Announcement />
              </Route>
              <Route path="/page_request" exact>
                <Request />
              </Route>
              <Route path="/page_payment" exact>
                <Payment />
              </Route>
              <Route path="/page_profile" exact>
                <Profile />
              </Route>
            </Switch>

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
