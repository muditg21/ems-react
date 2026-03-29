import React from 'react'
import Employee from './components/DashBoard/Employee'
import Admin from './components/DashBoard/Admin'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalstorage } from './utils/localStorage'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
  // setLocalstorage()
  getLocalStorage()
},)
  return (
    <>
      <Login />
       {/* < Employee /> */}
      {/* <Admin /> */}
    </>
  )
}

export default App