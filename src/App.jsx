import { useEffect } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Lenis from '@studio-freight/lenis'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer'
import BackToTop from './Component/BackToTop'
import AboutPage from './Pages/AboutPage'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<Home />} />
        <Route path="/activity" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/blog" element={<Home />} />
     

      </Routes>
      <BackToTop />
      <Footer />

    </Router>
  )
}

export default App