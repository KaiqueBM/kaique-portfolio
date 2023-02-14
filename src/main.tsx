import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/global.css"
import "./index.css"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import SinglePost from './components/SinglePost'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<SinglePost />} />
      </Route>
    </Routes>
  </BrowserRouter>
//</React.StrictMode>
,
)
