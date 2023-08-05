import { Avatar, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Showpost = () => {
  const params=useParams()
  const{id}=params
  let [rows,setRows]=useState('aa')
  let [token,setToken]=useState(1)


  let aaa=async()=>{
      let data=await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts/${id}`)
      data =await data.json()
      // console.log(data)
      if(token)
    {setRows(data)
      console.log(rows)
      setToken(0)
    }
  }
  
  
   useEffect(()=>{
  aaa();
   })
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'black',color:'white',minHeight:'100vh'}}>
 
      <Avatar alt='hero.jpg' src={rows.cover} sx={{width:'300px',height:'300px',border:'2px solid white'}}/>
      <Typography variant='h5'm={0}>Title: {rows.title}</Typography>
      <Typography variant='h6'm={3}>createdAt: {rows.createdAt}</Typography>
      <Typography variant='h6'm={0}>Description</Typography>
      <Typography variant='body1'm={0}> {rows.description}</Typography>
    </Box>
  )
}

export default (Showpost)
