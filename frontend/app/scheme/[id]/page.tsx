import React from 'react'
import Navbar from '@/components/Dashboard/Navbar';
import MobileMenu from '@/components/Dashboard/MobileMenu';
import SchemeDetail from '@/components/SchemeId/SchemeDetail';
import SchemeTabs from '@/components/SchemeId/SchemeTabs';
import AboutScheme from '@/components/SchemeId/AboutScheme';
import Benefits from '@/components/SchemeId/Benefits';
import EligibilityCriteria from '@/components/SchemeId/Eligibility';
import RequiredDocuments from '@/components/SchemeId/RequiredDocument';
import HowToApply from '@/components/SchemeId/HowtoApply';
import Sidebar from '@/components/Dashboard/Sidebar';

const page = () => {
  return (
    <div className="h-screen sm:px-5 md:px-8 w-full p-2">
      <div className="hidden lg:fixed lg:flex xl:w-[17%] lg:top-0 lg:left-0 lg:w-[22%]">
        <Sidebar />
      </div>
      <div className="flex-1 w-full lg:w-[78%] xl:p-1 xl:ml-[18%] lg:ml-[22%]">
         <Navbar />
        <MobileMenu />
        <SchemeDetail />
        <SchemeTabs />
        <AboutScheme />
        <Benefits />
        <EligibilityCriteria />
        <RequiredDocuments />
        <HowToApply />
      </div>
       
    </div>
  )
}

export default page