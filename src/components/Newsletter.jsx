import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const BASE = import.meta.env.VITE_BACKEND_URL || ''

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${BASE}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' })
      })
      if (!res.ok) throw new Error('Failed to subscribe')
      setStatus('Thanks! Check your inbox for a welcome note.')
      setEmail('')
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <section className="bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Get 10% off your first order</h3>
          <p className="mt-2 text-blue-100">Join our list for deals, tips, and smile science.</p>
        </div>
        <form onSubmit={submit} className="bg-white rounded-full p-2 flex">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full outline-none" />
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold">Subscribe</button>
        </form>
        {status && <p className="md:col-span-2 text-white">{status}</p>}
      </div>
    </section>
  )
}
