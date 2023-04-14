import {HiBars3} from 'react-icons/hi2'

const NavBar = () => {
  return (
    <nav className=' bg-blue-950 h-20 flex justify-between items-center px-4'>
        <div>
            <img src="./images/atomo.png" alt="" />
        </div>
        <ul className=' hidden'>
            <li><a href="">Home</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">Contact Me</a></li>
        </ul>
        <div className=' text-white text-2xl'>
            <HiBars3/>
        </div>
    </nav>
  )
}

export default NavBar