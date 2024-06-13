import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BcolorProject from "./component/BcolorProject.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BcolorProject />
    {/* <App /> */}
  </React.StrictMode>,
)
