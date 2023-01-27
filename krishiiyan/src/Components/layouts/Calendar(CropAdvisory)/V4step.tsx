import React from 'react'

const V4step = (props:any) => {
  return (
    <div className="text-[#13490A] font-extrabold mt-4">
      <p>{props?.cropDetails?.cultivationStage?.V4?.description}</p>
  </div>
  )
}

export default V4step