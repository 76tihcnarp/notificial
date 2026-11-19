import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
    <div className='scene'>
      <Link to="/login">login now.</Link>
    </div>
  )
}

export default Home
