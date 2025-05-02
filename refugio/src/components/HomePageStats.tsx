import React from 'react'

const HomePageStats = () => {
  return (
    <section className="px-6 max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {[
      { value: '4.1T', label: 'Latino GDP (2023)' },
      { value: '19%', label: 'U.S. Workforce is Immigrant' },
      { value: '36%', label: 'Latinx in Farming Jobs' },
      { value: '48.4%', label: 'Latino Mfg. Growth' }
    ].map((stat, idx) => (
      <div key={idx} className="bg-white shadow rounded-lg py-6 px-4">
        <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
        <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
      </div>
    ))}
  </section>
  )
}

export default HomePageStats