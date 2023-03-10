import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
       <section className="">
            <div className="hero min-h-screen" style={{backgroundImage:" url(./background.png)"}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Next Gen Games</h1>
            <p className="mb-5">Your very own gaming Partner.  
            we provide games in cheaper rates. constant customer support us our main motive. </p>
           <Link to="login"> <button className="btn btn-primary">Get Started </button></Link>
          </div>
        </div>
      </div>
       </section>
    );
};

export default Banner;