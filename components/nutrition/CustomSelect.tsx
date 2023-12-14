interface CustomSelectProps {
    setMealType : ()=>void;
    mealType : string;
    mealTypeOptions: { label: string; value: string }[]
}

const CustomSelect = ({ setMealType, mealType, mealTypeOptions }) => {
  return (
      <div className='flex justify-center'>
          <select onChange={(event) => setMealType(event.target.value)} value={mealType} className='p-2 text-xl w-[400px] border-2 my-2'>
              {
                  mealTypeOptions.map((mealType) => (
                      <option key={mealType.value} value={mealType.value}>{mealType.label}</option>
                  ))
              }
          </select>
      </div>
  )
}

export default CustomSelect