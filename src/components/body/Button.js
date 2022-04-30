import React from 'react'

const Button = (props) => {
  return (
    <button onClick={()=>{props.eventTrigger()}} className={props.classVal}>{props.children}</button>
  )
}

export default Button