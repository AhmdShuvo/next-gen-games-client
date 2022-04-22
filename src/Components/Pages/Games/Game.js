import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Game = ({game}) => {
  console.log(game);
  const {setIsLoadng}=useAuth()
   if(!game){
     return "loading"
   }
    // const {name,picture,price,_id}=game
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  {/* <figure class="px-10 pt-10">
    <img src={picture} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <h2 class="card-title"> price - BDT {price}</h2>
   
    <div class="card-actions">
     <Link to={_id}>  <button onClick={()=>setIsLoadng(false)} class="btn btn-primary">Buy Now</button></Link>
    </div>
  </div> */}
</div>
    );
};

export default Game;