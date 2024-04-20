/*import React from "react"
import { Footer } from "../data/data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              {<p>We'll help you to grow your career and growth.</p> }
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='images/location/main logo.png' alt='' />
              
              <h2>Do You Need Help With Anything?</h2>
              
                <input type='text' placeholder='Email Address' />
                <button className="btn5">Subscribe</button>
              </div>
            </div>
          </div>*/

          {/* {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))} */}

          /*
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 WeLOAN. Designd By DAAS.</span>
      </div>
    </>
  )
}

export default Footer
*/

import React from "react";
//import { footer } from "../data/data"; 
import { nav, featured, list, awards, location, team, price, footer } from '/src/common/data/data.jsx';
// Rename the import to avoid conflict
import "./footer.css";

const FooterComponent = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              {/* <p>We'll help you to grow your career and growth.</p> */}
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='images/location/main logo.png' alt='' />
              
              <h2>Do You Need Help With Anything?</h2>
              {/* <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p> */}
               <br></br> 
              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button className="btn5">Subscribe</button>
              </div>
            </div>
          </div>

          {/* {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 WeLOAN. Designd By DAAS.</span>
      </div>
    </>
  );
};

export default FooterComponent;
