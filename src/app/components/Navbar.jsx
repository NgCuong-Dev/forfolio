import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const NavBar = () => {
  return (
    <nav>
        <div className='container flex items-center justify-between mx-auto p-8'>
            <Link className='text-5xl text-white font-medium' href={'/'}>
             <Image className='sm:w-20 lg:w-40' src="/img/logo.png"width={150} height={150}/>
            </Link>
            <div className=' menu hidden md:block sm:block md:w-auto lg:flex'>
                <li className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded sm:cursor-pointer hover:text-orange-400 hover:cursor-pointer  '>
                    <Link href={'/about'}>About</Link>
                </li>
                <li className='block py-2 pl-3 pr-4  text-[#ADB7BE] sm:text-xl rounded hover:text-orange-400 transition-all hover:cursor-pointer'>
                    <Link href={'/project'}>Project</Link>
                </li>
                <li className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-orange-400 hover:cursor-pointer '>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </div>
        </div>
    </nav>
  )
}

export default NavBar