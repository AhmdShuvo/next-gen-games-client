import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
       <section className="">
            <div class="hero min-h-screen" style={{backgroundImage:" url(./background.png)"}}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <Link to="login"> <button class="btn btn-primary">Get Started </button></Link>
          </div>
        </div>
      </div>
       </section>
    );
};

export default Banner;