import React from 'react'

const BasalStep = (props:any) => {
  return (
    <>
    <div className="text-[#13490A] font-extrabold mt-4">
      <p>{props?.cropDetails?.cultivationStage?.basal?.description}</p>
  </div>
</>
  )
}

export default BasalStep