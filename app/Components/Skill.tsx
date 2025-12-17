import React from 'react'

const Skill = () => {

    const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 50 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Bootsrap', level: 90 },
    { name: 'My SQL', level: 90 },
    { name: 'MangoDB', level: 90 },
    { name: 'Node.js', level: 25 }
  ];

  return (
    <>
      <section id="skills" className="bg-[#0f0f0f] text-white pt-1 py-20 px-4 sm:px-6 lg:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-800 rounded-lg p-6 border border-gray-700 transform transition duration-300 ease-out  group hover:scale-[1.06] hover:-translate-y-2 hover:shadow-purple-500/30 hover:shadow-2xl">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-pink-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000"                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
  );
}

export default Skill
