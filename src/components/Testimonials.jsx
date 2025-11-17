import React from 'react'

const testimonials = [
  {
    name: 'Ava',
    text: 'I saw a difference after the third day. No sensitivity at all!',
    rating: 5,
  },
  {
    name: 'Mia',
    text: 'So easy to use and my smile looks camera-ready.',
    rating: 5,
  },
  {
    name: 'Liam',
    text: 'Way better than trays. These actually stay put and work.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl font-bold text-gray-900">Loved by thousands</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border p-6">
              <div className="text-yellow-500">{'⭐'.repeat(t.rating)}</div>
              <p className="mt-3 text-gray-700">{t.text}</p>
              <p className="mt-4 text-sm text-gray-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
