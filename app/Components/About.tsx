import React from 'react'

const About = () => {
  return (
     <section id='about' className="bg-[#0f0f0f] text-white pt-1 px-6 lg:px-20 py-24">
      <div className="bg-[#151515] rounded-xl p-10 items-center">

        <div className=' flex flex-col items-center justify-center'>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-pink-500">Me</span>
          </h2>

          <h3 className="text-lg text-gray-300 mb-4">
            Developer & Designer
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I am a front-end web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive
            with web animations. I can provide clean code and pixel perfect
            design.
          </p>

          <button className="bg-pink-500 px-6 py-3 rounded-md hover:bg-pink-600">
            Let's Talk
          </button>
        </div>

      </div>
    </section>
  );
}

export default About
