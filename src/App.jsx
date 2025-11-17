import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const scrollToShop = () => {
    const el = document.getElementById('shop')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-lg font-extrabold tracking-tight">BrightSmile</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#shop" className="hover:text-gray-900">Shop</a>
            <a href="/test" className="hover:text-gray-900">System Check</a>
          </nav>
          <button className="rounded-md bg-black px-4 py-2 text-white text-sm font-semibold">Buy now</button>
        </div>
      </header>

      <main>
        <Hero onShopClick={scrollToShop} />
        <Features />
        <div id="shop">
          <ProductShowcase />
        </div>
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App
