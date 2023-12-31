import React from 'react';
import {FaGithub, FaLinkedin, FaBehance} from  'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            style: 'rounder-tr-md',
            href: 'https://www.linkedin.com/in/manoj-inamanamelluri-319852184/'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Manoj-880'
        },
        {
            id: 3,
            child: (
                <>
                    Behance <FaBehance size={30}/>
                </>
            ),
            href: 'https://www.behance.net/manojmanoj61'
        },
        {
            id: 4,
            child: (
                <>
                    E-Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:manoj.inamanamelluri123@gmail.com'
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            style: 'rounder-br-md',
            href: '/CV.pdf',
            download:true,
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                    <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                        {child}
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks