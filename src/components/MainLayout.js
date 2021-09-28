import { useHistory } from "react-router-dom";
import { Layout, Button, Space } from "antd";
import "./MainLayout.css";
import { is } from "@babel/types";
import { getCurrentUserRole } from "../utils";

const { Header, Content, Footer } = Layout;
const isAdmin = getCurrentUserRole();
const showLogoText = admin => {
  return admin ? "UTOPIA|ADMIN" : "UTOPIA";
};
const MainLayout = ({ children }) => {
  const history = useHistory();
  const showIconsPerUserType = () => {
    return isAdmin ? (
      <div>
        <Button
          type="text"
          size="middle"
          onClick={() => {
            history.push("/admin/requests");
          }}
        >
          Requests
        </Button>
        <Button
          type="text"
          size="middle"
          onClick={() => {
            history.push("/announcements/new-announcement");
          }}
        >
          New announcement
        </Button>
      </div>
    ) : (
      <Button
        type="text"
        size="middle"
        onClick={() => {
          history.push("/profile");
        }}
      >
        My profile
      </Button>
    );
  };
  const onLogout = e => {
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
            className="MainLayout-logo"
          >
            {showLogoText(isAdmin)}
          </a>
          <div className="MainLayout-buttonDiv">
            <Space>
              <Button
                type="text"
                size="middle"
                onClick={() => {
                  history.push("/announcements");
                }}
              >
                Home
              </Button>
              {showIconsPerUserType()}
              <Button
                type="text"
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

      <Footer className="MainLayout-footer">
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
