import React, { useContext, useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ContextAPI';
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
    const [navState, setNavState] = useState(false);
  const { handleThemeSwitch } = useContext(ThemeContext);
  const [prevScroll, setPrevScroll] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setVisible(currentPosition < 10)
      setPrevScroll(currentPosition)
    }
    
    window.addEventListener('scroll', handleScroll);
    return ()=> window.addEventListener('scroll', handleScroll)
  }, [prevScroll,visible])
  
  return (
    <div className={`z-[999]  w-full flex items-center justify-between px-8 py-2 ${visible ? '': ' sticky top-0 bg-indigo-700'}`}>
      {/* Left */}
      <Link to="/"> <img src="./assets/logo.png" alt="Parashar Neupane" className='w-48 h-24 object-cover' /></Link>
         

          {/* Right */}

          <div className="flex gap-4 justify-around">
              
                        
              
              {/* Mobile */}
          {!navState && (<GiHamburgerMenu className={`flex text-black dark:text-white lg:hidden cursor-pointer ${visible?'text-black':'text-white'}`} size={28} onClick={()=> setNavState(!navState)}/>)}
          
          {/* Desktop */}
          <div className="hidden lg:flex flex-row items-center justify-around gap-8">
          <a  href={'#about'} className={`font-bold text-lg cursor-pointer text-black dark:text-white dark:hover:text-indigo-500 hover:text-indigo-500 ${visible?'text-black':'text-white'}`}>About Me</a>
          <a href={'#skills'} className={`font-bold text-lg cursor-pointer text-black dark:text-white dark:hover:text-indigo-500 hover:text-indigo-500 ${visible?'text-black':'text-white'}`}>Skills</a>
           <a href={'#projects'} className={`font-bold text-lg cursor-pointer text-black dark:text-white dark:hover:text-indigo-500 hover:text-indigo-500 ${visible?'text-black':'text-white'}`}>Projects</a>
            <Link to={'/'} className={`font-bold text-lg cursor-pointer text-black dark:text-white dark:hover:text-indigo-500 hover:text-indigo-500 ${visible?'text-black':'text-white'}`}>Hire Me</Link>

          </div>
        
              {/* Active NavState */}
              
          {navState && (
              <div className=" absolute h-screen w-full top-0 left-0 z-50 bg-black/90 flex lg:hidden flex-col gap-4 justify-center items-center">
                <IoMdClose  size={28} className='absolute top-8 right-5 text-white border-2 rounded-full cursor-pointer' onClick={()=> setNavState(!navState)}/>
                  <a href={'#about'} onClick={()=>setNavState(false)} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>About Me</a>
                  <a href={'#skills'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>Skills</a>
                  <a href={'#projects'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>Projects</a>
                  <Link to={'/'} className='font-bold text-lg cursor-pointer text-white hover:text-indigo-500'>Hire Me</Link>
              </div>
              )}
              
              {/* Dark Mode */}
              <HiOutlineLightBulb onClick={handleThemeSwitch} size={28} className={`text-black fill-white dark:text-white cursor-pointer ${visible?'text-black':'text-white fill-none dark:fill-white'}`} />


          </div>
          
    </div>
  )
}

export default Navbar
