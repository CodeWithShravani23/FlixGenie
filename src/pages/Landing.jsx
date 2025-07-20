import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../utils/loginSlice';
import store from "../utils/appStore";
import Herosection from '../components/Herosection';
import Features from '../components/Features';

export const Landing = () => {
  const showlogin = useSelector(store => store.login.toggle);

  return (
    <div>
      <Header />

      {showlogin ? (
        <Login />
      ) : (
        <>
          <Herosection />
          <Features/>
          <Faq />
          <Footer />
        </>
      )}
    </div>
  );
};