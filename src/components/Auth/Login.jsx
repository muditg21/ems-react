import { useState } from "react"

const Login = () => {
    const submitHandler=(e)=>{
      e.preventDefault()
      console.log(`email is ${email}`)
      console.log(`password is ${password}`)

      setEmail('')
      setPassword('')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center'  >
      <div className='border-2 border-red-400 px-10 py-20'>
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
              required className='border-3 border-red-400 bg-amber-200 px-5 py-2 rounded-2xl text-black' type="email" placeholder='email' />
              <input 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              required className='border-3 border-red-400 bg-amber-200 px-5 py-2 rounded-2xl text-black' type="password" placeholder='password' />
              <button className='bg-red-400 text-amber-200 px-7 py-2 rounded-full'>Submit</button>
         </form>
      </div>
    </div>
  )
}

export default Login