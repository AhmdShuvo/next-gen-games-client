import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
const Navbar = () => {
  const { user, LogOUt } = useAuth()

 

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='about'>About Us</Link></li>
              <li tabIndex="0">
                <Link to="games" className="justify-between">
                  Buy Games

                </Link>

              </li>
              {user.email ? <li onClick={LogOUt}><Link to='/'>LogOut</Link></li> : <li><Link to='login'>Login</Link></li>}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">NextGenGames</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="about">About Us</Link></li>
            <li tabIndex="0">
              <Link to='games'>
                Buy Games

              </Link>

            </li>
            {user.email ? <li><Link onClick={LogOUt} to='login'>LogOut</Link></li> : <li><Link to='login'>Login</Link></li>}
            {user.displayName && <li disabled><a >{user.displayName} </a></li>}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user.email && <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-white">
                {!user.photoURL?   <img src="./user-svgrepo-com.svg"alt="Avatar"  />:  <img src={user.photoURL} alt="Avatar"  />}
                </div>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="dashboard" className="justify-between">
                   dashboard
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li onClick={LogOUt}><Link to='/'>Logout</Link></li>
              </ul>
            </div>
        
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;