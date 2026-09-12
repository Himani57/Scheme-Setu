import React from "react";

const working = [
  {
    id: 1,
    icon: "<FaRegCircleUser />",
    text: "Create Your Profile",
    para: "Tell us about youself-age,state,income,education and more.",
  },
  {
    id: 2,
    icon: "pfng",
    text: "Our AI Analyzes Your Eligibility",
    para: "We match your profile with relevant government schemes.",
  },
  {
    id: 3,
    icon: "pfng",
    text: "Get Personalized Recommendations",
    para: "Explore schemes,check eligibility, and apply with ease.",
  },
];

const Detail = () => {
  return (
    <div className="lg:p-4 mt-5">
      <h1 className="text-2xl lg:text-3xl font-bold text-blue-900">How It Works</h1>
      <p className="text-sm text-gray-600 mb-5">Get started in just a few steps and find schemes that are right for you.</p>
      <div className="flex flex-col lg:w-lg gap-4">
        {working.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-4 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-10 w-10 shrink-0 border-2 border-blue-700 rounded-full flex items-center justify-center font-bold text-blue-700">
              {item.id}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-gray-900">{item.text}</h3>
              <p className="text-sm font-light text-gray-600">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
