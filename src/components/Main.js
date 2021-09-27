import * as React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./Main.css";

import Announcement from "./Announcements.js";
import Login from "./Login.js";
import MainLayout from "./MainLayout.js";
import MyProfile from "./MyProfile.js";
import NewAnnouncement from "./NewAnnouncement.js";
import Register from "./Register.js";
import RequestAdmin from "./RequestAdmin.js";

// React private route:
// Redirects user to login page when a user is not logged in and tries to access other url that requires login
const PrivateRoute = ({ children, authenticated, ...rest }) => {
  const location = useLocation();
  if (authenticated) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }
};

function Main() {
  // update the latest routing path using history
  const history = useHistory();

  const [authenticated, setAuthenticated] = React.useState(false);
  console.log("App: ", authenticated);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        {/* upon successful login, redirect user to announcements page */}
        <Route path="/login">
          <Login
            onLogin={() => {
              setAuthenticated(true);
              history.push("/announcements");
            }}
          />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/announcements" authenticated={authenticated} exact>
          <MainLayout>
            <Announcement />
          </MainLayout>
        </PrivateRoute>

        <PrivateRoute
          path="/announcements/new-announcement"
          authenticated={authenticated}
          exact
        >
          <MainLayout>
            <NewAnnouncement />
          </MainLayout>
        </PrivateRoute>

        <PrivateRoute
          path="/admin/requests"
          authenticated={authenticated}
          exact
        >
          <MainLayout>
            <RequestAdmin />
          </MainLayout>
        </PrivateRoute>

        <PrivateRoute path="/profile" authenticated={authenticated} exact>
          <MainLayout>
            <MyProfile />
          </MainLayout>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default Main;