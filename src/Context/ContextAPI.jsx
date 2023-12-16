import React, { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext("");

export const ThemeContextAPI = ({children}) => {
  const [theme, setTheme] = useState("light");
  const handleThemeSwitch = () => {
    setTheme(theme == "dark"? "light":"dark")
  }
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  return (
    <ThemeContext.Provider value={{theme,setTheme,handleThemeSwitch}}>
      {children}
    </ThemeContext.Provider>
  )
}

