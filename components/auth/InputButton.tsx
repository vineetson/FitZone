interface InputButtonProps {
    children : React.ReactNode;
    dark? : boolean;
}

const InputButton:React.FC<InputButtonProps> = ({children,dark=false}) => {
  return (
    <div className={`${dark ? `text-white bg-black` : `text-black bg-white`} w-[400px] py-2 px-6  rounded-full text-center mt-4 border-2 flex justify-center items-center cursor-pointer`}>{children}</div>
  )
}

export default InputButton