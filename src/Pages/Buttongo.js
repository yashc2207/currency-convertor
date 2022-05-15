import React from 'react'

const Buttongo = (props) => {
  return (
    <button className = {props.btnclass} onClick={props.funclick}>{props.text}</button>
  )
}

export default Buttongo