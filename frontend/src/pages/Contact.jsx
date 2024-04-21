import React from "react"
import img from "../assets/images/home/abimg.jpg"
import Back from "../common/Back"
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' style={{marginTop: '10px'}}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='5'></textarea>
            <button className="bn8" style={{marginBottom: '-1px'},{marginLeft:'400px'}}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact