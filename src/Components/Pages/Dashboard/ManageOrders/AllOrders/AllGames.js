import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Game from '../../../Games/Game';
import Loader from '../../../Shared/Loader/Loader';
import Manage from '../Manage';

const AllGames = () => {
    const [games,setGames]=useState([])

    useEffect(()=>{
        fetch("https://warm-retreat-57868.herokuapp.com/games").then(res=>res.json()).then(data=>setGames(data))

    },[])

    const removeOrderHandler = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed === true) {
          const url = `https://warm-retreat-57868.herokuapp.com/games/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then((data) => {

                 if (data.deletedCount) {
                  
                 
                  const remaining = games.filter((order) => order._id !== id);
                  setGames(remaining);
                }
            console.log(data);
            });
        }
      };

    if(games.length===0){
        return <Loader></Loader>
    }
    
    return (
      <Container>
          {
              games.map(game=><Manage
              game={game}
              key={game._id}
              removeOrderHandler={removeOrderHandler}
              ></Manage>)
          }
      </Container>
    );
};

export default AllGames;