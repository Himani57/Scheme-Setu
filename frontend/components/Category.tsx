import React from 'react'
import { FaGraduationCap} from "react-icons/fa6";
import { MdAgriculture } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { GrRestroomWomen } from "react-icons/gr";



const categories = [
    {
        id:1,
        type : "Education",
        about : "Scholarships & Student Loans",
        icon : <FaGraduationCap/>
    },
    {
        id:2,
        type : "Agriculture",
        about : "Farmer Support & Crop Insurance",
        icon : <MdAgriculture />
    },
    {
        id:3,
        type : "Employment",
        about : "Jobs & Skill Development",
        icon : <IoBag />
    },
    {
        id:4,
        type : "Housing",
        about : "Affordable Housing Schemes",
        icon : <FaHouseChimney />
    },
    {
        id:5,
        type : "Women Empowerment",
        about : "Support & Welfare Schemes",
        icon : <GrRestroomWomen />
    },
]

const Category = () => {
  return (
    <div className="p-4 sm:px-10 min-[922px]:px-16 lg:px-13 xl:px-37 2xl:px-40">
        <h1 className="text-blue-900 text-2xl min-[922px]:text-3xl font-bold">
          Explore by Category
        </h1>
        <p className="text-sm text-gray-600">
          Find schemes that match your needs and goals.
        </p>
        <div className="flex flex-col min-[922px]:grid min-[922px]:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {categories.map(item => (
            <div
              key={item.id}
              className="border rounded-3xl p-4 flex items-center min-[922px]:flex-col min-[922px]:text-center gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="text-3xl lg:text-4xl bg-blue-100 text-blue-700 p-3 lg:p-4 rounded-2xl shrink-0">
                    {item.icon}
                </div>
                <div>
                    <h1 className="font-bold text-gray-900 lg:text-lg">{item.type}</h1>
                    <p className="text-sm text-gray-600">{item.about}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Category