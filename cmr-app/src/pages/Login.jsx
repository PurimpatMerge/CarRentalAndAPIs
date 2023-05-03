import React from "react";
import Loginform from "../components/Login/Loginform";

const Login = () => {

  

  return (
    <div className="min-h-screen  bg-gradient-to-tl from-indigo-200 via-slate-600 to-indigo-200 py-10 lg:py-40 ">
      <div className="container mx-auto ">
        <div className="lg:flex w-8/12 backdrop-blur-sm bg-white/30 rounded-xl mx-auto shadow-lg overflow-hidden ">
          <div className="lg:w-1/2 bg-[url('./img/loginbg.jpg')] bg-cover">
            <div className="text-sm lg:flex flex-col text-center mx-20 py-9  md:text-2xl lg:mx-9 lg:my-20 lg:px-9 lg:py-5">
              <div className="border-solid border-2 border-white py-5 rounded-md md">
                <p className="text-white">CHIANGMAI </p>
                <p className="text-white">RENT </p>
                <p className="text-white">A </p>
                <p className="text-white">CAR </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 py-12 px-12">
            <h2 className="text-center pb-5 sm:text-4xl text-black font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
              Log in
            </h2>
            <Loginform />
          </div>
        </div>
      </div>
      <div className="lg:absolute bottom-0 left-0 right-0 text-center">
        <p>Copyright©2023 Chiangmai rent a car</p>
      </div>
    </div>
  );
};

export default Login;
