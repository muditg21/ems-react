import React, { useContext, useState } from 'react'
import Employee from './components/DashBoard/Employee'
import Admin from './components/DashBoard/Admin'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalstorage } from './utils/localStorage'
import { useEffect } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  
  }, [authData])
  

  const handleLogin=(email,password)=>{
     if(email=='admin@me.com' && password==123){
     // console.log('THIS IS ADMIN')
      setUser('admin')
      //console.log(user);
      localStorage.setItem('loggedInUser'),JSON.stringify({role:'admin'})
     }
     else if(authData && authData.employees.find((e)=>email==e.email && password==e.password)){
     // console.log('THIS IS USER')
      setUser('employees')
      //console.log(user)
       localStorage.setItem('loggedInUser'),JSON.stringify({role:'employee'})
     }
     else{
      alert('invalid creds')
     }
  }
  
const authData= useContext(AuthContext)
 //console.log(authData)
//   useEffect(() => {
//   // setLocalstorage()
//   getLocalStorage()
// },)
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
       {user=='admin'? <Admin /> : <Employee />}
    </>
  )
}

export default App