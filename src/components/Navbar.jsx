import { useState } from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const Navlinks = ["Index", "Process", "About"]
  const [selected, setSelected] = useState(0)

  const Handleselect = (index) => {
    setSelected(index);
  }

  return (
    <nav className='flex gap-x-4 items-center'>
      <img className='size-10 cursor-pointer' src={logo} alt="loading..." />
      <ul className='flex gap-x-3.5'>
        {Navlinks.map((item, index) => (
          <li className={`${selected === index ? "text-black" : "text-[#737373]"}  text-[16px]  cursor-pointer hover:text-black transition-all ease-in duration-200 font-normal`} onClick={() => Handleselect(index)} key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar