import React from 'react'
import Image from "next/image"
import siva from "@/public/siva.png"

const Hero = () => {
  return (
    <>
    <section id='home' className='min-h-[70%] bg-[#0f0f0f] text-white flex items-center px-20 lg:px-24'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full'>       
            <div className=' w-full items-center justify-center flex flex-col md:w-1/2 md:text-left '>
                <p className='text-xl mt-8 text-gray-300 mb-2'>Hello<span className='text-pink-500'>.</span></p>
                <h1 className='text-4xl px-5 md:text-xl font-bold mb-3 md:font-semibold '>I'm <span>Siva</span> <span>Arumuga</span> <span>Perumal</span> </h1>
                <h1 className='text-3xl md:text-3xl font-extrabold mb-8'>Frontend Developer </h1>
            
            <div className='flex gap-4'>
                <button className='bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-md transition'
                >
                    Got a Project
                    </button>
                <button
                aria-label="Open resume PDF"
                  onClick={() => window.open("./Resume-Siva.pdf", "_blank")}
                className='border border-pink-500 text-pink-500 px-6 py-3 rounded-md transition hover:bg-pink-500 hover:text-white'>
                    My resume
                    </button>
            </div>
        </div>
        
        <div className='w-full relative flex justify-center items-center p-20 md:w-1/2 '>
          <img src="./siva.png" alt="Image" className='relative w-full object-cover rounded-lg md:w-full md:h-full shadow-lg' />
        </div>
        
      
    </div>
    </section>
    
    </>
    
  )
}

export default Hero
