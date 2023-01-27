import React from 'react'

const GFstep = (props:any) => {
  return (
    <div className="text-[#13490A] font-extrabold mt-4">
      <p>{props?.cropDetails?.cultivationStage?.GF}</p>
  </div>
  )
}

export default GFstep