
import React from "react";

function Card(){

var data=[
    {image:'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWN0fGVufDB8fDB8fHww', title:'React Basics', description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate.'},
    {image:'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWN0fGVufDB8fDB8fHww', title:'java Basics', description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate.'},
    {image:'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWN0fGVufDB8fDB8fHww', title:'Python Basics', description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate.'},
    
]

      
    return(
        <div>
            <div className="px-4 h-screen flex items-center justify-content gap-10 w-full bg-red-300 ">
            {data.map((elem,index)=>(
                
            <div key={index}className=" rounded md overflow-hidden w-52 bg-white   wrap">
             <div className="mb-4">
                <img className="w-full h-32 object-cover" src={elem.image} alt="" />
             </div>
            <div className="">
                <h1 className=" mb-2 ml-3 font-semibold"> {elem.title}</h1>
                <p className=" text-xs mb-4 ml-3 w-[90%] leading-4 ">{elem.description}</p>
            </div>
            <div >
               
            </div>
           </div>
         
                
            ))}
        </div>
        </div>
    )
}

export default Card;