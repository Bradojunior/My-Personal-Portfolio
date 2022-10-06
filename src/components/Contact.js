import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form bellow to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/3b645437-da78-4d3a-8074-817a07b87d2b" method="POST" className='flex flex-col w-full md:w-[80%] md:m-auto'>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <label className='pt-2' htmlFor="">Email</label>
                    <input type="email" name='name' placeholder='Enter your email' className='p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <label htmlFor="">Message</label>
                    <textarea name="message" id="" placeholder='Please enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact