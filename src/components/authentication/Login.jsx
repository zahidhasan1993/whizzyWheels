import React, { useContext } from "react";
import Lottie from "react-lottie";
import loginLottie from "../../assets/lotties/93385-login.json"
import { Link } from "react-router-dom";
import { DataProvider } from "../providers/AuthProvider";




const Login = () => {

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loginLottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <Lottie options={defaultOptions}></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
                <h1 className="text-center font-bold underline text-3xl">Login Here!!!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <Link to='/'><button className="btn w-full btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white">Login</button></Link>
                <button className="btn w-full btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white mt-3">Login with google</button>
                
              </div>
              <p className="mt-6">New to <span className="font-bold">Whizzy<span className="text-amber-700">Wheels?.....</span></span> <Link to='/register' className="text-blue-700">Register First...</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
