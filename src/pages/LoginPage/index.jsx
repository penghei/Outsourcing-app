
import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import LoginContainer from 'components/LoginContainer';
import "./index.scss"
// import LoginForm from '../LoginForm';
// import RegistrationForm from '../RegistrationForm';

const LoginPage = (props) => {

    return (
        <div className='bg clearfix'>
            <LoginContainer />
        </div>
    )
}
export default withRouter(LoginPage);
