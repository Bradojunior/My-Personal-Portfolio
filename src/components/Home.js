import React from 'react'
import Brado from '../assets/Brandon.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full  md:h-screen text-white bg-gradient-to-b from-black via-black to-gray-800 pt-20 md:pt-20'>
        <div className='md:max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl sm:6-xl md:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Hi my name is Brandon i'm a software developer. Our top priority is to produce high quality websites  which are responsive on all mobile devices such as mobile phones, tablets and desktops with the use of programming languages such as HTML and CSS, Javascript, React for the Frontend and Node JS for the backend.
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis, voluptates explicabo deserunt nobis quaerat consectetur aliquam sed suscipit minima totam est eaque consequuntur accusantium quas rerum aperiam illo pariatur! */}
                </p>
                <div className='pb-20'>
                    <Link to='portfolio' smooth duration={500} className='group text-white flex w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 cursor-pointer to-blue-500'>
                        Portfolio <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1'/></span> 
                    </Link>
                </div>
            </div>
            <div className='pb-10 md:pb-0'>
                <img src={Brado} alt="Brado profile" className='rounded-2xl mx-auto w-80 object-cover h-[24rem] md:h-[320px] top-0' />
            </div>
        </div>
    </div>
  )
}

export default Home