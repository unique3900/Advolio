import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './Context/ContextAPI'
import Navbar from './Components/Navbar'

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='bg-white h-screen dark:bg-black '>
     <Navbar/>
    </div>
  )
}

export default App
