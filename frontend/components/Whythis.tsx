import React from 'react'

const list = [
    {
        id:1,
        heading : "AI Powered",
        para : "Smart recommendations based on your profile."
    },
    {
        id:2,
        heading : "Personalized",
        para : "Find schemes specifically relevant to you."
    },
    {
        id:3,
        heading : "Simple Information",
        para : "Understand complex schemes in simple language."
    },
    {
        id:4,
        heading : "Official Links",
        para : "Direct access to official application portals."
    }
]

const Whythis = () => {
  return (
    <section className="p-3 sm:px-10 min-[922px]:px-16 xl:px-37 lg:px-20 2xl:px-40 mt-8">
      <div className="text-center mb-8">
        <p className="text-blue-700 font-semibold text-sm tracking-wide">
          WHY CHOOSE US
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mt-1">
          Why SchemeSetu?
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-md mx-auto">
          We make government benefits easier to discover, understand and access.
        </p>
      </div>

      <div className="grid grid-cols-2 min-[922px]:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map(item => (
          <article
            key={item.id}
            className="border rounded-2xl p-4 lg:p-6 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-gray-900 lg:text-lg">{item.heading}</h3>
            <p className="text-sm text-gray-600">{item.para}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Whythis