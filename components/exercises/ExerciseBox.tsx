import Image from "next/image";
import React from "react";

interface ExerciseBoxProps  {
bodyPart?:string;
equipment?:string;
gifUrl:string;
name:string;
target?:string;
}

const ExerciseBox:React.FC<ExerciseBoxProps> = ({gifUrl,name,bodyPart,target,equipment}) => {
  return (
    <div className="p-5 border shadow m-10 flex-col justify-center items-center ">
        <div className="w-[300px] h-[300px] relative">
            <Image fill alt="exercise" src={gifUrl} sizes="300 300"/>
        </div>
        <h1 className="text-2xl text-center font-medium my-2">{name}</h1>
        <div className="flex gap-x-4 p-2 bg-red-600 text-white rounded my-2">
          <p>Bodypart : </p>
          <p>{bodyPart}</p>
        </div>
        <div className="flex gap-x-4 p-2 bg-red-600 text-white rounded my-2">
          <p>Equipment Required : </p>
          <p>{equipment}</p>
        </div>
        <div className="flex gap-x-4 p-2 bg-red-600 text-white rounded my-2">
          <p>Target body Part : </p>
          <p>{target}</p>
        </div>
    </div>
  )
}

export default ExerciseBox