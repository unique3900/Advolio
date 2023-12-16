import React, { useContext } from 'react'
import { ThemeContext } from './Context/ContextAPI'

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <div>
      <h1 className="text-2xl text-center">Hey</h1>
    </div>
  )
}

export default App
