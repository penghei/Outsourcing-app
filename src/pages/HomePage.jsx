import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavList from 'components/NavList';
import Shoppingpage from 'pages/MainPages/ShoppingPage.jsx';
import Userinfopage from 'pages/MainPages/UserInfoPage.jsx';

const Homepage = (props) => {
    return (
        <>
            <NavList />
            <Route path="/home/shopping" component={Shoppingpage}></Route>
            <Route path="/home/user" component={Userinfopage}></Route>
        </>
    );
}

export default withRouter(Homepage);
