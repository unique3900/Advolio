import React, { useContext, useEffect } from 'react'

import { ThemeContext } from './Context/ContextAPI'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <main className='relative min-h-screen dark:bg-black  scroll-smooth'>
      <Navbar />
      


      <Home/>
      <AboutMe/>
      
    </main>
  )
}

export default App
