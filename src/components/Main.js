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
import MyProfile from "./MyProfile.js";
import Register from "./Register.js";
import Request from "./Request.js";
import RequestAdmin from "./RequestAdmin.js";
import NewRequest from "./NewRequest.js";
import Login from "./Login.js";
import MainLayout from "./MainLayout.js";
import NewAnnouncement from "./NewAnnouncement.js";

// React private route:
// When a user has not logged in and tries to access other url that requires login,
// private router redirects user to login page
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

        <PrivateRoute path="/request" authenticated={authenticated} exact>
          <MainLayout>
            <Request />
          </MainLayout>
        </PrivateRoute>

        <PrivateRoute path="/new_request" authenticated={authenticated} exact>
          <MainLayout>
            <NewRequest />
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
