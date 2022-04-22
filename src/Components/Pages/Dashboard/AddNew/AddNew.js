import { Alert, Button, Container, useFormControl } from '@mui/material';
import React, { useState } from 'react';


const AddNew = () => {
   

    const [CarData,setData]=useState({})
                
     const handleChange=e=>{
         const field= e.target.name
         const value=e.target.value
      const newLogindata={...CarData}
      newLogindata[ field ]=value;
      setData(newLogindata)
     }
 
 
     const handleUpload=e=>{
 
                 const data=CarData
               fetch("https://warm-retreat-57868.herokuapp.com/games",{
         
              method:"POST",headers:{"content-type":'application/json'},
              body:JSON.stringify(data)
         
              })
 
              alert('Games Input Done Successfully')
 
              e.preventDefault()
         
             }
    return (
        <Container>
            <h1 style={{fontSize:"37px",fontWeight:"800px"}}>Add Games To Collection</h1>

            <form className="container" onSubmit={handleUpload} >
            <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
    <input onChange={handleChange} name="name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="picture" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Picture URL</label>
    <input onChange={handleChange} name="picture" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-6">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
    <input onChange={handleChange} name="cost" type="number" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  
 
            <Button className="" type="submit">upload  </Button>
          </form>
        </Container>
    );
};

export default AddNew;