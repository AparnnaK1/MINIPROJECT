import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const LoginUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('/signin', {
        name,
        email,
        password
      });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success("Login Successful! Welcome to our Website");
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section className='contact mb'>
      {/* Include Back component here */}
      <div className='container'>
        <form className='shadow' onSubmit={LoginUser}>
          <h4>Please enter the login details</h4>
          <div>
            <input type='text' placeholder='Name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}/>
            <input type='text' placeholder='Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          </div>
          <input type='password' placeholder='Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <p className="forgot"><b><u>Forgot Password</u></b></p>
          <button className="btn5" type='submit'>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
