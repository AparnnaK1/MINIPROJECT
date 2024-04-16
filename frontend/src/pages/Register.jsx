import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'



export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const RegisterUser = async(e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const { data} = await axios.post('/signup',{
        name,email,password
      })
      if (data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success("Registered Successfully! Welcome to our Website")
        navigate('/signin')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={RegisterUser}>
      <label>Name</label>
      <input type='text' placeholder='Enter name...' value = {data.name} onChange={(e) => setData({...data,name: e.target.value})}/>

      <label>Email</label>
      <input type='email' placeholder='Enter email...' value = {data.email} onChange={(e) => setData({...data,email: e.target.value})}/>

      <label>Password</label>
      <input type='password' placeholder='Enter password...' value = {data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
      <button type='submit'>Submit</button>
    </form>
  )
}