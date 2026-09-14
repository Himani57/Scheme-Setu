import React from 'react'
import Navbar from '@/components/Dashboard/Navbar';
import Mobilemenu from '@/components/SavedScheme/Mobilemenu';
import Searchbar from '@/components/SavedScheme/Searchbar';
import Categories from '@/components/Recommendation/Categories';
import SchemeCard from '@/components/Recommendation/SchemeCard';
import Sidebar from '@/components/Dashboard/Sidebar';

const page = () => {
  return (
    <div className="h-screen sm:p-4 lg:p-2 lg:flex lg:gap-3 md:px-15 w-full p-2">
        <div className="hidden lg:fixed lg:flex xl:w-[17%] lg:top-0 lg:left-0 lg:w-[22%]">
            <Sidebar />
        </div>
        <div className="flex-1 w-full lg:w-[78%] xl:p-1 xl:ml-[18%] lg:ml-[22%]">
            <Navbar />
        <Mobilemenu />
        <Searchbar />
        <Categories />
        <SchemeCard />
        </div>
        
    </div>
  )
}

export default page
