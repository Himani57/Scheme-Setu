import React from 'react'
import { BsDiagram3 } from 'react-icons/bs'

const steps = [
    'Visit the official PM Kisan website (pmkisan.gov.in)',
    'Click on "New Farmer Registration"',
    'Fill in the required details and upload documents',
    'Submit the form and note down the registration number',
]

const HowToApply = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 mt-3">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-100">
                <BsDiagram3 className="text-amber-600" size={18} />
            </div>
            <h3 className="font-bold text-slate-800">How to Apply</h3>
        </div>

        <ol className="space-y-3">
            {steps.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-5 h-5 shrink-0 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center mt-0.5">
                        {idx + 1}
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default HowToApply