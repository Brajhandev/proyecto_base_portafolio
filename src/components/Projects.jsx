import { AiFillGithub} from 'react-icons/ai'
import { TbWorldWww} from 'react-icons/tb'

export const Projects = () => {
  return (
    <div>
      <h1 className="text-[32px] font-bold text-white mb-5 text-center">
        <span className="text-[#9BA4ED]">My</span> Projects
      </h1>
      <div className="bg-[#1A1A1AE5] bg-opacity-70  rounded-xl flex flex-wrap justify-center sm:w-full md:w-320 md:justify-center md:flex-wrap">
        <div className=" w-[80%]  bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-full h-[200px] object-cover rounded-lg"
            src="./images/quottesapp.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center my-2">Quottes App</p>
          <div className='flex justify-around w-full mb-2 text-white'>
            <a href='https://github.com/Brajhandev/quotes-app' className='flex items-center gap-2 underline'> <AiFillGithub/> Github</a>
            <a href='https://quotes-universal.netlify.app/' className='flex items-center gap-2 underline'>  <TbWorldWww/> Demo</a>
          </div>
        </div>


        <div className=" w-[80%]  bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-full h-[200px] object-cover rounded-lg"
            src="./images/wheatherapp.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center my-2">Wheater App</p>
          <div className='flex justify-around w-full mb-2 text-white'>
            <a href='https://github.com/Brajhandev/quotes-app' className='flex items-center gap-2 underline'> <AiFillGithub/> Github</a>
            <a href='https://quotes-universal.netlify.app/' className='flex items-center gap-2 underline'>  <TbWorldWww/> Demo</a>
          </div>
        </div>

        <div className=" w-[80%]  bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center">
          <img
            className="w-full h-[200px] object-cover rounded-lg"
            src="./images/crud.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center my-2">CRUD App</p>
          <div className='flex justify-around w-full mb-2 text-white'>
            <a href='https://github.com/Brajhandev/quotes-app' className='flex items-center gap-2 underline'> <AiFillGithub/> Github</a>
            <a href='https://quotes-universal.netlify.app/' className='flex items-center gap-2 underline'>  <TbWorldWww/> Demo</a>
          </div>
        </div>


        <div className=" w-[80%]  bg-[#3E3C3CE5] rounded-lg mt-5 flex flex-col items-center justify-center mb-3">
          <img
            className="w-full h-[200px] object-cover rounded-lg"
            src="./images/pokedex.png"
            alt=""
          />
          <p className="text-white text-[20px] text-center my-2">Pokedex App</p>
          <div className='flex justify-around w-full mb-2 text-white'>
            <a href='https://github.com/Brajhandev/quotes-app' className='flex items-center gap-2 underline'> <AiFillGithub/> Github</a>
            <a href='https://quotes-universal.netlify.app/' className='flex items-center gap-2 underline'>  <TbWorldWww/> Demo</a>
          </div>
        </div>

      </div>
    </div>
  )
}
