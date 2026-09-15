import React from 'react'
import { FiGift, FiCheckCircle } from 'react-icons/fi'

const benefits = [
    'Financial assistance of ₹6,000 per year',
    'Direct transfer to bank account (DBT)',
    'Helps in meeting agricultural expenses',
    'Supports small and marginal farmers',
]

const KeyBenefits = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 mt-3">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-emerald-100">
                <FiGift className="text-emerald-600" size={18} />
            </div>
            <h3 className="font-bold text-slate-800">Key Benefits</h3>
        </div>

        <ul className="space-y-2.5">
            {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <FiCheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={16} />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default KeyBenefits