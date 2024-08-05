import React, { useState } from 'react'

function Video() {

 const [val,setVal] = useState({name:'aayush', isBanned:false})

const[score,setScore] = useState(0);

 

  return (
  <>
  
    <div className='p-4'>
      <h1>name : {val.name}</h1>
      <h1>name : {val.isBanned.toString()}</h1> //changed the boolean to string for better visibility
      <button onClick={()=>setVal(()=>({...val, isBanned:!val.isBanned}))} className='bg-blue-400 rounded-full px-2 '> //onclick receives a function that returns a new object with the change value of isBanned by using spread operator.
        change
      </button>
      </div>
       <div className='p-4'>
       <h1>Score : {score}</h1>
        <button onClick={()=>setScore(prev=>prev+1)} className='bg-blue-400 rounded-full px-2 '>// inside the setScore function, prev is the current score. So we increment it by 1. we always get prev as an argument and return it with the incremented value.//
         change
       </button>
       </div>
       </>
  )
}

export default Video