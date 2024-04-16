import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


    export default function Login() {
      const navigate= useNavigate();
      const [data, setData] = useState({
        email: '',
        password: ''
      })

      const LoginUser = async(e) => {
        e.preventDefault()
          const {email,password} = data
    try {
      const { data} = await axios.post('/signin', {
        email: data.email,
        password: data.password
      })
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful! Welcome to our Website");
        navigate('/home'); // Navigating to the home page after successful login
      }
    } catch (error) {
      console.log(error);
    }
  }
      return (
        <form onSubmit={LoginUser}>
        <label>Email</label>
        <input type='email' placeholder='Enter email...' value = {data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
  
        <label>Password</label>
        <input type='password' placeholder='Enter password...' value = {data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    )
}
