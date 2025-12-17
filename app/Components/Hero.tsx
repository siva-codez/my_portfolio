import React from 'react'
import Image from "next/image"
import siva from "@/public/siva.png"

const Hero = () => {
  return (
    <>
    <section id='home' className='min-h-[70%] bg-[#0f0f0f] text-white flex items-center px-20 lg:px-24'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full'>       
            <div className='items-center justify-center flex flex-col'>
                <p className='text-xl mt-8 text-gray-300 mb-2'>Hello<span className='text-pink-500'>.</span></p>
                <h1 className='text-4xl px-5 md:text-2xl font-bold mb-3'>I'm Siva Arumuga Perumal</h1>
                <h1 className='text-3xl md:text-3xl font-extrabold mb-8'>Frontend Developer </h1>
            
            <div className='flex gap-4'>
                <button className='bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-md transition'
                >
                    Got a Project
                    </button>
                <button className='border border-pink-500 text-pink-500 px-6 py-3 rounded-md transition hover:bg-pink-500 hover:text-white'>
                    My resume
                    </button>
            </div>
        </div>
        
        <div className='relative flex justify-center items-center p-20 '>
            <div className='hidden lg:absolute w-80 h-80 rounded-full bg-orange-500/20 blur-3xl'></div>
            <div className='hidden lg:absolute w-72 h-72 rounded-full border-4 border-orange-500'></div>
          <img src="./siva.png" alt="Image" className='relative w-full object-cover rounded-lg' />
        </div>
        
      
    </div>
    </section>
    
    </>
    
  )
}

export default Hero
