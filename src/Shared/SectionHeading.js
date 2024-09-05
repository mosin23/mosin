import React from 'react'

const SectionHeading = ({firstTitle,secondTitle}) => {
  return (
   <div>
     <h1 className='text-[40px] font-bold'>{firstTitle}
        <span className='text-[#62B6CB]'>{secondTitle}</span></h1>
        
   </div>
  )
}

export default SectionHeading