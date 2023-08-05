import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './homeStyle.css'

const Home = () => {
  return (
    <div className='home'>

  <header>
    <h1> Homepage</h1>
  </header>
  <nav>
  <Link to='/user' mt={0}>
      <Button variant="outlined" color="primary" sx={{color:'white',borderColor:'white','&:hover':{bgcolor:'transparent',borderColor:'white'}}}>
        Show Users
      </Button>
      </Link>
      <Link to='/post'>
      <Button variant="outlined" color="primary" sx={{color:'white',borderColor:'white','&:hover':{bgcolor:'transparent',borderColor:'white'}}}> 
        Show Posts
      </Button>
      </Link>
  </nav>
  <section>
    <h2>Welcome to our website!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </section>
  <footer>
    <p>&copy; 2023 . All rights reserved.</p>
  </footer>


    </div>
  )
}

export default Home



