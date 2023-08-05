import React, { useEffect,useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const User = () => {
  
  let [rows,setRows]=useState([])


  let aaa=async()=>{
      let data=await fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users')
      data =await data.json()
      // console.log(data)
      if(data.length!=rows.length)
    {setRows(data)
    }
  }
  
  
   useEffect(()=>{
  aaa();
   })
  return (
    <div>
     
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow sx={{position:'sticky',width:'100vw',top:0,left:0,bgcolor:'white'}}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">View&nbsp;(g)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:nth-child(even)': { textDecoration:'stroke',color:'white' } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right" ><Link to={'/user/'+row.id}><Button variant='outlined'>See More</Button></Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  )
}

export default User
