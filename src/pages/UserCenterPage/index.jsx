import React from "react";
import NavList from "components/Layouts/NavList";
import Userinfopage from "pages/MainPages/UserInfoPage";
import "./index.scss";

const UserCenterPage = () => {
  return (
    <>
      <NavList />
      <div className="user-page">
        <Userinfopage />
      </div>
    </>
  );
};

export default UserCenterPage;
