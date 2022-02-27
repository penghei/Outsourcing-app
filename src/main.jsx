import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from './App'
import 'antd/dist/antd.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
