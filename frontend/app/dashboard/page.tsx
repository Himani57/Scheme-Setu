import Navbar from '@/components/Dashboard/Navbar';
import MobileMenu from '@/components/Dashboard/MobileMenu';
import Form from '@/components/Dashboard/Form';
import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'
import XlNavbar from '@/components/Dashboard/XlNavabr';

const Dashboard = () => {
  return (
    <div className="h-screen w-full sm:mx-auto lg:w-full p-2 sm:w-[70%] ">
        <div className="h-full lg:flex xl:gap-2.5 lg:gap-1">
          <div className="hidden lg:flex xl:w-[20%] lg:w-[25%]">
            <Sidebar />
          </div>
          <div className="lg:flex-1">
            <div className="hidden xl:flex xl:flex-col">
              <XlNavbar />
            </div>
            <div className="lg:hidden xl:hidden">
              <Navbar />
            </div>
            <MobileMenu />
            <Form />
          </div>
        </div>
    </div>
  )
}

export default Dashboard



// Prefix	Min-width (px)	Min-width (rem)
// sm:	640px	40rem
// md:	768px	48rem
// lg:	1024px	64rem
// xl:	1280px	80rem
// 2xl:	1536px	96rem