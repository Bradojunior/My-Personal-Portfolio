import React from 'react'

const About = () => {
  return (
    <div  name='about' className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white  ' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-2 '>
                <p className='text-4xl font-bold inline border-b-4'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores debitis officia accusantium, adipisci, esse rerum reiciendis quas animi mollitia iure nemo, libero nesciunt sequi ipsa voluptatibus enim provident molestiae?
            </p>

            <br/>


            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit fugiat beatae tempora dolorem nostrum labore culpa aliquam ipsum optio illo ex, nam, distinctio iste placeat similique dignissimos dolor sunt?
            </p>
        </div>
    </div>
  )
}

export default About