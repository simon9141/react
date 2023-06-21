import React, { useState } from 'react'

function About() {
    const [count, setCount] = useState(0)
    
    const handleClick =()=> {
        setCount(count + 1)
        //https://chat.whatsapp.com/IfHOpo7KnI09UO4yyqaOQo
        
    }
  return (
    <button onClick={handleClick}>{count}</button>
  )
}

export default About