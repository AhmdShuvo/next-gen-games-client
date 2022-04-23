import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
  const { user,Login, setIsLoadng, GoogleLogin, saveGoogleUsertoDb,facebookLogin } = useAuth()
console.log(user);
  const [logInData, setData] = useState({})
  const [error, setError] = useState('')

  const location = useLocation()
  const history = useNavigate()
  const url = location.state?.from.pathname || "/dashboard"

  const handleFacebook=()=>{
    facebookLogin().then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
  
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
     
      saveGoogleUsertoDb(result.user.email, result.user.displayName)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
    
      // ...
    }).finally(()=>history(url))
  }

  const handleGoogle = () => {
    GoogleLogin().then(result => {
      saveGoogleUsertoDb(result.user.email, result.user.displayName)
      history(url)
    });
  }


  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value
    const newLogindata = { ...logInData }
    newLogindata[field] = value;
    setData(newLogindata)
    


  }

  const handleLogin = e => {
    e.preventDefault()

    Login(logInData.email, logInData.password).then((userCredential) => {
      // Signed in 
      setIsLoadng(false);
      const user = userCredential.user;
      history(url)

      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      }).finally(() => {


      });
  }
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              Login
            </label>
            <form onSubmit={handleLogin} action="" className="mt-10">
              <div>
                <input onChange={handleChange} name="email" type="email" placeholder=" Email address" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required/>
              </div>
              <div className="mt-7">
                <input onChange={handleChange} name='password' type="password" placeholder="  Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required />
              </div>
              <div className="mt-7 flex">
                <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                  <input  id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember"  />
                  <span className="ml-2 text-sm text-gray-600" >
                    remember me
                  </span>
                </label>
                <div className="w-full text-right">
                  <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                    Forgotten Your password?
                  </a>
                </div>
              </div>
              <div className="mt-7">
                <button type='submit' className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Login
                </button>
              </div>
             
             

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">New Here?</label>
                  <Link to="/signup" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Create An Account
                  </Link>
                </div>
              </div>
            </form>
            <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Or
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <div className="flex mt-7 justify-center w-full">
                <button onClick={handleFacebook} className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>
                <button onClick={handleGoogle} className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;