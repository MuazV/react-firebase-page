import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import PrivateRouter from "./PrivateRouter";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import { Toaster } from 'react-hot-toast';

const Router = () => {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Navbar />
        <Toaster/>
        <Routes>
          <Route path="/" element={<PrivateRouter><Home/></PrivateRouter>} />
          <Route path="/Home" element={<PrivateRouter><Home/></PrivateRouter>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
};

export default Router;
