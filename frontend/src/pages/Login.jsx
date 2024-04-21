import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Back from '../common/Back';
import './login.css';
import img from '../assets/images/home/abimg.jpg';
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
      <Back  title='Please Login And Get Our Help'name='Sign In' cover={img} />
      <div className='container'>
        <form className='shadow' onSubmit={LoginUser} style={{marginTop: '30px'}}>
          <h4>Please enter the login details</h4>
          <div>
            <input type='text' placeholder='Name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}/>
            <input type='text' placeholder='Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          </div>
          <input type='password' placeholder='Password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <p className="forgot"><b><u>Forgot Password</u></b></p>
          <button className="bn6" type='submit'style={{marginBottom: '-1px'},{marginLeft:'400px'}}>Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
