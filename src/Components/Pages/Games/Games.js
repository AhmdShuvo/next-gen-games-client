import React, { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';
import Game from './Game';

const Games = () => {
    const [games,setGames]=useState([])

    useEffect(()=>{
        fetch("https://warm-retreat-57868.herokuapp.com/games").then(res=>res.json()).then(data=>setGames(data))

    },[])

    if(games.length===0){
        return <Loader></Loader>
    }
    
    return (
       <> <h1 className="text-xl font-bold m-7" >Available Now</h1>
       <hr style={{border:"2px solid grey",marginBottom:'20px'}} />
              <center>
           <section className="container grid md:grid-cols-3 ms-5 gap-1">

             
      {


         games.map(game=><Game 
          key={game._id}
          game={game}
         ></Game>)

      }
    </section>
    </center></>
    );
};

export default Games;