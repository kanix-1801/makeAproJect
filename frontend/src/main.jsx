import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BcolorProject from "./component/BcolorProject.jsx"
import PasswordGenerator from "./component/PasswordGenerator.jsx"
import CurrencyProject from "./component/CurrencyProject.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PasswordGenerator /> */}
    {/* <App /> */}
    <CurrencyProject />
  </React.StrictMode>,
)
