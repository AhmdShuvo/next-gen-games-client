import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');


  const handleChange=e=>{
    setEmail(e.target.value)
  }

  const handleAdmin=e=>{

    const user={email}

          
                              
        fetch('https://warm-retreat-57868.herokuapp.com/users',{
          method:'PUT',
          headers:{ "content-type": 'application/json'},
                 body:JSON.stringify(user)
      
        }).then(res=>res.json()).then(data=>console.log(data))

    e.preventDefault()
  }
    return (
        <Container>
          <form onSubmit={handleAdmin}>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter An Email to MAke Admin</label>
    <input onChange={handleChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@Example.com" required/><br /><br />
    <Button  type="submit">Make Admin </Button>
  </div>
  </form>
        </Container>
    );
};

export default MakeAdmin;