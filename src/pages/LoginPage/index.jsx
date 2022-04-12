import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import LoginContainer from '../../components/Login/LoginContainer/index';
import "./index.scss"


const LoginPage = (props) => {

    return (
        <div className='bg clearfix'>
            <LoginContainer />
        </div>
    )
}
export default withRouter(LoginPage);
