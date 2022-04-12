import React from "react";
import NavList from "../../components/Layouts/TheNavList";
import Userinfopage from "./UserInfoPage";
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
