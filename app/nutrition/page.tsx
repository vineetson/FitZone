"use client"
import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import CustomSelect from '@/components/nutrition/CustomSelect'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

const NutritionPage = () => {

  const [loading, setLoading] = useState(true)

  const [nutritionList, setNutritionList] = useState([])
  const [mealType, setMealType] = useState("breakfast")
  const [dietLabel, setDietLabel] = useState("balanced")
  const [cuisineType, setCuisineType] = useState("balanced")


  const mealTypeOptions = [
    { label: "Breakfast", value: "breakfast" },
    { label: "Lunch", value: "lunch/dinner" },
    { label: "Brunch", value: "brunch" },
    { label: "Snack", value: "snack" },
    { label: "Teatime", value: "teatime" },
  ];

  const cuisineTypeOptions = [
    { label: "American", value: "american" },
    { label: "Asian", value: "asian" },
    { label: "British", value: "british" },
    { label: "Chinese", value: "chinese" },
    { label: "Indian", value: "indian" },
    { label: "Mexican", value: "mexican" },
    { label: "Korean", value: "korean" },
    { label: "Japanese", value: "japanese" },
  ];


  const dietLabelOptions = [
    { label: "Balanced", value: "balanced", },
    { label: "High-Fiber", value: "high-fiber", },
    { label: "High-Protein", value: "high-protein", },
    { label: "Low-Carb", value: "low-carb", },
    { label: "Low-Fat", value: "low-fat", },
    { label: "Low-Sodium", value: "low-sodium", },
  ];


  useEffect(() => {
    const fetchOptions = {
      method: "GET",
      headers: {
        "Accept-Language": "en",
        "X-RapidAPI-Key": '2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a',
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      },
    };
    fetch(
      `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field[0]=uri&beta=true&random=true&imageSize[0]=LARGE&mealType[0]=${mealType}&health[0]=alcohol-cocktail&diet[0]=${dietLabel}&dishType[0]=Biscuits and cookies`, fetchOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setNutritionList(data.hits)
        setLoading(false)
        console.log(data.hits)
      });
  }, [mealType, dietLabel])

  return (
    <div className='flex flex-col items-center bg-white text-black'>
      <h1 className='text-5xl font-semibold my-10'>Nutrition App</h1>
      <CustomSelect setMealType={setMealType} mealTypeOptions={mealTypeOptions} mealType={mealType} />
      <CustomSelect setMealType={setDietLabel} mealTypeOptions={dietLabelOptions} mealType={dietLabel} />
      <CustomSelect setMealType={setCuisineType} mealTypeOptions={cuisineTypeOptions} mealType={cuisineType} />
      {
        loading ? (
          <div>
            <TailSpin
              height="80"
              width="80"
              color="green"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass="mt-10"
              visible={true}
            />
          </div>) : (

          <div className='grid grid-cols-3 gap-20 mt-10'>
            {nutritionList.map((nutrition) => (
              <div className='flex flex-col items-center justify-evenly  w-[400px] border shadow rounded-md p-4 flex-wrap'>
                <Link href={nutrition.recipe.url}>
                  <div className='w-[300px] h-[300px] relative'>
                    <Image src={nutrition.recipe.image} fill alt="recipe" />
                  </div>
                  <p className='font-medium text-center mt-2 text-xl'>{nutrition.recipe.label}</p>
                  <p className='py-1 px-2 bg-green-600 rounded text-white my-1'>Calories : {nutrition.recipe.calories.toFixed(2)} kcal</p>
                  <p className='py-1 px-2 bg-green-600 rounded text-white my-1'>Type : {nutrition.recipe.cuisineType}</p>
                  <p className='py-1 px-2 bg-green-600 rounded text-white my-1'>Fat : {nutrition.recipe.totalNutrients.FAT.quantity.toFixed(2)}g</p>
                  <p className='py-1 px-2 bg-green-600 rounded text-white my-1'>Sugar : {nutrition.recipe.totalNutrients.SUGAR.quantity.toFixed(2)}g</p>
                </Link>
              </div>
            ))}

          </div>

        )

      }

    </div>


  )
}

export default NutritionPage