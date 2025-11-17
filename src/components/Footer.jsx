import React from 'react'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <Newsletter />
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-4 gap-8 text-sm text-gray-600">
        <div className="md:col-span-2">
          <h4 className="text-gray-900 font-semibold">BrightSmile</h4>
          <p className="mt-3 max-w-md">Premium whitening care without the dentist price tag. Gentle, effective, and made for daily confidence.</p>
        </div>
        <div>
          <h5 className="text-gray-900 font-semibold">Support</h5>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-gray-900" href="#">Help Center</a></li>
            <li><a className="hover:text-gray-900" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-gray-900" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-gray-900 font-semibold">Company</h5>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-gray-900" href="#">About</a></li>
            <li><a className="hover:text-gray-900" href="#">Reviews</a></li>
            <li><a className="hover:text-gray-900" href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} BrightSmile. All rights reserved.</div>
    </footer>
  )
}
