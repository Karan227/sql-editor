import React from 'react'


//Execute Button Component
const Button = (props) => {
  return (
    <button onClick={()=>{props.eventTrigger()}} className={props.classVal}>{props.children}</button>
  )
}

export default Button