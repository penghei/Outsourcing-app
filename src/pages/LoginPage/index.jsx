<<<<<<< HEAD
import React from 'react';
import { withRouter,Route } from 'react-router-dom';
import LoginContainer from 'components/LoginContainer';
import "./index.scss"
// import LoginForm from '../LoginForm';
// import RegistrationForm from '../RegistrationForm';

const LoginPage = (props) => {

    return (
        <div className='bg clearfix'>
            <LoginContainer/>   
        </div>
                   
=======
import { Button } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { setStorage } from '@/hooks/useStorage.js'
import axios from 'axios';

const LoginPage = (props) => {
    const reqLogin = async () => {
        let res = await axios.post('/api/login', {
            username: 'aaa',
            password: 'bbb'
        })
        console.log(res)
        setStorage('jwt', res.data.data.jwt)
    }
    return (
        <div>
            <Button onClick={reqLogin}>Login</Button>

        </div>
>>>>>>> master
    );
}

export default withRouter(LoginPage);
