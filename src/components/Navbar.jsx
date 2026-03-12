import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const Navlinks = [
    { name: 'Index', path: '/' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' }
  ]
  const [selected, setSelected] = useState(0)

  const Handleselect = (index) => {
    setSelected(index)
  }

  return (
    <>

      <nav className='flex gap-x-4 items-center'>
        <Link className='cursor-pointer' to={"/"}>
          <img className='size-10 cursor-pointer' src={logo} alt='loading...' />
        </Link>
        <ul className='flex gap-x-3.5'>
          {Navlinks.map((item, index) => (
            <Link
              to={item.path}
              className={`${selected === index ? 'text-black' : 'text-[#737373]'}  text-[16px]  cursor-pointer hover:text-black transition-all ease-in duration-200 font-normal`}
              onClick={() => Handleselect(index)}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar