import React from 'react'
import { Route,Redirect,withRouter } from 'react-router-dom'
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';


const App = () => {
  return (
    <div>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/home" component={HomePage}></Route>
      <Redirect to="/home" />
    </div>
  )
}

export default withRouter(App)