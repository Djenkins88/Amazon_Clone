import React from 'react'
import './Login.css';
import img1 from '../images/img1.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <Link to= '/' >
        <img className= 'login_logo' src={img1} alt='banner'/>
      </Link>

      <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
          <h5 className='login_email'>E-mail or mobile phone number</h5>
          <input type='text' />

          <h5 className='login_password'>Password</h5>
          <input type='password' />

          <button className='login_singInButton'>Sign In</button>
        </form>

        <p>
          By continuing, you agree to Fake Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button className='login_registerButton'>Create your Amazon Account</button>

      </div>
    </div>
  )
}

export default Login