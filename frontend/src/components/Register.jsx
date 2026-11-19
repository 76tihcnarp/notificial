import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg'>
      <div className='form'>
        <br />
        <center><h1>Register To Notificial</h1></center><br /><br />
      <form className='formcontent'>
        <table align='center'>
        
        <tr>
          <td><label>name:</label></td>
          <td><input type='text'></input></td>
        </tr>
        <tr>
          <td><label>user-id:</label></td>
          <td><input type='text'></input></td>
        </tr>
       
        <tr>
          <td><label>role:</label></td>
          <td>
            <select>
                <option>--select role--</option>
                <option>professor</option>
                <option>programme leader</option>
                <option>authoritive role</option>
            </select>
          </td>
        </tr>
     
        <tr>
          <td><label>password:</label></td>
          <td><input type="password"></input></td>
        </tr>
         <tr>
          <td><label>confirm password:</label></td>
          <td><input type="password"></input></td>
        </tr>
        <tr>
          <td><input type="reset"></input></td>
          <td><input type="submit"></input></td>
        </tr>
        </table>
      </form>
      </div>
     
    </div>
  )
}

export default Login
