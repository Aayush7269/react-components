import React, { useState } from 'react'


function Array() {

const [val, setVal]= useState([1,2,3,4,5]);



  return (
    <div className='p-5'>
   {
    val.map((item, index) => {
        return <div key={index}>{item}</div>
    })
   }
   <button onClick={()=>setVal(()=>{ return val.filter((item, index) => index != val.length-1)
   })} className='bg-blue-500 rounded px-2' >
    click 
   </button>

    </div>
  )
}

export default Array