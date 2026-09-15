import React from 'react'
import { FiFile } from 'react-icons/fi'

const documents = [
    'Aadhaar Card',
    'Land ownership documents (Khasra / Khatauni)',
    'Bank account details (linked with Aadhaar)',
    'Mobile number (linked with Aadhaar)',
]

const RequiredDocuments = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 mt-3">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-violet-100">
                <FiFile className="text-violet-600" size={18} />
            </div>
            <h3 className="font-bold text-slate-800">Required Documents</h3>
        </div>

        <ul className="space-y-2.5">
            {documents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RequiredDocuments