import React, { use, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { provider } from "./AuthProvider";
const Register = () => {
  let { createUser, setUser,updateUser, loginWithGoogle } = use(AuthContext);

  let [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  let handleRegister = e =>{
       
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let photo = e.target.photo.value;
        let password = e.target.password.value;
        let terms = e.target.terms.checked;
        
         if(!terms){
               return toast.error('please accept our terms and condition')
            }
        let validationMessage = '';

        if (password.length < 6) {
                 validationMessage = 'Password must be at least 6 characters long.';
        } else if (!/[a-z]/.test(password)) {
         validationMessage = 'Password must contain at least one lowercase letter.';
        } else if (!/[A-Z]/.test(password)) {
         validationMessage = 'Password must contain at least one uppercase letter.';
        }

        if (validationMessage) {
         return toast.error(validationMessage)
            }


           
        //create user
        createUser(email,password)
        .then(res=>{
            let user=res.user
           // console.log(user);
           updateUser({
            displayName:name,
            photoURL:photo
        }).then(()=>{
            toast.success('Registered Successfully')
           // setSuccess(true)
            setUser({...user, displayName:name,
            photoURL:photo});
           setTimeout(()=>{
             navigate(`${location.state ? location.state :'/'}`)
           },1500)
           

        }).catch(error=>{
             toast.error(`Error: ${error.message}`);
             setUser(user);
        })
            
            
        }).catch(error=>{
            //console.log(error);
            //alert(error.message)
                    toast.error(`Error: ${error.message}`);
            //setErrorMessage(error.message)
        })
    }
    let handleGoogleLogin=()=>{
        loginWithGoogle(provider)
        .then(res=>{
            //console.log(res);
            toast.success('User Created successfully')
            setTimeout(()=>{
                navigate('/')
            },1500)
        })
        .catch(error=>{
            //console.log(error)
            toast.error(`Failed to sign up',${error.code}`)
        })
    }
  return (
    <div className="my-12 flex justify-center w-11/12 md:w-2/3 lg:w-1/3 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-5 text-center">
            Register Your Account!
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />
            {/* Photo */}
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Your photoURL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <button
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="btn btn-xs absolute top-2 right-5"
              >
                {showPassword ? (
                  <FaRegEye size={16}></FaRegEye>
                ) : (
                  <FaEyeSlash size={16}></FaEyeSlash>
                )}
              </button>
            </div>
            <label className="label">
              <input type="checkbox" className="checkbox" name="terms" />
              Accept terms and conditions
            </label>
            {/* {
            errorMessage && <p className='text-red-500'>{errorMessage}</p>
        }
        {
            success && <p className='text-green-500'>User Created successfully</p>
        }
           */}
            <button
              type="submit"
              className="btn  btn-outline hover:bg-[#ff6347] hover:text-white text-[#ff6347]  mt-4"
            >
              Register
            </button>
            <button
              onClick={handleGoogleLogin}
              className=" btn btn-outline hover:bg-[#ff6347] hover:text-white text-[#ff6347]  mt-4"
            >
              <FaGoogle size={16}></FaGoogle> Login With Google
            </button>

            <p className="font-bold py-3 text-center">
              Already Have An Account ?{" "}
              <Link className="text-[#ff6347] underline" to="/login">
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
     
    </div>
  );
};
export default Register;
