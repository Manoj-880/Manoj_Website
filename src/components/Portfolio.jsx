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
        src: jagbandhu,
        designLink: "https://www.figma.com/file/FXYuo4FFk4ymCOELxQNLn4/jagbandhu-redesign?type=design&node-id=0%3A1&mode=design&t=DF1jW9KKXtygDoIi-1",
        caseStudy:"https://www.behance.net/gallery/179980253/JagBandhu",
    },
    {
        id:2,
        src: nehwe,
        designLink: "https://www.figma.com/file/wtrRjPEirY1gJt825hJGZv/Nehwe?type=design&node-id=0%3A1&mode=design&t=0VwnU8A1tith3JAn-1",
        caseStudy:"https://www.behance.net/gallery/179979811/Nehwe-Elearning-Platform",
    },{
        id:3,
        src: fcf,
        designLink: "https://www.figma.com/file/oJSEDkDYxIMC9KTqY9W8Ks/web-application?type=design&node-id=0%3A1&mode=design&t=RK7KgrANqSs7ZcoT-1",
        caseStudy:"https://www.behance.net/gallery/157770849/Feed-Care-Fear-web-application",
    },{
        id:4,
        src: task,
        designLink: "https://www.figma.com/file/dCzKk4v7xrg6YK34Fwg4r6/Task-reminder-application-ios?type=design&node-id=0%3A1&mode=design&t=11JD8fYsTo67EMxd-1",
        caseStudy:"https://www.behance.net/gallery/147575645/Task-Reminder-application",
    },{
        id:5,
        src: hourstay,
        designLink: "https://www.figma.com/file/cA3RpmIhotpgWxiuGuSEhf/Hour-Stay?type=design&node-id=0%3A1&mode=design&t=mr1HxZfeShUewCCv-1",
        caseStudy:"https://www.behance.net/gallery/143142399/Hotel-Booking-mobile-application",
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
                    projects.map(({id, src, designLink, caseStudy}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <a href={designLink} target='_blank' rel='noreferrer' className='w-2/5 px-6 py-3 m-4 duration-200 hover:scale-105'>Design</a>
                                <a href={caseStudy} target='_blank' rel='noreferrer' className='w-2/5 px-4 py-3 m-4 duration-200 hover:scale-105'>Case Study</a>
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