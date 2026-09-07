import React from 'react'
import Menu from '@/components/Menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-12 xl:p-8 border-white shadow-2xl p-4 mt-3 pl-2 flex items-center justify-between">
        <div className="flex flex-col">
            <h1 className="font-bold lg:text-xl md:text-xl text-md text-[#111827]">Scheme<span className="text-green-700">Setu</span></h1>
            <p className="hidden">Connecting citizens to the benfits they deserved</p>
        </div>
        <div className="hidden  sm:hidden md:gap-6 md:flex lg:gap-10">
          <Link className="font-medium text-md hover:text-green-600" href='/'>Home</Link>
          <Link className="font-medium text-md hover:text-green-600" href='/'>Explores Schemes</Link>
          <Link className="font-medium text-md hover:text-green-600" href='/about'>How It Works</Link>
          <Link className="font-medium text-md hover:text-green-600" href='/about'>About</Link>
        </div>

        <div className="hidden  sm:flex sm:gap-5 md:hidden lg:gap-20">
          <Link className="font-medium text-md hover:text-green-600" href='/'>Home</Link>
          <Link className="font-medium text-md hover:text-green-600" href='/'>Explores Schemes</Link>
          <Link className="font-medium text-md hover:text-green-600" href='/about'>About</Link>
        </div>
        <div className="hidden sm:flex sm:gap-2">
          <button className="border px-2 rounded-lg ">Login</button>
          <button className="border bg-green-700 text-white px-2 rounded-lg py-1.5">Get Started</button>
        </div>
        <div className="sm:hidden">
            <Menu />
        </div>
    </div>
  )
}

export default Navbar