'use client'
import React, { useState } from 'react'

const tabs = ['Overview', 'Benefits', 'Eligibility', 'Documents', 'How to Apply']

const SchemeTabs = () => {
    const [active, setActive] = useState('Overview')

  return (
    <div className="flex w-full justify-between items-center gap-1 no-scrollbar mt-4 pb-1">
        {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`whitespace-nowrap px-2 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active === tab
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-slate-600 border-slate-200'
                }`}
            >
                {tab}
            </button>
        ))}
    </div>
  )
}

export default SchemeTabs