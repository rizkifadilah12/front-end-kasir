import React from 'react'
import bg from '../bg-home.jpeg'
const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome To Cashier App <br /> <a href='main'>Continue </a></h1>
      <img src={bg}></img>
    </div>
  )
}

export default Welcome