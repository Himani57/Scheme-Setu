import React from 'react'
import Menu from '@/components/Menu';

const Navbar = () => {
  return (
    <div className="h-12 border p-3 flex items-center justify-between">
        <div className="flex flex-col">
            <h1 className="font-bold text-md">Scheme<span className="text-green-700">Setu</span></h1>
            <p className="hidden">Connecting citizens to the benfits they deserved</p>
        </div>
        <div>
            <Menu />
        </div>
    </div>
  )
}

export default Navbar