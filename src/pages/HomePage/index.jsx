import React, { lazy, Suspense } from "react";
import { Route, withRouter } from "react-router-dom";
import NavList from "components/Layouts/NavList";
import Footer from "components/Layouts/Footer";
import FloatingBar from "components/Layouts/FloatingBar";
import Userinfopage from "pages/MainPages/UserInfoPage";
import GoodsPage from "pages/MainPages/GoodsPage";
import ConfirmPage from "pages/MainPages/ConfirmPage";

import "./index.scss";
import { Switch, Redirect } from "react-router-dom";
import Loading from "../../components/Layouts/Loading";

const LazyConfirmPage = lazy(() => import("pages/MainPages/ConfirmPage"));
const LazyGoodsPage = lazy(() => import("../MainPages/GoodsPage"));

const Homepage = ({ history }) => {
  return (
    <div id="main">
      <NavList />
      <div className="router-inner">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/home/confirm" component={LazyConfirmPage}></Route>
            <Route path="/home" component={LazyGoodsPage}></Route>
            <Route path="/home/goods" component={LazyGoodsPage}></Route>

            {/* <Redirect to="/home/goods"></Redirect> */}
          </Switch>
        </Suspense>
      </div>
      <aside className="fixed-bar">
        <FloatingBar />
      </aside>
      <Footer />
    </div>
  );
};

export default withRouter(Homepage);
