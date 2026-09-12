'use client'
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react'

const items = [
  {id:1, title:"Home", url:"/"},
  {id:2, title:"Explore Schemes", url:"/"},
  {id:3, title:"How it Works", url:"/how"},
  {id:4, title:"About", url:"/"},
  {id:5, title: "Login", url:"/login"}
]

const Menu = () => {
  const[open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image src='/open.png' alt="" height={20} width={20} onClick={()=>setOpen(true)}></Image>
      ):(
        <Image src='/close.png' alt="" height={20} width={20} onClick={()=>setOpen(false)}></Image>
      )}


      {open && (
        <div className="h-[94vh] z-50 w-full left-0 top-12 absolute border flex flex-col justify-center gap-18 bg-fuchsia-50 items-center">
          {items.map(item=>(
            <Link className="text-black text-2xl px-3 py-1 hover:text-green-800" href={item.url} key={item.id}>{item.title}</Link>
          ))}
       </div>)}
    </div>
  )
}

export default Menu