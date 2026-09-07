import React from 'react'

const Final = () => {
  return (
    <section className="p-6 sm:p-10 min-[922px]:p-14 lg:p-16 m-3 sm:mx-10 min-[922px]:mx-16 lg:mx-20 2xl:mx-40 mt-10 mb-6 bg-blue-900 rounded-3xl text-center flex flex-col items-center gap-3">
      <p className="text-blue-200 font-semibold text-sm tracking-wide">
        GET STARTED TODAY
      </p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
        Discover Benefits <span className="text-yellow-400">You Deserve.</span>
      </h2>
      <p className="text-sm sm:text-base text-blue-100 max-w-xs sm:max-w-md">
        Create your profile and find government schemes tailored to your needs.
      </p>
      <button className="bg-white text-blue-900 font-semibold px-6 py-3 sm:px-8 sm:py-4 sm:text-lg rounded-full mt-2 hover:bg-blue-50 transition-colors">
        Get Started Free →
      </button>
    </section>
  )
}

export default Final