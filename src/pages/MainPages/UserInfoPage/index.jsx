import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import OrderForm from "components/UserCenter/Orders/OrderForm";
import InfoForm from "components/UserCenter/Info/InfoForm";
import Questions from "components/UserCenter/Questions";
import AboutUs from "components/UserCenter/AboutUs";

import { Switch } from "react-router-dom";
import UserInfoSider from "@/components/UserCenter/UserInfoSider";
import "./index.scss";

const Userinfopage = () => {
  return (
    <div className="clearfix userinfo_box">
      <UserInfoSider />
      <main className="user-info-block">
        <Switch>
          <Route path="/user/myorder" component={OrderForm}></Route>
          <Route path="/user/userinfo" component={InfoForm}></Route>
          <Route path="/user/questions" component={Questions}></Route>
          <Route path="/user/aboutus" component={AboutUs}></Route>
          <Redirect to="/user/myorder" />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(Userinfopage);
