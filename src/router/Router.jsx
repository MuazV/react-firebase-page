import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import PrivateRouter from "./PrivateRouter";
import { UserAuthContextProvider } from "../context/UserAuthContext";

const Router = () => {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRouter><Home/></PrivateRouter>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
};

export default Router;
