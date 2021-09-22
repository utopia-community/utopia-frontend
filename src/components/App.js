import * as React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";

import Announcement from "./Announcement.js";
import MyProfile from "./MyProfile.js";
import Register from "./Register.js";
import Payment from "./Payment.js";
import Request from "./Request.js";
import NewRequest from "./NewRequest.js";
import Login from "./Login.js";
import AppLayout from "./AppLayout.js";
import HomepageLayout from "./HomepageLayout.js";
import NewAnnouncement from "./NewAnnouncement.js";

const PrivateRoute = ({ children, authenticated, ...rest }) => {
  const location = useLocation();
  if (authenticated) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />;
  }
};

function App() {
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
          <HomepageLayout>
            <Announcement />
          </HomepageLayout>
        </PrivateRoute>

        <PrivateRoute
          path="/announcements/new-announcement"
          authenticated={authenticated}
          exact
        >
          <HomepageLayout>
            <NewAnnouncement />
          </HomepageLayout>
        </PrivateRoute>

        <PrivateRoute path="/request" authenticated={authenticated} exact>
          <AppLayout>
            <Request />
          </AppLayout>
        </PrivateRoute>

        <PrivateRoute path="/new_request" authenticated={authenticated} exact>
          <AppLayout>
            <NewRequest />
          </AppLayout>
        </PrivateRoute>

        <PrivateRoute path="/payment" authenticated={authenticated} exact>
          <AppLayout>
            <Payment />
          </AppLayout>
        </PrivateRoute>

        <PrivateRoute path="/profile" authenticated={authenticated} exact>
          <AppLayout>
            <MyProfile />
          </AppLayout>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
