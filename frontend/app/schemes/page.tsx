import React from 'react'
import Navbar from '@/components/Dashboard/Navbar';
import Header from '@/components/Scheme/Header';
import SeachCategories from '@/components/Scheme/SeachCategories';
import SchemeCard from '@/components/Scheme/SchemeCard';
import Sidebar from '@/components/Dashboard/Sidebar';

const page = () => {
  return (
    <div className="h-screen p-4 lg:gap-2 sm:pl-4 lg:flex w-full">
        <div className="hidden lg:flex lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[23%] ">
            <Sidebar />
        </div>
        <div className="lg:ml-[24%] w-full">
          <Navbar />
        <Header />
        <SeachCategories />
        <SchemeCard />
        </div>
    </div>
  )
}

export default page