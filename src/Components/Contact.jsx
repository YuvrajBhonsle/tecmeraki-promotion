import React from 'react'
import './contact.css'
function Contact() {
  const handleClick=()=>{
    document.getElementById("sucess").innerHTML='We have got your email!!! ';
    console.log('cliked')
  }
  return (
    <div className='contact-section' id='contact'>
      <h1>Stay In Touch</h1>
      <p>Enter your email address to register to our newsletter subscription!</p>
      <input type="text" placeholder='Enter your email adress' />
      <button onClick={handleClick} >Subscribe</button>
      <span id='sucess'></span>
    </div>
  )
}
export default Contact
