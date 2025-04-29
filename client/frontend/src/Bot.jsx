import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function Bot() {
  const [messages,setMessages]=useState([])
  function messagefetch(){
    
  }


  return (
    <>
    <div> hello i am  bot</div>
    <button onClick={messagefetch}>messages</button>
    </>
    
  )
}

export default Bot