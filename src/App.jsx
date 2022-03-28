import React, { useEffect, Suspense } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import "./App.scss";
import { Switch } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import HomePage from "./pages/HomePage";
// import UserCenterPage from "./pages/UserCenterPage";
import { emptyStorage, getStorage } from "./hooks/useStorage";
import Loading from "./components/Layouts/Loading";
// import service from './myaxios/interceptors'

const LazyHomePage = React.lazy(() => import("./pages/HomePage"));
const LazyLoginPage = React.lazy(() => import("./pages/LoginPage"));
const LazyUserCenterPage = React.lazy(() => import("./pages/UserCenterPage"));

const App = ({ history }) => {
  useEffect(async () => {
    if (getStorage("jwt")) {
      // const { data } = await service.get(`/api3/status`)
      // console.log(data)
      // if (!data.success) {
      //   emptyStorage();
      //   return;
      // } else {
      //   history.push({
      //     pathname: '/home'
      //   })
      // }
      history.push({
        pathname: "/home",
      });
    }
  }, []);
  return (
    <div className="app-root">
      <Switch>
        <Suspense
          fallback={<Loading/>}
        >
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
