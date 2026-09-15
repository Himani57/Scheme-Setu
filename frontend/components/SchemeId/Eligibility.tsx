import React from 'react'
import { FiUsers } from 'react-icons/fi'

const criteria = [
    'Must be a small or marginal farmer (landholding up to 2 hectares)',
    'Must have valid land records',
    'Must not be a government employee',
    'Income tax payers are not eligible',
]

const EligibilityCriteria = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 mt-3">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-sky-100">
                <FiUsers className="text-sky-600" size={18} />
            </div>
            <h3 className="font-bold text-slate-800">Eligibility Criteria</h3>
        </div>

        <ul className="space-y-2.5">
            {criteria.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default EligibilityCriteria