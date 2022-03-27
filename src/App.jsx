import React, { useEffect } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import './App.scss'
import { Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserCenterPage from './pages/UserCenterPage'
import { emptyStorage, getStorage } from './hooks/useStorage';
// import service from './myaxios/interceptors'

const App = ({ history }) => {
  useEffect(async () => {
    if (getStorage('jwt')) {
      // const { data } = await service.get(`/api3/status`)
      // console.log(data)
      // if (!data.success) {
      //   emptyStorage();
      //   return;
      // } else {
      //   history.push({
      //     pathname: '/home'
      //   })
      // }
      history.push({
        pathname: '/home'
      })
    }
  }, [])
  return (
    <div className='app-root'>
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/user" component={UserCenterPage}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  )
}

export default withRouter(App)