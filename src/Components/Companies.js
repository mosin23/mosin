import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import './../Constants'
import { AppText, Certificates } from './../Constants'
const Companies = () => {
  return (
    <div id='companies' className='bg-purple-200 p-5'>
        <div className='flex justify-center items-center flex-col'>
        <SectionHeading firstTitle={ AppText.CompaniesI} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3'>
          {Certificates.map((item, index) => (
            <div 
              key={index} 
              className='bg-white p-5 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'>
              <img 
                src={item.imageUrl} 
                alt='Certificate Logo' 
                className='h-16 mb-4 mx-auto' 
              />
              <div className='text-center'>
              <p className='text-xs text-black-500 mt-2 overflow-hidden border-b-4 border-indigo-200'>{item.name}</p>
                <p className='text-xs text-gray-500 mt-2 overflow-hidden bold'>
                  Credential No: {item.url}
                </p>
                <p className='text-xs text-gray-500 mt-2'>
                  Expiry Date: {item.exp}
                </p>
                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 mt:10" onClick={()=>{window.location.href=item.link}}>Verify</button>
                </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Companies