import { useHistory } from "react-router-dom";
import { Layout, Button, Space } from "antd";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  const history = useHistory();

  const onLogout = (e) => {
    console.log("Log out");
  };

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header className="header" style={{ background: "white" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <a
            onClick={() => history.push("/announcements")}
            className="logo"
            style={{
              display: "block",
              color: "black",
              fontSize: 28,
              letterSpacing: "5px",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            UTOPIA
          </a>
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
                  history.push("/announcements");
                }}
              >
                Home
              </Button>
              {/* to perform role check for new announcement and requests from login API*/}
              {/* Update routing to request management page */}
              <Button
                type="default"
                size="middle"
                onClick={() => {
                  history.push("/admin/requests");
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

      <Content>{children}</Content>
      {/* <Content style={{ padding: "50px 100px" }}>{children}</Content> */}

      <Footer
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "white",
          padding: "12px",
          background: "#041E42",
        }}
      >
        <div>About us</div>
        <div>
          Utopia community features townhouses with spacious interiors,
          light-filled rooms, modern finishes and the latest in smart home tech.
        </div>
        <div>
          These are accompanied by a collection of outdoor spaces and
          hospitality-focused amenities.
        </div>
        <div style={{ marginTop: "1rem" }}>
          3645 Haven Avenue Menlo Park, CA 94025 | contactus@utopia.com |
          650-708-1111
        </div>
        <div>©2020 Utopia Management, LLC</div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
