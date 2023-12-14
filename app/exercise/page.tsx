"use client"
import CategoryBox from '@/components/exercises/CategoryBox'
import ExerciseBox from '@/components/exercises/ExerciseBox'
import { useEffect, useState } from 'react'

import { TailSpin } from 'react-loader-spinner'

const ExercisePage = () => {
    const [bodyPartList, setBodyPartList] = useState([])
    const [exerciseList, setExerciseList] = useState([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("")

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
            .then(response => response.json())
            .then(data => {
                setBodyPartList(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a',
                'X-RapidAPI-Host': "exercisedb.p.rapidapi.com"
            }
        };

        fetch('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=10', options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setExerciseList(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])




    const setExercisesByName = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a',
                'X-RapidAPI-Host': "exercisedb.p.rapidapi.com"
            }
        };

        fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${name}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data, name)
                setExerciseList(data)
            })
            .catch(error => {
                console.error(error);
            });
    }


    const setExercisesByBodyParts = (bodypart) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2096513b92msh31962324c099fccp1abbb1jsned02b7cd892a',
                'X-RapidAPI-Host': "exercisedb.p.rapidapi.com"
            }
        };

        fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data, name)
                setExerciseList(data)
            })
            .catch(error => {
                console.error(error);
            });
    }




    return (
        <div className='flex flex-col items-center bg-white text-black'>
            <h1 className='text-3xl font-medium my-6'>Awesome Exercises</h1>
            <div className='flex gap-x-4'>
                <input type='text' placeholder='Search Exercises...' className='border-2 px-2 py-2 outline-none min-w-[600px]' onChange={(event) => setName(event.target.value)} value={name}></input>
                <button className='bg-pink-600 text-white py-2 px-10 rounded-md' onClick={() => setExercisesByName()}>Search</button>
            </div>
            <div className='flex overflow-x-auto whitespace-nowrap w-screen justify-center'>
                {loading ? (
                    <TailSpin
                        height="40"
                        width="40"
                        color="#f52105"
                        ariaLabel="tail-spin-loading"
                        radius="2"
                        wrapperStyle={{}}
                        wrapperClass="mt-10"
                        visible={true}
                    />
                ) : (
                    bodyPartList.map((bodypart) => (
                        <div key={bodypart} onClick={() => {
                            console.log(bodypart)
                            setExercisesByBodyParts(bodypart)
                        }
                        }>
                            <CategoryBox name={bodypart} />
                        </div>
                    ))
                )

                }
            </div>
            {
                loading ? (
                    <TailSpin
                        height="80"
                        width="80"
                        color="#f52105"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass="mt-10"
                        visible={true}
                    />
                ) : (
                    <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3'>
                        {
                            exerciseList.length === 0 ? (
                                <div className='text-3xl font-medium mt-10'>No matching exercises</div>
                            ) : (
                                exerciseList.map((exercise) => (
                                    <ExerciseBox key={exercise.id} gifUrl={exercise.gifUrl} name={exercise.name} bodyPart={exercise.bodyPart} equipment={exercise.equipment} target={exercise.target} />
                                ))

                            )
                        }
                    </div>
                )
            }


        </div>
    )
}

export default ExercisePage