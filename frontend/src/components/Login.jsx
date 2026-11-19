import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg'>
      <div className='form'>
        <br />
        <center><h1>Login To Notificial</h1></center><br /><br />
      <form className='formcontent'>
        <table align='center'>
        <tbody>
        <tr>
          <td><label>user-id:</label></td>
          <td><input type='text'></input></td>
        </tr>
      
        <tr>
          <td><label>password:</label></td>
          <td><input type="password"></input></td>
        </tr>
        <tr>
          <td><input type="reset"></input></td>
          <td><input type="submit"></input></td>
        </tr>
        </tbody>
        </table>
      </form>
      <span>not registered yet? <Link to="/register">Register now.</Link></span>
     
      </div>
    </div>
  )
}

export default Login
