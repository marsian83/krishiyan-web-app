import React from 'react'
import { Audio } from  'react-loader-spinner'

const Loader = () => {
    let radius:any = "9"
  return (
    <Audio
    height = "80"
    width = "80"
    // radius = {radius}
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    // wrapperStyle
    // wrapperClass
  />
  )
}

export default Loader