import React from 'react'
import Brado from '../assets/man.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='w-full  h-screen text-white bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio debitis, voluptates explicabo deserunt nobis quaerat consectetur aliquam sed suscipit minima totam est eaque consequuntur accusantium quas rerum aperiam illo pariatur!
                </p>
                <div>
                    <button className='group text-white flex w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 cursor-pointer to-blue-500'>
                        Portfolio <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1'/></span> 
                    </button>
                </div>
            </div>
            <div >
                <img src={Brado} alt="Brado profile" className='rounded-2xl mx-auto w-80 h-80 top-0' />
            </div>
        </div>
    </div>
  )
}

export default Home