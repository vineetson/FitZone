import Image from "next/image"

interface  CategoryBoxProps {
    name ?: string
}

const CategoryBox:React.FC<CategoryBoxProps> = ({name}) => {
  return (
    <div className="flex flex-col justify-evenly items-center w-[200px] h-[200px] py-4 gap-y-6 border px-10 mx-10 my-5 rounded shadow-md hover:border-pink-500 hover:scale-105 active:border-t-2 active:border-t-red-500">
        <div className="relative w-[80px] h-[80px]" >
            <Image alt="gym" src={"/images/gym.png"} fill sizes="80 80"/>
        </div>
        <p className="text-xl font-medium">{name}</p>
    </div>
  )
}

export default CategoryBox