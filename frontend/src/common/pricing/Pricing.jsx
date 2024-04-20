import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/abimg.jpg"
import "../price/Price"

const Pricing = () => {
  return (
    <>
      {/* <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section> */}
      <section className='contact mb'>
        <Back  title='Please Sign Up And Get Our Help'name='Sign Up' cover={img} />
        <div className='container'>
          <form className='shadow'>
          <h2><b></b></h2>
            <h4>Please enter your login and password</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Password' />
            <input type='text' placeholder='Repeat Your Password' />
            <input type='text' placeholder='Ward Number' />
            <input type='text' placeholder='Panchayat/Municipality' />
            <input type='text' placeholder='Password' />
            {/* <p className="forgot"><b><u>Forgot Password</u></b></p> */}
            {/* <textarea cols='30' rows='10'></textarea> */}
           
            {/* <div className="str"> 
            <input type="checkbox" value="" className='c'/>
              <label className="l"><b>I agree to all statements in<a href="#"><u>Terms of service</u></a></b></label></div>
             <br></br> */}
            <button className="btn5">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Pricing