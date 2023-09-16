import React from 'react'
import fcf from '../assets/projects/fcf.png'
import hourstay from '../assets/projects/hourstay.png'
import jagbandhu from '../assets/projects/jagbandhu.png'
import nehwe from '../assets/projects/nehwe.png'
import task from '../assets/projects/task.png'

const Portfolio = () => {

const projects = [
    {
        id:1,
        src: jagbandhu
    },
    {
        id:2,
        src: nehwe
    },{
        id:3,
        src: fcf
    },{
        id:4,
        src: task
    },{
        id:5,
        src: hourstay
    },
]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Checkout some of my work right here</p>
            </div>            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    projects.map(({id, src}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-2/5 px-6 py-3 m-4 duration-200 hover:scale-105'>Design</button>
                                <button className='w-2/5 px-4 py-3 m-4 duration-200 hover:scale-105'>Case Study</button>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio