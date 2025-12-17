"use client"

import React from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contect = () => {
  return (
    <>
      <section id="contact" className="bg-[#0f0f0f] text-white pt-1  py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Contect <span className="text-pink-500">Me</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/siva-codez" className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition border border-gray-700">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/siva-developerz/" className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition border border-gray-700">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sivaarumugap@gmail.com" className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition border border-gray-700">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contect
