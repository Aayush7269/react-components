import React from 'react'
import { CgArrowRight } from "react-icons/cg";
import { useState } from 'react';





const Swipe = () => {

    const[val,setVal] = useState(false)
  return (
    <  div className=' relative bg-zinc-400 h-screen w-full flex items-center justify-center'>

       <div className='h-48  w-60 overflow-hidden relative'>
        <img className= {`h-48  w-60 ${val=== true ? "-translate-x-[100%]":"-translate-x-[0%]"} absolute`} src="https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNzA1MjEwfHxlbnwwfHx8fHw%3D   " alt="" />
        <img className={`h-48  w-60 ${val=== false ? "-translate-x-[100%]":"-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
        <span className='flex items-center justify-center bg-zinc-200 h-8 w-8 rounded-full absolute bottom-2 left-1/2'>
        < CgArrowRight className=''  onClick={()=>setVal(()=>!val)}/>

        </span>
        </div>    

        
          
    </div>
  )
}

export default Swipe;