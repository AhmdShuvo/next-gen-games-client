import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Game from '../../../Games/Game';
import Loader from '../../../Shared/Loader/Loader';

const AllGames = () => {
    const [games,setGames]=useState([])

    useEffect(()=>{
        fetch("https://warm-retreat-57868.herokuapp.com/games").then(res=>res.json()).then(data=>setGames(data))

    },[])

    if(games.length===0){
        return <Loader></Loader>
    }
    
    return (
      <Container>
          {
              games.map(game=><Game></Game>)
          }
      </Container>
    );
};

export default AllGames;