import React, { useState } from 'react'

function Video() {

 const [val,setVal] = useState({name:'aayush', isBanned:false})

const[score,setScore] = useState(0);

 

  return (
  <>
  
    <div className='p-4'>
      <h1>name : {val.name}</h1>
      <h1>name : {val.isBanned.toString()}</h1>
      <button onClick={()=>setVal(()=>({...val, isBanned:!val.isBanned}))} className='bg-blue-400 rounded-full px-2 '>
        change
      </button>
      </div>
       <div className='p-4'>
       <h1>Score : {score}</h1>
        <button onClick={()=>setScore(prev=>prev+1)}className='bg-blue-400 rounded-full px-2 '>
         change
       </button>
       </div>
       </>
  )
}

export default Video