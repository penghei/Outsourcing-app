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
    );
}

export default withRouter(LoginPage);
