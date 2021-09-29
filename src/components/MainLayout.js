import { useHistory } from "react-router-dom";
import { Layout, Button, Space } from "antd";
import "./MainLayout.css";
import { AboutUs } from "./AboutUs.js";

const { Header, Content, Footer } = Layout;

const showLogoText = (isAdmin) => {
  return isAdmin ? "UTOPIA|ADMIN" : "UTOPIA";
};

const MainLayout = ({ user, children }) => {
  const history = useHistory();
  const isAdmin = user.role === "admin";

  const showIconsPerUserType = () => {
    return isAdmin ? (
      <>
        <Button
          type="text"
          size="middle"
          onClick={() => {
            history.push("/requests");
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
      </>
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

  const onLogout = (e) => {
    console.log("Log out");
  };

  return (
    <Layout className="MainLayout-layout">
      <Header className="MainLayout-header">
        <div className="MainLayout-headerDiv">
          {/*  eslint-disable-next-line */}
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
      <AboutUs />
      <Footer className="MainLayout-footer">
        <div className="MainLayout-footerSpacing">
          3645 Haven Avenue Menlo Park, CA 94025 | contactus@utopia.com |
          650-708-1111
        </div>
        <div>©2020 Utopia Management, LLC</div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
