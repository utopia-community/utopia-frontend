import { useHistory } from "react-router-dom";
import { Layout, Button, Space } from "antd";

const { Header, Content, Footer } = Layout;

const HomepageLayout = ({ children }) => {
  const history = useHistory();

  const onLogout = (e) => {
    console.log("Log out");
  };

  return (
    <Layout className="layout">
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
              {/* to perform role check for new announcement and requests from login API*/}
              {/* Update routing to request management page */}
              <Button
                type="default"
                size="middle"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Requests
              </Button>

              <Button
                type="default"
                size="middle"
                onClick={() => {
                  history.push("/announcements/new-announcement");
                }}
              >
                New announcement
              </Button>

              <Button
                type="default"
                size="middle"
                onClick={() => {
                  history.push("/profile");
                }}
              >
                My profile
              </Button>

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

      <div style={{ 
        background: 'rgb(2,0,36)',
        background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,55,121,0.23713235294117652) 0%, rgba(0,212,255,1) 100%)',
        padding: "50px" }}>
        Announcements
      </div>

      <Content style={{ padding: "50px 100px" }}>{children}</Content>

      <div style={{ 
        background: 'rgb(2,0,36)',
        background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,55,121,0.23713235294117652) 0%, rgba(0,212,255,1) 100%)',
        padding: "25px" }}>
        About us...
      </div>

      <Footer style={{ textAlign: "center" }}>
        <div>
          3645 Haven Avenue Menlo Park, CA 94025 | contactus@utopia.com |
          650-708-1455
        </div>
        <div>©2020 Utopia Management, LLC</div>
      </Footer>
    </Layout>
  );
};

export default HomepageLayout;
