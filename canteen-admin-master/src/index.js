import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Login from './components/login/Login';
import GlobalStyle from './globlestyle';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/home';
import StaffManagement from './components/staffManagement/staffM';
import History from './components/History/history';
import Product from './components/Product/product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <GlobalStyle/>
  <BrowserRouter>
    <Routes>
    
    <Route path="/login" element={<Login />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/staff" element={<StaffManagement />}/>
    <Route path="/history" element={<History/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/catagory" element={<History/>}/>
    
    </Routes>
  </BrowserRouter>
  
    {/* <Login/>
    <App /> */}
  </React.StrictMode>
);

