import React from 'react'

const Footer = () => {
  return (
    <footer className="m-3 sm:mx-10 min-[922px]:mx-16 lg:mx-20 2xl:mx-40 text-white p-6 xl:px-36 sm:p-8 lg:p-10 mt-10 rounded-t-3xl">
      <div className="grid text-black grid-cols-2 min-[922px]:grid-cols-4 gap-6">
        <div className="col-span-2 min-[922px]:col-span-2 mb-2">
          <h2 className="text-xl lg:text-2xl font-bold">
            Scheme<span className="text-yellow-400">Setu</span>
          </h2>
          <p className="text-sm lg:text-base text-black mt-1 max-w-xs">
            Making government benefits easier to discover and access.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm lg:text-base text-black">Quick Links</h3>
          <a href="#" className="text-sm lg:text-base text-black hover:text-white transition-colors">Home</a>
          <a href="#" className="text-sm lg:text-base text-black hover:text-white transition-colors">Explore Schemes</a>
          <a href="#" className="text-sm lg:text-base text-black hover:text-white transition-colors">How It Works</a>
          <a href="#" className="text-sm lg:text-base text-black hover:text-white transition-colors">About Us</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm lg:text-base text-black">Resources</h3>
          <a href="#" className="text-sm lg:text-base text-black hover:text-white transition-colors">Eligibility Checker</a>
          <a href="#" className="text-sm lg:text-base text-black hover:text-white transition-colors">AI Assistant</a>
          <a href="#" className="text-sm lg:text-base text-black hover:text-white transition-colors">Contact</a>
        </div>
      </div>

      <hr className="text-black my-6" />

      <div className="text-center">
        <p className="text-xs lg:text-sm text-black">
          © 2026 SchemeSetu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;