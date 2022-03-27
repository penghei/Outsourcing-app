import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from './App'
import 'antd/dist/antd.css'


ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root'),
  document.getElementsByTagName('body')[0].setAttribute('id','body')
)

