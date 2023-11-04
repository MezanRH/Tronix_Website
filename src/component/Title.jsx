import React from 'react'

const Title = ({text,className}) => {
  return (
    <h3 className={` font-open font-normal text-2xl text-secound ${className}`}>{text}</h3>
  )
}

export default Title