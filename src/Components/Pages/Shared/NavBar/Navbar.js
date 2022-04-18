import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-300">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabIndex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='about'>About Us</Link></li>
        <li tabIndex="0">
          <Link to="games" class="justify-between">
          Buy Games
           
          </Link>
        
        </li>
        <li><Link to='login'>Login</Link></li>
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl">NextGenGames</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="about">About Us</Link></li>
      <li tabIndex="0">
        <Link to='games'>
        Buy Games
         
        </Link>
       
      </li>
      <li><Link to='login'>Login</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
  <div class="dropdown dropdown-end">
      <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        
        <li><a>Logout</a></li>
      </ul>
    </div>
      
  </div>
</div>
        </div>
    );
};

export default Navbar;