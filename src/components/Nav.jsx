import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons' 
import { navLinks } from '../constants'
import React, { useState } from 'react'


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) =>(
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-[#222]'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} width={25} height={25} onClick={()=>setShowMenu(!showMenu)}/>
        </div>
      </nav>
      <div className="absolute top-[4rem] right-[2rem] flex flex-col p-[0.5rem] h-fit min-w-[15rem] rounded-[1rem] bg-white shadow-2xl" style={{display: showMenu? 'flex': 'none'}}>
        <div activeClass='active' to='/' spy={true} smooth="true" offset={-100} duration={500} className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-coral-red rounded-full" onClick={()=>setShowMenu(false)}>Home</div>
        <div activeClass='active' to='about-us' spy={true} smooth="true" offset={-50} duration={500} className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-coral-red rounded-full" onClick={()=>setShowMenu(false)}>About Us</div>
        <div activeClass='active' to='products' spy={true} smooth="true" offset={-50} duration={500} className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-coral-red rounded-full" onClick={()=>setShowMenu(false)}>Products</div>
        <div activeClass='active' to='contact-us' spy={true} smooth="true" offset={-50} duration={500} className="text-white py-[0.5rem] px-[3rem] m-[0.25rem] bg-coral-red rounded-full" onClick={()=>setShowMenu(false)}>Contact Us</div>
      </div>
    </header>
  )
}

export default Nav
