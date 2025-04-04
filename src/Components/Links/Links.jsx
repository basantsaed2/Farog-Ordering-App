import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
       return (
              <div
                     className='w-full flex items-center justify-evenly gap-x-10 bg-mainColor rounded-3xl py-2'
              >
                     {/* <NavLink to={''}
                            className='text-xl font-TextFontRegular text-white pb-1'
                     >
                            Home
                     </NavLink> */}
                     <NavLink to={'farog_menu'}
                            className='text-xl font-TextFontRegular text-white pb-1'
                     >
                            Menu
                     </NavLink>
                     {/* <NavLink 
                            to="#" // Prevents navigation
                            className='text-xl font-TextFontRegular text-gray-300 pb-1 pointer-events-none cursor-not-allowed'
                            >
                            Order Online
                     </NavLink> */}
                     {/* <NavLink
                            to={'menu'}
                            className='text-xl font-TextFontRegular text-white pb-1'
                     >
                            Order Online
                     </NavLink> */}
                     <NavLink to={'branches'}
                            className='text-xl font-TextFontRegular text-white pb-1'
                     >
                            Branch
                     </NavLink>
                     <NavLink to={'/contact_us'}
                            className='text-xl font-TextFontRegular text-white pb-1'
                     >
                            Contact Us
                     </NavLink>
              </div>
       )
}

export default Links