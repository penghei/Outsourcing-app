import React, { useEffect } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import './App.scss'


const App = (props) => {
  // useEffect(() => {
  //   props.history.push({
  //     pathname: '/login'
  //   })
  // }, [])
  return (
    <div className='app-root'>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/home" component={HomePage}></Route>
    </div>
  )
}

export default withRouter(App)