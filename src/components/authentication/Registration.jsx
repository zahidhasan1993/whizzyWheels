import React, { useContext } from 'react';
import Lottie from "react-lottie";
import loginLottie from "../../assets/lotties/112454-form-registration.json"
import { Link } from "react-router-dom";
import { TabTitle } from "../changeTitle";
import { DataProvider } from '../providers/AuthProvider';
import Swal from 'sweetalert2'



const Registration = () => {

    TabTitle('Register | WhizzyWheels');

    const {emailSignUp} = useContext(DataProvider)


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name,email,password,photo);
        if(password.length < 6){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 character long'
              })
        }

        emailSignUp(email,password)
        .then(result => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User sign up successful',
                showConfirmButton: false,
                timer: 1500
              })
            // console.log(result.user);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message
              })
            console.log(error.message);

        })

      }


    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left lg:w-1/2">
            <Lottie options={defaultOptions}></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
                <h1 className="text-center font-bold underline text-3xl">Register Here!!!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
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
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your picture link"
                  className="input input-bordered"
                  
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white">Register</button>
                <button className="btn w-full btn-outline text-green-700 hover:bg-green-700 hover:border-none hover:text-white mt-3">Register with google</button>
                
              </div>
              <p className="mt-6">All ready  have an account... <Link to='/login' className="text-blue-700">Login...Here...</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Registration;