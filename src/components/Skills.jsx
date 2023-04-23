import React from 'react'

const Skills = () => {
  return (
    <div className=' bg-[#3E3C3CE5] bg-opacity-30  rounded-xl mx-10 flex flex-col justify-center items-center'>
        <div className=' w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center'>
            <img className='w-[200px] h-[200px]' src="https://img.icons8.com/color/512/html-5--v1.png" alt="" />
            <p className='text-white text-[20px] text-center'>HTML</p>
        </div>

        <div className=' w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center'>
            <img className='w-[160px] h-[160px] bg-cover ' src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
            <p className='text-white text-[20px] text-center'>CSS</p>
        </div>

        <div className=' w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center'>
            <img className='w-[160px] h-[160px] bg-cover ' src="https://play-lh.googleusercontent.com/IHMe-gJ6G4rf5-TVlDZOtcW-3EDBwJ4p2qomk86O6qkjjutl5ePczGmyqCDOvhGJ1w" alt="" />
            <p className='text-white text-[20px] text-center'>Javascript</p>
        </div>

        <div className=' w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center'>
            <img className='w-[160px] h-[160px] bg-cover ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
            <p className='text-white text-[20px] text-center'>React</p>
        </div>

        <div className=' w-[250px] h-[250px] bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center'>
            <img className='w-[160px] h-[160px] bg-cover ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="" />
            <p className='text-white text-[20px] text-center'>TailwindCSS</p>
        </div>
    </div>
  )
}

export default Skills