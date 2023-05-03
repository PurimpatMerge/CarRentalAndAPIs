import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Adminsystem/Sidebar";
import ResponsiveAppBar from "../components/Adminsystem/Responsiveappbar";

import { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { LazyMotion, domAnimation, m } from "framer-motion"

const Adminsytem = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (


<div>
      {
        loading ?
          <div className="min-h-screen  bg-gradient-to-tl from-indigo-200 via-slate-600 to-indigo-200">
            <div className='fixed h-screen z-20 top-1/2  left-1/2 -translate-x-6 -translate-y-6'>
              <HashLoader
                color={"#fd912c"}
                loading={loading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </div>
          :
          <LazyMotion features={domAnimation}>
          <m.div animate={{ opacity: 1 }}  className=" min-h-screen  bg-gradient-to-tl from-indigo-200 via-slate-600 to-indigo-200 ">
      <ResponsiveAppBar />
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </m.div>
    </LazyMotion>
      }
    </div>








    

  );
};

export default Adminsytem;
