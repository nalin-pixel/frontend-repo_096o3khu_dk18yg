import React from 'react'

const features = [
  { title: "Enamel-safe formula", desc: "Whitening powered by dentist-approved ingredients that protect your enamel.", icon: "🦷" },
  { title: "Zero sensitivity", desc: "Gentle on teeth and gums so you can whiten comfortably.", icon: "💤" },
  { title: "Visible in 14 days", desc: "Noticeably brighter results with a simple daily routine.", icon: "✨" },
]

export default function Features() {
  return (
    <section id="how" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border p-6">
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
