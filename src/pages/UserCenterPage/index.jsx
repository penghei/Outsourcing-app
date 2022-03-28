import React from "react";
import NavList from "components/Layouts/NavList";
import Userinfopage from "pages/MainPages/UserInfoPage";
import "./index.scss";
import FloatingBar from "../../components/Layouts/FloatingBar";

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
