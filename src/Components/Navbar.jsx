import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ContextAPI';

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const {handleThemeSwitch} =useContext(ThemeContext)
  return (
      <div className=' w-full flex items-center justify-between px-8 py-8'>
          {/* Left */}
          <p className="cursor-pointer text-black dark:text-white text-3xl font-bold leading-8 ">Parashar <span className="text-indigo-500">Neupane</span></p>

          {/* Right */}

          <div className="flex gap-4 justify-around">
              
                        
              
              {/* Mobile */}
          {!navState && (<GiHamburgerMenu className='flex text-black dark:text-white lg:hidden cursor-pointer' size={28} onClick={()=> setNavState(!navState)}/>)}
          
          {/* Desktop */}
          <div className="hidden lg:flex flex-row items-center justify-around gap-8">
          <Link to={'/'} className='font-bold text-lg cursor-pointer text-black hover:text-indigo-500'>About Me</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-black hover:text-indigo-500'>Skills</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-black hover:text-indigo-500'>Projects</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-black hover:text-indigo-500'>Contact Me</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-black hover:text-indigo-500'>Hire Service</Link>
          </div>
        
              {/* Active NavState */}
              
          {navState && (
              <div className=" absolute h-screen w-full top-0 left-0 z-50 bg-black/90 flex lg:hidden flex-col gap-4 justify-center items-center">
                <IoMdClose  size={28} className='absolute top-8 right-5 text-white border-2 rounded-full cursor-pointer' onClick={()=> setNavState(!navState)}/>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>About Me</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>Skills</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>Projects</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>Contact Me</Link>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>Hire Service</Link>
              </div>
              )}
              
              {/* Dark Mode */}
              <HiOutlineLightBulb onClick={handleThemeSwitch} size={28} className='text-black dark:text-white cursor-pointer' />


          </div>
          
    </div>
  )
}

export default Navbar