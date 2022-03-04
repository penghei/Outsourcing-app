import React from 'react';
import UserInfoSider from 'components/UserInfoSider';
import { Route, withRouter,Redirect } from 'react-router-dom';
import OrderFormPage from 'pages/UserCenterPages/OrderFormPage';
import InfoFormPage from 'pages/UserCenterPages/InfoFormPage';
import QuestionPage from 'pages/UserCenterPages/QuestionPage';
import AboutUsPage from 'pages/UserCenterPages/AboutUsPage';


const Userinfopage = () => {
    return (
        // <div className='clearfix userinfo_box'>
        //     <Portrait/>
        //     <UserInfoSider/>
        //     <Route path="/home/user/myorder" component={OrderFormPage}></Route>
        // </div>
        <div className='clearfix userinfo_box'>
           <UserInfoSider/>
            <Route path="/home/user/myorder" component={OrderFormPage}></Route>
            <Route path="/home/user/userinfo" component={InfoFormPage}></Route>
            <Route path="/home/user/questions" component={QuestionPage}></Route>
            <Route path="/home/user/aboutus" component={AboutUsPage}></Route>
            <Redirect to="/home/user/myorder" />
        </div>
    );
}

export default withRouter(Userinfopage);
