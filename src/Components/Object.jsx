import React from "react";
import { useState } from "react";

function Object() {
  const [val, setVal] = useState([
      { name: "John Doe", age: 30, address: "street 12" },
      { name: "Aayush", age: 23, address: "street 8" },
      { name: "Shivam", age: 25, address: "street 4" }
    ]);

  return (
    <div>
      {val.map((item,index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
          </div>
        );
      })}
      <button className="ml-3 bg-blue-400 rounded-full p-3" onClick={()=>setVal(()=>val.map((item)=>{
          return(item.name === "Aayush" ?({name:"Aayush", age: item.age+1}) : item);
      }))}>click</button>

<button  className="ml-3 bg-red-300 rounded-full p-3" onClick={()=>setVal(()=>val.map((item)=>{
          return(item.name === "Aayush"|| "" ?({name:"Aayush", age: item.age-1}) : item);
      }))}>remove</button>
    </div>
  );
}

export default Object;
