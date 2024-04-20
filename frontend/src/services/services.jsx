import React from "react"
import img from "../assets/images/home/abimg.jpg"
import Back from "../common/Back"
//import Featured from "../Components/featured/Featured"
import FeaturedCard from "../Components/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Loan Details' title='Take Loan easily With' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services