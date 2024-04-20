/*import React from 'react'
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
}*/

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import img from '../assets/images/home/abimg.jpg';
//import PriceCard from '../home/price/PriceCard';
//import '../home/price/price.css';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const RegisterUser = async (e) => {
    e.preventDefault();
    const { name, email, password,repeatPassword,wardNo,panchayatOrMunicipality} = data;
    try {
      const { data: responseData } = await axios.post('/signup', {
        name, email, password,repeatPassword,wardNo,panchayatOrMunicipality
      });
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({});
        toast.success("Registered Successfully! Welcome to our Website");
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='contact mb'>
        <Back title='Please Sign Up And Get Our Help' name='Sign Up' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={RegisterUser}>
            <h4>Please enter your details to sign up</h4> <br />
            <div>
              <input type='text' placeholder='Name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
              <input type='email' placeholder='Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>
            <input type='password' placeholder='Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            {/* Additional input fields for registration */}
            <input type='text' placeholder='Repeat Your Password' value={data.repeatPassword} onChange={(e) => setData({ ...data, repeatPassword: e.target.value })}/>
            <input type='text' placeholder='Ward Number' value={data.wardNo} onChange={(e) => setData({ ...data, wardNo: e.target.value })} />
            <input type='text' placeholder='Panchayat/Municipality' value={data.panchayatOrMunicipality} onChange={(e) => setData({ ...data, panchayatOrMunicipality: e.target.value })}  />
            {/* End of additional input fields */}
            <button className="btn5" type='submit'>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

