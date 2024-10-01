import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from '../Components/UserCard.js';
import { Grid, Grid2 } from '@mui/material';

const Users = () => {
    const [userList,setUserList]=useState([]);

    const getAPIData=async()=>{
                              
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts');

        setUserList(response.data)
    }




    useEffect(()=>{
   getAPIData()
    },[])
  return (
  
  <Grid className=' px-4' container spacing={2}>
    {
           userList.map((item,ind)=>{
            return   <UserCard key={ind} item={item}  />
           })
         }
  </Grid>
         
    
  )
}

export default Users
