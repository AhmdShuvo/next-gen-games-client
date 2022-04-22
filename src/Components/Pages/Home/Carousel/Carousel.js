import React from 'react';

const Carousel = () => {
    return (
        <section className='container mx-auto  my-14'>
            <h1 className="text-3xl mb-14 font-extrabold">UpComing Games</h1>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-96">
    <img src="https://statics.igg.com/sites/igg/www/game/2021/06/01/015329_60b5d9691bddf3648_min.jpg" className="w-full "  /> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full  h-96">
    <img src="https://cdn2.unrealengine.com/Unreal+Engine%2Findustry%2Fgames%2FNews_UEWeb_Games_blog_share_img3-1200x630-1fbacc68fcbff51163d2ecf620015252ad841aee.jpg" className="w-full"/> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img src="https://images.ctfassets.net/5lpapfxq15sk/2QDY7PodmrwPgbwoWCbQPr/21924a921ca035ebcc0d2563b218a2ee/LA-KA-2-580.jpg" className="w-full"/> / 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-96">
    <img src="https://505games.com/wp-content/uploads/2021/02/GOW752x430.jpg" className="w-full"/> / 
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