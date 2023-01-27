import React from 'react'

const VTstep = (props:any) => {
  return (
    <div className="text-[#13490A] font-extrabold mt-4">
      <p>{props?.cropDetails?.cultivationStage?.VT}</p>
  </div>
  )
}

export default VTstep