import React from 'react'
import { FiFileText } from 'react-icons/fi'

const AboutScheme = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 mt-3">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-emerald-100">
                <FiFileText className="text-emerald-600" size={18} />
            </div>
            <h3 className="font-bold text-slate-800">About the Scheme</h3>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
            PM Kisan Samman Nidhi is a central sector scheme launched by the Government of India to provide
            financial assistance to small and marginal farmers. Under this scheme, eligible farmers receive
            ₹6,000 per year in three equal installments directly into their bank accounts.
        </p>
    </div>
  )
}

export default AboutScheme