import * as React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";
import "./Login.js";

import Announcement from "./Announcement.js";
import AnnouncementDetails from "./AnnouncementDetails.js";
import Profile from "./Profile.js";
import Register from "./Register.js";
import Payment from "./Payment.js";
import Request from "./Request.js";
import NewRequest from "./NewRequest.js";
import Login from "./Login.js";
import AppLayout from "./AppLayout.js";

const PrivateRoute = ({ children, authenticated, ...rest }) => {
  // return (
  //   <Route
  //     {...rest}
  //     // {...{path: '/protected'}}
  //     // path='/protected'
  //     render={({ location }) =>
  //       authenticated ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/login",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );

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
              history.push("/announcement");
            }}
          />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/announcement" authenticated={authenticated} exact>
          <AppLayout>
            <Announcement />
          </AppLayout>
        </PrivateRoute>

        <PrivateRoute
          path="/announcement-details"
          authenticated={authenticated}
          exact
        >
          <AppLayout>
            <AnnouncementDetails />
          </AppLayout>
        </PrivateRoute>

        <PrivateRoute path="/request" authenticated={authenticated} exact>
          <AppLayout>
            <Request />
          </AppLayout>
        </PrivateRoute>

        <PrivateRoute
          path="/request/new-request"
          authenticated={authenticated}
          exact
        >
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
            <Profile />
          </AppLayout>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
