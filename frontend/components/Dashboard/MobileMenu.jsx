import React from 'react'

const MobileMenu = () => {
  return (
    <section className="rounded-2xl xl:h-38 bg-gradient-to-br mt-2 from-[#E7F3EC] to-[#DDF0E6] px-5 py-5 sm:px-6 lg:px-8 mb-3.5 relative overflow-hidden">
      <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-white/70 rounded-full px-3 py-1 mb-3">
        Step 1 of 1
      </span>
      <h1 className="text-2xl xl:text-3xl font-bold text-[#0F3D2E] leading-snug mb-1">
        Complete Your <span className="text-emerald-600">Profile</span>
      </h1>
      <p className="text-sm text-[#3D5148] leading-relaxed pr-10">
        Help us understand you better so we can show you the most
        relevant government schemes and personalized recommendations.
      </p>
    </section>
  )
}

export default MobileMenu;