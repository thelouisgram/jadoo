import Login from '../ui/buttons/Login'
import Logo from '../ui/Logo'
import { navLinks } from '@/constants/navLinks'
import SignUp from '../ui/buttons/SignUp'
import Lang from '../ui/buttons/Lang'

const Navbar = () => {
    const navLinksList = navLinks.map((link) => (
        <li key={link.name} className='text-[#212832] text-base font-normal'>
            <a href={link.href}>{link.name}</a>
        </li>
    ))
  return (
    <div className='pt-11.75 flex items-center justify-between'>
        {/* logo */}
      <Logo />  
      {/* nav links */}
      <ul className='flex items-center gap-x-10'>
        {navLinksList}
      </ul>
      {/* nav buttons */}
      <div className='flex items-center gap-x-[12.5]'>
        <Login />
        <SignUp />
        <Lang />
      </div>
    </div>
  )
}

export default Navbar
