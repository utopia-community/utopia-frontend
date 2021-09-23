import { useHistory } from "react-router-dom";
import { Layout, Button, Menu, Space, message } from "antd";
import { logout } from "../utils";

const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
  const history = useHistory();

  const onLogout = (e) => {
    logout()
      .then(() => {
        message.success("Successfully logged out!");
        console.log("Log out");
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

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
              <Button
                type="default"
                size="middle"
                onClick={() => {
                  history.push("/login");
                  onLogout();
                }}
              >
                Logout
              </Button>
            </Space>
          </div>
        </div>
      </Header>

      <Layout>
        <Sider theme="light" width={200} className="site-layout-background">
          <div>User profile details here...</div>
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
