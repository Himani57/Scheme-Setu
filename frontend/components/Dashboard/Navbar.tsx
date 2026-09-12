import Image from 'next/image';
import React from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="h-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
                <RiArrowLeftSLine />
            </span>
            <h1 className="font-bold text-md">Scheme<span>Setu</span></h1>
        </div>
        
        <div>
            <Image src="/open.png" alt="" width={20} height={20}></Image>
        </div>
        
    </header>
  )
}

export default Navbar