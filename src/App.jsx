import { useEffect, useLayoutEffect } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import Lenis from '@studio-freight/lenis'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './Component/Footer'
import BackToTop from './Component/BackToTop'
import RoomPage from './Pages/RoomPage'
import ActivityPage from './Pages/ActivityPage'
import ServicePage from './Pages/ServicePage'
import ServiceDetail from './Pages/ServiceDetail'
import Blog from './Pages/Blog'
import GalleryPage from './Pages/GallerPage'
import RoomDetail from './Pages/RoomDetail'
import ContactPage from './Pages/ContactPage'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const RouteLifecycle = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [location.pathname])

  return null
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })
    let rafId = 0

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <RouteLifecycle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<RoomPage />} />
        {/* ✅ Fixed: Changed from /roomdetail/:slug to /rooms/:slug */}
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  )
}

export default App
