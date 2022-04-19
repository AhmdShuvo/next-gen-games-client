import React from 'react';

const Carousel = () => {
    return (
        <section className='container mx-auto  my-14'>
            <h1 className="text-3xl mb-14 font-extrabold">UpComing Games</h1>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" className="w-full "  /> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full  h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" className="w-full"/> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" className="w-full"/> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" className="w-full"/> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </section>
    );
};

export default Carousel;