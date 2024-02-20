// src/Components/Login.js
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userconetxt } from "../context/Context";

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import API_ENDPOINT from "../config"

const Login = () => {

 const{setuser ,setlogin , islogin}= useContext(userconetxt)
 const [show ,setShow] =useState(false)
 const [error, setError] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const navigate = useNavigate();


 useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });


}, []);

const [email , setemail] = useState('')

const [password , setPassowrd] = useState('')


const Logindata = async (event) => {
  
  event.preventDefault();
  setIsLoading(true);
  try {
    const data = new URLSearchParams({
      email,
      password,
    });
    const response = await fetch(`${API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    });

    if (response.ok) {
      const responseData = await response.json();
     
      localStorage.setItem('token', responseData.token);

      if (responseData.isAdmin) {
     
     
        navigate('/dashbord');
        setlogin(true)
      } else {
        setlogin(true)
        navigate('/');
        setError(`Welcome ${responseData.data['Name']}! Successful login`);
      }
    } else {
      const responseData = await response.json();
      setError(responseData.data);
    }
  } catch (error) {
    setError('Something went wrong during login.');
    console.error('Error during login:', error);
  }
  finally {
    setIsLoading(false);
  }
};


  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <AiOutlineTwitter
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>

<form action="" method="post" onSubmit={Logindata}>
  <p className="text-red-400 capitalize">{error}</p>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e)=> setemail(e.target.value)}
        />
         <span className=" relative">

<input
  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
  type={show ? 'text' : 'password'}
  value={password}
  onChange={(e) => setPassowrd(e.target.value)}
  placeholder="Enter password"
  />
 <span className=" absolute top-0 right-6 text-xl cursor-pointer" onClick={()=> setShow(!show)}>{show ? < FaEyeSlash/> : <IoEyeSharp/>} </span> 
</span>

        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <input
            className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            value={isLoading ? 'Loading...' : 'Login'}
          />
            
        </div>
            </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to={'/signup'}
          >
            Register
          </Link>

        </div>

        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
         if your an studnet of kci ?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to={'/stuentlogin'}
          >
            Login with student
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Login;