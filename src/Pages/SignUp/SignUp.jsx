import { Link, useNavigate } from "react-router-dom";
import {useContext, useState} from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const SignUp = () => {

  const navigate = useNavigate();

     const {signUp, googleLogin} = useContext(AuthContext); 
     const [validation, setValidation] = useState('');

     const HandleSubmit = e => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const url = form.url.value;
          console.log({name, email, password, url})

          if(password.length < 6){
            setValidation('Your password lens is less than six')
            return
          }
          if(!/^(?=.*[A-Z])(?=.*[@$#!*&]).{8,}$/.test(password)){
            setValidation('Your password does not contain any special characters or capital letters')
            return ;
          }
          setValidation('');

          signUp(email, password)
          .then(result => {
            console.log(result.user)
            updateProfile(result.user, {
              displayName:name,
              photoURL: url
            })
            .then(res => {
              Swal.fire(
                'Good job!',
                'Your Sign up Success Fully!',
                'success'
              )
              navigate('/');
            })
            .catch(error => {
              console.log(error)
            })
          })
          .catch(error => {
            console.log(error)
          })
     }
     const HandleGoogle = () => {
      googleLogin();
     }


  return (
    <div className="flex  justify-center items-center h-screen gap-20">
      <div className="w-full flex-1 max-w-3xl p-8 space-y-3 rounded-xl bg-slate-800 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign Up <span className="text-orange-600">Feast Bar</span></h1>
        <form onSubmit={HandleSubmit} action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">
              Username
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="flex gap-4">
          <div className="space-y-1 text-sm flex-1">
            <label className="block text-gray-400">
              UserEmail
            </label>
            <input
              type="text"
              name="email"
              id="username"
              required
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm flex-1">
            <label className="block text-gray-400">
              Username
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            <p className="text-red-500">{validation}</p>
          </div>
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-gray-400">
              url
            </label>
            <input
            required
              type="url"
              name="url"
              placeholder="image url"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <button className="btn btn-block" type="submit">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={HandleGoogle} aria-label="Log in with Google" className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?
          <Link to="/login" className=" text-white font-bold ml-2">
               Login
          </Link>
        </p>
      </div>
      <div className="flex-1">
          <h1 className="text-4xl font-semibold border-l-5 border-orange-600 ">Sign Up <span className="text-orange-600">Feast Bar</span></h1>
          <p className="mt-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum magnam aliquid quae laboriosam ipsum eius dolores accusantium optio provident veniam!</p>
      </div>
    </div>
  );
};

export default SignUp;
