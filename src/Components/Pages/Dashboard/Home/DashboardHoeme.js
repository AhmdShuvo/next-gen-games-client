import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Review from '../../Home/Review/Review'
import Users from './UsersList/Users';


const DashboardHoeme = () => {
  const {admin}=useAuth()

  const [users,setusers]=useState()
  console.log(users);

  useEffect(()=>{
 fetch("https://nextgen-games-server.onrender.com/users").then(res=>res.json()).then(data=>setusers(data))
  },[])
  return (
   <Container>

     {admin?<>
      <center>
                <h1>We have {users.length} Users </h1>
            </center>
     {
       users.map(user=><Users
       key={user._id}
       user={user}
       ></Users>)
     }
     </>:<><Review></Review></>}
   </Container>
  );
};

export default DashboardHoeme;