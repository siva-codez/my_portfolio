import React from 'react'

const Project = () => {

    const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration',
      tech: ['Next.js', 'MongoDB', 'Bootstrap']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind']
    },
    {
      title: 'Spotify Clone',
      description: 'Develop a spotify UI/UX clone',
      tech: ['React', 'JSON Data', 'Tailwind']
    },
    {
      title: 'Catalog with Search and Filter',
      description: 'Real-time search and filter functionality for product catalog',
      tech: ['React', 'JSON Data', 'Tailwind']
    }
  ];

  return (
    <>
       <section id="projects" className="bg-[#0f0f0f] text-white pt-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transform transition duration-300 ease-out  group hover:scale-[1.06] hover:-translate-y-2 hover:shadow-purple-500/30 hover:shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center">
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
