import React from 'react'
import Image from 'next/image'
import { FaLeaf } from 'react-icons/fa'
import { FiBookmark } from 'react-icons/fi'

const SchemeHero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100">
        <div className="flex items-start gap-3 p-4 pb-3">
            <div className="w-14 h-14 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
                <FaLeaf size={22} className="text-emerald-600" />
            </div>

            <div className="flex-1">
                <span className="inline-block text-xs font-medium text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    Agriculture
                </span>
                <h2 className="text-xl font-bold text-slate-800 mt-1">
                    PM Kisan Samman Nidhi
                </h2>
                <p className="text-sm text-slate-500 mt-1 leading-snug">
                    Financial support to farmers across India for their agricultural needs.
                </p>
            </div>

            <button className="text-slate-600 hover:text-emerald-600 transition-colors">
                <FiBookmark size={20} />
            </button>
        </div>

        <div className="relative w-full h-36">
            <Image
                src="/scheme-images/pm-kisan.jpg"
                alt="Farmer in field"
                fill
                className="object-cover"
            />
        </div>
    </div>
  )
}

export default SchemeHero