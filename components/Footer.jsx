import React from 'react'

const Footer = () => {

  return (
    <div className=' flex-wrap max-sm:justify-center flex  mt-32 justify-between border-t border-gray-300 md:py-7 py-3 px-4 md:px-20'>
      <p className='py-2 text-center'> Copyright © 2023 JS Mastery Pro | All Rights Reserved</p>
      <div className="flex max-lg:border-t justify-between  max-md:w-full py-2 gap-6">
        <button> Terms & Conditions</button>
        <button>Privacy Policy</button>
        </div>      
    </div>
  )
  
}

export default Footer