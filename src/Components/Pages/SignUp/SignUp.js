import React from 'react';

const SignUp = () => {
    return (
        <div>
        {/* url('/img/hero-pattern.svg') */}
        <div className="flex min-h-screen bg-white">
          <div className="w-1/2 bg-cover md:block hidden" style={{backgroundImage: 'url(./flat-metaverse-background_52683-83528.jpg)',backgroundPosition:" center",borderRadius:"10px"}} />
          {/* <div class="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
            <img src="log_in.webp" alt="hey">
        </div> */}
          <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
              <h3 className="p-1 text-gray-700">Free forever. No payment needed.</h3>
            </div>
            <form action="#" className="p-0">
              <div className="mt-5">
                {/* <label for="email" class="sc-bqyKva ePvcBv">Email</label> */}
                <input type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
              </div>
              <div className="mt-5">
                <input type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name" />
              </div>
              <div className="mt-5">
                <input type="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
              </div>
              <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
                <input type="checkbox" className="inline-block border-0  " />
                <span display="inline" className>By creating an account you are agreeing to our 
                  <a className href="/s/terms" target="_blank" data-test="Link">
                    <span className="underline ">Terms and Conditions</span> </a> and
                  <a className href="/s/privacy" target="_blank" data-test="Link">
                    <span className="underline">Privacy Policy</span> </a>
                </span>
              </div>
              <div className="mt-10">
                <input type="submit" defaultValue="Sign up with email" className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600" />
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
                  <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Facebook
                  </button>
                  <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                  </button>
                </div>
            <a className href="/login" data-test="Link"><span className="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></a>
          </div>
          
        </div>
        {/* support me by buying a coffee */}
      
        
      </div>
    );
};

export default SignUp;