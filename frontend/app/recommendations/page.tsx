import React from 'react'
import Navbar from '@/components/Dashboard/Navbar';
import MobileMenu from '@/components/Recommendation/MobileMenu';
import Categories from '@/components/Recommendation/Categories';
import InfoBanner from '@/components/Recommendation/Infobanner';
import SchemeCard from '@/components/Recommendation/SchemeCard';
import Sidebar from '@/components/Dashboard/Sidebar';

const page = () => {
  return (
    <div className="h-screen sm:px-6 lg:flex w-full p-2">
        <div className="hidden lg:flex lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[20%]">
            <Sidebar />
        </div>
        <div className="flex-1 lg:ml-[20%]">
        <Navbar />
        <MobileMenu />
        <Categories />
        <InfoBanner />
        <SchemeCard />
        </div>
        
    </div>
  )
}

export default page