import { useHistory } from "react-router-dom";
import "./Announcement.js";
import "./Profile.js";
import "./Login.js";
import "./Request.js";
import "./NewRequest.js";
import "./AnnouncementDetails.js";
import {
  ToolOutlined,
  ContainerOutlined,
  DollarCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Button, Menu, Space } from "antd";

const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
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
                history.push("/announcement");
              }}
            >
              Announcement
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<ToolOutlined />}
              onClick={() => {
                history.push("/request");
              }}
            >
              Request
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<DollarCircleOutlined />}
              onClick={() => {
                history.push("/payment");
              }}
            >
              Payment
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UserOutlined />}
              onClick={() => {
                history.push("/profile");
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
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
