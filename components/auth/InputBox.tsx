import React from 'react'

interface InputBoxProps {
    width?: number;
    name?:string;
    type?:string;
}



const InputBox:React.FC<InputBoxProps> = ({width=400,name="Name",type="text"}) => {
  return (
    <div className={`flex flex-col mt-8 w-[${width}px]`}>
        <label className='font-semibold'>{name}</label>
        <input type={type}  className='py-2 px-4 border-2 border-gray-300 rounded-lg hover:scale-105 active:border-pink-500 transition outline-none'/>
    </div>
  )
}

export default InputBox