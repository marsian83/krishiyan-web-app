import React from 'react'

const V8step = (props:any) => {
  return (
    <div className="text-[#13490A] font-extrabold mt-4">
      <p>{props?.cropDetails?.cultivationStage?.V8?.description}</p>
  </div>
  )
}

export default V8step