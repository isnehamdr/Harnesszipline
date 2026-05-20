import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // ✅ Add for navigation
import roomsData from '../data/roodata.json' // ✅ Import from JSON

const Roomlayouts = () => {
  const navigate = useNavigate() // ✅ Hook for programmatic navigation

  const [sliderStates, setSliderStates] = useState(() => {
    const initialState = {}
    roomsData.rooms.forEach(room => { initialState[room.id] = 0 })
    return initialState
  })

  const nextSlide = (roomId, imagesLength) => {
    setSliderStates(prev => ({ ...prev, [roomId]: (prev[roomId] + 1) % imagesLength }))
  }

  const prevSlide = (roomId, imagesLength) => {
    setSliderStates(prev => ({ ...prev, [roomId]: (prev[roomId] - 1 + imagesLength) % imagesLength }))
  }

  const carouselMaskStyle = {
    WebkitMaskImage: `url('/images/mask4.svg')`,
    maskImage: `url('/images/mask4.svg')`,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  }

  const villaCardMaskStyle = {
    WebkitMaskImage: `url('/images/bg1.png')`,
    maskImage: `url('/images/bg1.png')`,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  }

  // ── Carousel Slider ───────────────────────────────────────────
  const CarouselSlider = ({ room }) => {
    const currentImage = room.images[sliderStates[room.id]]

    return (
      <div className="relative w-full overflow-hidden" style={{ minHeight: 'clamp(280px, 55vw, 900px)' }}>
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={carouselMaskStyle}
        />
        <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: 'rgba(0,0,0,0.4)', ...carouselMaskStyle }} />

        {/* Left Arrow */}
        <button
          onClick={() => prevSlide(room.id, room.images.length)}
          className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FAA821] group"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => nextSlide(room.id, room.images.length)}
          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FAA821] group"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    )
  }

  // ── Villa Card ────────────────────────────────────────────────
  const VillaCard = ({ room }) => {
    const imageUrl = room.images[0]?.url || ''

    // ✅ Fixed: Use navigate instead of href for SPA routing
    const handleExplore = (e) => {
      e.preventDefault()
      navigate(`/rooms/${room.slug}`)
    }

    return (
      <div className="flex flex-col md:flex-row items-stretch py-8 sm:py-10 md:pb-14 gap-6 md:gap-0 px-4 sm:px-6 lg:px-0 -mt-24">
        {/* Photo column */}
        <div className={`w-full md:w-[44%] flex-shrink-0 ${room.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
          <button onClick={handleExplore} className="block w-full text-left">
            <div className="relative w-full group" style={{ aspectRatio: '4/3' }}>
              <img
                src={imageUrl}
                alt={room.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={villaCardMaskStyle}
              />
              <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300 group-hover:bg-black/20" style={{ backgroundColor: 'rgba(0,0,0,0.15)', ...villaCardMaskStyle }} />
            </div>
          </button>
        </div>

        {/* Text column */}
        <div className={`relative flex-1 flex flex-col justify-center min-h-[200px] sm:min-h-[220px] px-4 sm:px-6 md:px-10 lg:px-14 py-6 ${room.imageLeft ? 'md:order-2 items-start text-left' : 'md:order-1 items-end text-right'}`}>
          <div className="absolute bottom-0 inset-x-0 h-full pointer-events-none select-none" aria-hidden="true" style={{ backgroundImage: `url('${room.bgImage}')`, backgroundRepeat: 'no-repeat', backgroundPosition: room.imageLeft ? 'bottom right' : 'bottom left', backgroundSize: 'auto 60%', opacity: 0.85 }} />

          <div className="relative z-10">
            <div className={`mb-4 ${room.imageLeft ? '' : 'flex justify-end'}`}>
              <img src={room.icon} alt={room.iconAlt} className="h-8 sm:h-10 w-auto" />
            </div>

            <h3 className="text-[12px] sm:text-[13px] md:text-xl tracking-[0.25em] uppercase text-stone-800 mb-3 sm:mb-4 leading-snug font-semibold">
              {room.title}
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm md:text-2xl leading-relaxed font-normal max-w-2xl">
              {room.description}
            </p>

            <div className={`mt-4 sm:mt-5 ${room.imageLeft ? '' : 'flex justify-end'}`}>
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base tracking-[0.22em] uppercase font-semibold text-stone-600 border-b border-stone-400 pb-px hover:text-stone-900 hover:border-stone-700 transition-colors duration-200 group"
              >
                Explore
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-hidden">
      {roomsData.rooms.map((room) => (
        <React.Fragment key={room.id}>
          <CarouselSlider room={room} />
          <VillaCard room={room} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Roomlayouts