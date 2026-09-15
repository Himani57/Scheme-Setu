import React from 'react'
import { FaRupeeSign, FaUniversity, FaUsers } from 'react-icons/fa'

const stats = [
    {
        icon: <FaRupeeSign className="text-emerald-600" size={16} />,
        title: '6,000 per year',
        subtitle: '(per eligible farmer)',
    },
    {
        icon: <FaUniversity className="text-emerald-600" size={16} />,
        title: 'Direct bank',
        subtitle: 'transfer',
    },
    {
        icon: <FaUsers className="text-emerald-600" size={16} />,
        title: 'For small &',
        subtitle: 'marginal farmers',
    },
]

const SchemeStats = () => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-white border border-slate-100 rounded-2xl px-3 py-4 mt-3">
        {stats.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
                <div className="mt-0.5">{item.icon}</div>
                <div className="leading-tight">
                    <p className="text-sm font-medium text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.subtitle}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SchemeStats