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
const PrivateRoute = ({ children, user, ...rest }) => {
  const location = useLocation();
  if (user !== null) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }
};

const PrivateAdminRoute = ({ children, user, ...rest }) => {
  const location = useLocation();
  if (user !== null && user.role === "admin") {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to={{ pathname: "/", state: { from: location } }} />;
  }
};

function Main() {
  // update the latest routing path using history
  const history = useHistory();
  const [user, setUser] = React.useState(null);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/announcements" />
        </Route>

        {/* upon successful login, redirect user to announcements page */}
        <Route path="/login">
          <Login
            onLogin={(user) => {
              setUser(user);
              history.push("/announcements");
            }}
          />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/announcements" user={user} exact>
          <MainLayout user={user}>
            <Announcement />
          </MainLayout>
        </PrivateRoute>

        <PrivateAdminRoute path="/announcements/new-announcement" user={user} exact>
          <MainLayout user={user}>
            <NewAnnouncement />
          </MainLayout>
        </PrivateAdminRoute>

        <PrivateAdminRoute path="/requests" user={user} exact>
          <MainLayout user={user}>
            <RequestAdmin />
          </MainLayout>
        </PrivateAdminRoute>

        <PrivateRoute path="/profile" user={user} exact>
          <MainLayout user={user}>
            <MyProfile />
          </MainLayout>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default Main;
