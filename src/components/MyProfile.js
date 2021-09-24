import { Layout } from "antd";
import React from "react";
import AccountInfo from "./AccountInfo";
import Payment from "./Payment";
import Request from "./Request";

const { Content, Sider } = Layout;

const MyProfile = () => {
  return (
    <>
      <Layout>
        <Sider theme="light" width={400} className="site-layout-background">
          <AccountInfo />
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
            <Request />
            <Payment />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MyProfile;
