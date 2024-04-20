import React from 'react'

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span><h1>{name}</h1></span>
          <h4>{title}</h4>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back