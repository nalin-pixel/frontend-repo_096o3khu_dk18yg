import React from 'react'

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-700">
            New • Dentist-approved
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Whiter teeth in 14 days. Zero sensitivity.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Enamel-safe whitening strips that hug every curve of your smile. Clinically proven results, gentle enough for daily use.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={onShopClick} className="rounded-full bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition">
              Shop Whitening Strips
            </button>
            <a href="#how" className="text-blue-700 font-semibold hover:underline">How it works</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2"><span className="text-2xl">⭐️⭐️⭐️⭐️⭐️</span><span>4.9/5 by 2,300+ shoppers</span></div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&q=80&auto=format&fit=crop" alt="Smile" className="rounded-3xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
            <p className="text-sm text-gray-700">Vegan • Peroxide-free • Enamel-safe</p>
          </div>
        </div>
      </div>
    </section>
  )
}
