import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
function Login () {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/', { email, password })
      .then(result => {
        console.log(result)
        if (result.data.status === 'success') {
          localStorage.setItem('name', result.data.name)
          navigate('/home')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-secondary p-3 rounded w-25'>
        <h2>
          <center>Login</center>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control rounded-0'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link
          to='/signup'
          className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login
