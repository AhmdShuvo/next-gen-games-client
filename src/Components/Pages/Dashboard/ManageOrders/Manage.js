import { Button } from '@mui/material';
import React from 'react';

const Manage = ({game,removeOrderHandler}) => {
    console.log(game);

    

      if(!game._id){
          return "loading"
      }
    return (
        <section>
        <div class="card card-side bg-base-100 shadow-xl  m-3">
  <figure><img  className='w-1/3 p-3 ' src={game.picture} alt="order img"/></figure>
  <div class="card-body text-white">
  <h2 class="card-title">{game.name}</h2>
  
  <div class="card-actions justify-end">
  <Button onClick={()=>{removeOrderHandler(game._id) }}>Delete</Button>
  
  
  </div>
  </div>
  </div>
    </section>

    );
};

export default Manage;