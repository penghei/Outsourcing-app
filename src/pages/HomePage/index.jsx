import React, { lazy, Suspense } from "react";
import { Route, withRouter,Switch, Redirect } from "react-router-dom";
import NavList from "../../components/Layouts/TheNavList";
import Footer from "../../components/Layouts/TheFooter";
import FloatingBar from "../../components/Layouts/TheFloatingBar";
import Loading from "../../components/Layouts/TheLoading";
import "./index.scss";

const LazyConfirmPage = lazy(() => import("../MainPages/ConfirmPage"));
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
