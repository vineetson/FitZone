"use client"
import InputBox from '@/components/auth/InputBox'
import InputButton from '@/components/auth/InputButton'
import Image from 'next/image'
import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'


const Auth = () => {

    const [login,setLogin] = useState(true)

  return (
    <div className='flex'>
        <div className='relative h-screen bg-red w-2/5'>
            <Image fill alt='gympic' src='/images/signupgym.jpg' />
        </div>
        <div className='flex justify-center items-center w-full'>
            {
                login ? (
                <div>
                    <p className='text-2xl font-bold mb-10'>Sign in to Dribble</p>
                    {/* <InputButton >
                        <div className='flex gap-x-4 items-center'>
                            <FcGoogle size={25}/>
                            <p className='font-medium'>Sign in with Google</p>
                        </div>
                    </InputButton> */}
                    <InputBox name='UserName or Email'/>
                    <InputBox name='Password'/>
                    <InputButton dark>Sign In</InputButton>
                    <div className='flex mt-4 justify-center'>
                        <p className='text-sm text-slate-500'>Don't have an account ?</p>
                        <span className='text-sm text-slate-700 underline cursor-pointer' onClick={()=>setLogin(false)}>Sign Up</span>
                    </div>
                </div>
                ) : (
                <div>
                    <p className='text-2xl font-bold'>Sign up</p>
                    <InputBox name='Name'/>
                    <InputBox name='Email'/>
                    <InputBox name='Password' type='password'/>
                    <div className='flex mt-4'>
                        <input className='mr-4' type='checkbox'></input>
                        <p>I agree with Terms and Service</p>
                    </div>
                    <InputButton dark>Create Account</InputButton>
                    <div className='flex mt-4 justify-center'>
                        <p className='text-sm text-slate-500'>Already have an account ?</p>
                        <span className='text-sm text-slate-700 underline cursor-pointer' onClick={()=>setLogin(true)}>Sign In</span>
                    </div>
                    {/* <InputButton >
                        <div className='flex gap-x-4 items-center'>
                            <FcGoogle size={25}/>
                            <p className='font-medium'>Sign up with Google</p>
                        </div>
                    </InputButton> */}
                </div>
                )
            }
            
            
        </div>
    </div>
    
  )
}

export default Auth