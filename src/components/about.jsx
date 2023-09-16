import React from 'react'

const About = () => {
  return (
    <div name = "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>In the realm of technology and design, I've found my true calling as a UI/UX designer and MERN stack developer, armed with one year of immersive experience. My journey in this dynamic field has been a fusion of creativity and precision, where I thrive on the challenge of translating complex ideas into elegant and intuitive digital interfaces. With an innate ability to empathize with end-users, my work centers around enhancing their interactions, making technology accessible and enjoyable for everyone.</p>
            <br/>
            <p className='text-xl'>My passion extends beyond the surface of design, delving deep into the world of web development, particularly with the MERN stack. Through relentless learning and exploration, I've harnessed the power of MongoDB, Express.js, React, and Node.js to create web solutions that are not only visually striking but also functionally robust. Join me as we embark on a journey to transform digital landscapes, redefining user experiences and setting new standards of excellence in the ever-evolving realm of UI/UX design and MERN stack development.</p>

        </div>
    </div>
  )
}

export default About