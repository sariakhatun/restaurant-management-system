import React, { use, useState } from "react";
import { AuthContext } from "./AuthContext";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { provider } from "./AuthProvider";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";

const Login = () => {
    let {loginUser,loginWithGoogle}=use(AuthContext)
    let location = useLocation();
    let navigate=useNavigate();
    let [error,setError]=useState("")
    let [showPassword,setShowPassword]=useState(false)
    
   // console.log(location)
    let handleLogin=e=>{
        e.preventDefault();
        let password = e.target.password.value;
        let email = e.target.email.value;
        loginUser(email,password)
        .then(res=>{
           // alert('signed in successfully')
           console.log(res.user)
           toast.success('Logged in successfully')
           setTimeout(()=>{
             navigate(`${location.state ? location.state :'/'}`)
           },1500)
          

        })
        .catch(error=>{
            //alert(error.message)
            let errorCode=error.code;
                    toast.error(`Error: ${error.message}`);
            setError(errorCode)
        })
    }
   
    let handleGoogleLogin=()=>{
        loginWithGoogle(provider)
        .then(res=>{
           // console.log(res);
            toast.success('User Created successfully')
             setTimeout(()=>{
             navigate(`${location.state ? location.state :'/'}`)
           },1500)
        })
        .catch(error=>{
            console.log(error)
            toast.error(`Failed to sign in',${error.code}`)
        })
    }

     
    return (
        <div className='my-12 flex justify-center mx-auto w-11/12 md:w-2/3 lg:w-1/3'>
         
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-5 text-center">Login Your Account!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email"  required/>
          <label className="label">Password</label>
          <div className='relative'>
            <input type={showPassword ? 'text':'password'} name='password' className="input" placeholder="Password" required/>
          <button type='button' onClick={()=>{setShowPassword(!showPassword)}} className='btn btn-xs absolute top-2 right-5'>{
                      showPassword?<FaRegEye size={16}></FaRegEye> :<FaEyeSlash size={16}></FaEyeSlash>}
          
                    </button>
          </div>
          <div><a className=" ">Forgot password?</a></div>
          {
            error && <p className='text-red-500 text-xs'>{error}</p>
          }
          <button className="btn btn-outline hover:bg-[#ff6347] hover:text-white text-[#ff6347]  mt-4">Login</button>
            <button onClick={handleGoogleLogin} className="btn btn-outline hover:bg-[#ff6347] hover:text-white text-[#ff6347]  mt-4"><FaGoogle size={16}></FaGoogle> Continue With Google</button>
          
          <p className='font-bold py-3 text-center'>Don't Have An Account ? <Link className='text-[#ff6347] underline' to='/register'>Register</Link> </p>
        </form>
      </div>
    </div>
   
    
  </div>

    );
};

export default Login;
