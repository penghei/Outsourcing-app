import React, { useEffect } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import './App.scss'
import { Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdvertisePage from './pages/AdvertisePage';

const App = (props) => {
  // useEffect(() => {
  //   props.history.push({
  //     pathname: '/login'
  //   })
  // }, [])
  return (
    <div className='app-root'>
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/advertising" component={AdvertisePage}></Route>
        <Redirect to="/advertising"></Redirect>
      </Switch>
    </div>
  )
}

export default withRouter(App)