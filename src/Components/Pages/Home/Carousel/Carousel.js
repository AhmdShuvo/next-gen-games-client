import React from 'react';

const Carousel = () => {
    return (
        <section className='container mx-auto  my-14'>
            <h1 className="text-3xl mb-14 font-extrabold">UpComing Games</h1>
           <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" class="w-full "  /> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full  h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full h-96">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" class="w-full"/> / 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </section>
    );
};

export default Carousel;