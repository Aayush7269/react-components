import React from "react";
import Video from "./Components/Video";
import Card from "./Components/Card";
import Array from "./Components/Array";
import Object from "./Components/Object";
import Swipe from "./Components/Swipe";
import Friend from "./Components/Friend";
import { useState } from "react";



export const App = () => {
  const raw = [
    { name: "Aayush", profession: "Web Developer", img: "https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",sathi: true },
    { name: "Priya", profession: "Data Scientist", img: "https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D", sathi: true },
    { name: "Rohan", profession: "Machine Learning Engineer", img: "https://images.unsplash.com/photo-1631588310958-dec1630f8df5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" ,sathi: true },
    { name: "Suresh", profession: "Product Manager", img: "https://images.unsplash.com/photo-1618930818691-6d80f0d1fa26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",sathi:true }
  ];


  const [friends, setFriends] = useState(raw);
    
const handleOnChange= (cardindex)=>{

  setFriends((prev)=>
   prev.map((item,index)=>{ 
       if(index === cardindex  ) {
        return {...item, sathi: !item.sathi}
}
return item;})
  )
}

  

  return (

    <div className=' gap-10 h-screen w-full bg-slate-300 flex flex-wrap items-center justify-center'>

      {friends.map((item,index) =><Friend key={index} index={index} handleOnChange={handleOnChange} Value={item}/> )}
</div>
  
  )
}
export default App;

