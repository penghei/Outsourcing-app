import React, { useEffect, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import { getStorage } from "./hooks/useStorage";
import Loading from "./components/Layouts/TheLoading";

const LazyHomePage = React.lazy(() => import("./pages/HomePage"));
const LazyLoginPage = React.lazy(() => import("./pages/LoginPage"));
const LazyUserCenterPage = React.lazy(() => import("./pages/UserCenterPage"));

const App = ({ history }) => {
  useEffect(async () => {
    if (getStorage("jwt")) {
      history.push({
        pathname: "/home",
      });
    }
  }, []);
  return (
    <div className="app-root">
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path="/login" component={LazyLoginPage}></Route>
          <Route path="/home" component={LazyHomePage}></Route>
          <Route path="/user" component={LazyUserCenterPage}></Route>
          <Redirect to="/login"></Redirect>
        </Suspense>
      </Switch>
    </div>
  );
};

export default withRouter(App);
