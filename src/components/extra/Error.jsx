import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import Lottie from "react-lottie";
import errorLottie from "../../assets/lotties/98642-error-404.json";
import { FaArrowLeft} from "react-icons/fa";


const Error = () => {
  const error = useRouteError();
  console.error(error);

  //lottie function
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='text-center my-11'>
      <Link to='/'><button className='btn btn-outline text-amber-700 hover:bg-amber-700 hover:text-white hover:border-none flex items-center gap-2'><FaArrowLeft></FaArrowLeft>Back To Home</button></Link>
      
      <div>
        <Lottie options={defaultOptions}></Lottie>
      </div>
      <p className='text-red-700 mb-10 text-5xl font-bold'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;