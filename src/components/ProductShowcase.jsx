import React, { useEffect, useState } from 'react'

export default function ProductShowcase() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const BASE = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BASE}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProduct(data[0])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <section className="py-16 text-center">Loading…</section>
  if (error) return <section className="py-16 text-center text-red-600">{error}</section>
  if (!product) return null

  const discount = product.compare_at_price && product.compare_at_price > product.price
  const savings = discount ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100) : 0

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <img src={product.image} alt={product.title} className="rounded-3xl shadow-2xl" />
          <div className="grid grid-cols-3 gap-3">
            {product.gallery?.map((g, i) => (
              <img key={i} src={g} className="rounded-xl border" />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{product.title}</h2>
          {product.subtitle && <p className="mt-2 text-lg text-gray-600">{product.subtitle}</p>}
          <div className="mt-4 flex items-center gap-3">
            <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
            {discount && (
              <>
                <div className="text-gray-400 line-through">${product.compare_at_price.toFixed(2)}</div>
                <div className="text-green-600 font-semibold">Save {savings}%</div>
              </>
            )}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {product.badges?.map((b) => (
              <li key={b} className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm">{b}</li>
            ))}
          </ul>
          <p className="mt-6 text-gray-700 leading-7">{product.description}</p>
          <button className="mt-8 w-full rounded-full bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition">
            Add to cart
          </button>
          <p className="mt-3 text-center text-sm text-gray-500">Free shipping on orders over $40</p>
        </div>
      </div>
    </section>
  )
}
