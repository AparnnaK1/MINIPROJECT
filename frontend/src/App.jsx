import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Home from '../src/pages/Home';
import SignUp from './pages/Register';
import SignIn from './pages/Login';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/SignUp' element={<SignUp/>} />
    </Routes>
    <ToastContainer theme='dark' />
  
      <h1>Hello Anjal</h1>
    </>
  )
}

export default App
