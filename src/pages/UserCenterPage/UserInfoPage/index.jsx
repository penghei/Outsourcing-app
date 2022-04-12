import React from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import UserOrders from "../../../components/UserCenter/UserCenterContent/UserOrders";
import UserInfo from "../../../components/UserCenter/UserCenterContent/UserInfo/UserInfoDisplay";
import Questions from "../../../components/UserCenter/UserCenterContent/Questions";
import AboutUs from "../../../components/UserCenter/UserCenterContent/AboutUs";
import UserCenterSider from "../../../components/UserCenter/UserCenterSider";

import "./index.scss";

const Userinfopage = () => {
  return (
    <div className="clearfix userinfo_box">
      <UserCenterSider />
      <main className="user-info-block">
        <Switch>
          <Route path="/user/myorder" component={UserOrders}></Route>
          <Route path="/user/userinfo" component={UserInfo}></Route>
          <Route path="/user/questions" component={Questions}></Route>
          <Route path="/user/aboutus" component={AboutUs}></Route>
          <Redirect to="/user/myorder" />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(Userinfopage);
