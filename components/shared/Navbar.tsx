'use client'

import { useState } from 'react'
import Login from '../ui/buttons/Login'
import Logo from '../ui/Logo'
import { navLinks } from '@/constants/navLinks'
import SignUp from '../ui/buttons/SignUp'
import Lang from '../ui/buttons/Lang'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinksList = navLinks.map((link) => (
    <li key={link.name} className='text-[#212832] text-base hover:text-[#DF6951] transition-colors duration-200'>
      <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
    </li>
  ))

  return (
    <div className='pt-10 flex items-center justify-between z-50 relative container mx-auto px-4 md:px-8 lg:px-16'>
      {/* logo */}
      <Logo />

      {/* Desktop nav links */}
      <ul className='hidden lg:flex items-center gap-x-10 font-poppins'>
        {navLinksList}
      </ul>

      {/* Desktop nav buttons */}
      <div className='hidden lg:flex items-center gap-x-8 font-poppins'>
        <Login />
        <SignUp />
        <Lang />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className='lg:hidden text-[#212832] p-2 focus:outline-none z-50 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay/Drawer */}
      {isOpen && (
        <div className='fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-y-8 lg:hidden animate-fade-in'>
          <ul className='flex flex-col items-center gap-y-6 font-poppins text-lg'>
            {navLinksList}
          </ul>
          <div className='flex flex-col items-center gap-y-4 font-poppins w-full px-8 max-w-xs'>
            <Login />
            <div className="w-full flex justify-center">
              <SignUp />
            </div>
            <div className="w-full flex justify-center">
              <Lang />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
