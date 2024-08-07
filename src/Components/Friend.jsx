import React from 'react'

function Friend({Value, handleOnChange,index}) {

    const { name, profession, img,sathi} = Value;
    return (


        <div>
            <img className='h-40 w-40 object-cover rounded' src={img} alt="" />
            <h1 className=' '> Name :{name}</h1>
            <h2> profession :{profession}</h2>
            <button onClick={()=>handleOnChange(index)} className={` mt-2 px-1 py-1 ${sathi? "bg-blue-600 ":"bg-green-700 "}text-white text-xm rounded-md`}>{sathi? "Add Friend":"Friends" }</button>

        </div>



    );
}

export default Friend;