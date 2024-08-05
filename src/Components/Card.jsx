
import React from "react";

function Card(){

var data=[
    {image:'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWN0fGVufDB8fDB8fHww', title:'React Basics', description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate.',
    available:true},
    
    {image:'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWN0fGVufDB8fDB8fHww', title:'java Basics', description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate.',
        available:false
    },
    {image:'https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWN0fGVufDB8fDB8fHww', title:'Python Basics', description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditat.',
        available:true
    },
    
]
const hanleOnDownload = () => {alert('Download Course')}
const handleOnError = () => {alert('not available')}
      
    return(
        <div>
            <div className="px-4 h-screen flex items-center justify-content gap-10 w-full bg-red-300 ">
            {data.map((elem,index)=>(
                
            <div key={index}className=" rounded md overflow-hidden w-52 bg-white   wrap">
             <div className="mb-4">
                <img className="w-full h-32 object-cover" src={elem.image} alt="" />
             </div>
            <div className="ml-3">
                <h1 className=" mb-2  font-semibold"> {elem.title}</h1>
                <p className=" text-xs mb-4 w-[90%] leading-4 ">{elem.description}</p>
                <button onClick={elem.available ? hanleOnDownload : handleOnError } className={`ml-10 px-2 ${elem.available? "bg-blue-500" : "bg-red-400"} rounded mb-2`}>
                    {elem.available ? "available": "not available"}
                </button>
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