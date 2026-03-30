import { useState } from "react"

const Login = ({handleLogin}) => {
    const submitHandler=(e)=>{
      e.preventDefault()
      // console.log(`email is ${email}`)
      // console.log(`password is ${password}`)
      handleLogin(email,password)
      setEmail('')
      setPassword('')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center'  >
      <div className='border-2 border-red-400 px-10 py-8'>
        <h1 className="text-3xl text-white flex item-centre justify-center mb-20">Login</h1>
         <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
         className='flex justify-center items-center flex-col gap-10'>
              <input
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }} 
              required className='border-3 border-amber-800 bg-amber-300 px-5 py-2 rounded-2xl outline-none text-black' type="email" placeholder='email' />
              <input 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              required className='border-3 border-amber-800 bg-amber-300 px-5 py-2 rounded-2xl outline-none text-black' type="password" placeholder='password' />
              <button className='bg-red-400 text-white px-7 py-2 rounded-full'>Submit</button>
         </form>
      </div>
    </div>
  )
}

export default Login