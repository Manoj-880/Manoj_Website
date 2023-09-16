import React from 'react';
import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import figma from '../assets/tech/figma.png'
import js from '../assets/tech/js.png'
import reactimage from '../assets/tech/react.png'
import mongo from '../assets/tech/mongo.png'
import node from '../assets/tech/node.png'
import tailwind from '../assets/tech/tailwind.png'
import express from '../assets/tech/express.png'


const Skills = () => {

  const techStack = [
    {
      id:1,
      src: figma,
      title: 'Figma',
      style: 'shadow-orange-600'
    },
    {
      id:2,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id:3,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id:4,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400'
    },
    {
      id:5,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id:6,
      src: reactimage,
      title: 'React',
      style: 'shadow-blue-600'
    },{
      id:7,
      src: node,
      title: 'Node Js',
      style: 'shadow-green-600'
    },
    {
      id:8,
      src: express,
      title: 'Express Js',
      style: 'shadow-gray-500'
    },
    {
      id:9,
      src: mongo,
      title: 'MongoDB',
      style: 'shadow-green-600'
    },
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6 '>These are the technologies i have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techStack.map(({id, src, style, title}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Skills