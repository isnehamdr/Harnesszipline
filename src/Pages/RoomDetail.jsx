import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import roomsData from '../data/roodata.json'

gsap.registerPlugin(ScrollTrigger)

const getRoomBySlug = (slug) => roomsData.rooms.find((room) => room.slug === slug) || roomsData.rooms[0]

const StatPill = ({ label, value }) => (
  <div className="min-w-[150px] flex-1 border border-stone-200/80 bg-white/90 px-5 py-4 text-center shadow-sm">
    <p className="text-[11px] uppercase tracking-[0.24em] text-stone-400">{label}</p>
    <p className="mt-2 text-lg font-bold text-[#FAA821] sm:text-xl">{value}</p>
  </div>
)

const AmenityBadge = ({ icon, label }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#FAA821]/40">
    <span className="text-lg">{icon}</span>
    <span className="text-sm text-stone-600">{label}</span>
  </div>
)

const RoomDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const room = getRoomBySlug(slug)

  const [activeImg, setActiveImg] = useState(0)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)

  const heroTextRef = useRef(null)
  const contentRef = useRef(null)
  const amenitiesRef = useRef(null)
  const relatedRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImg(0)
    setGuests(1)
  }, [slug])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      )

      if (amenitiesRef.current?.children?.length) {
        gsap.fromTo(
          amenitiesRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: amenitiesRef.current,
              start: 'top 82%',
            },
          }
        )
      }

      if (relatedRef.current?.children?.length) {
        gsap.fromTo(
          relatedRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: relatedRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [slug])

  if (!room) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center text-stone-500">
        <div>
          <p className="text-xl">Room not found.</p>
          <button onClick={() => navigate('/rooms')} className="mt-4 text-[#FAA821] underline">
            Back to rooms
          </button>
        </div>
      </div>
    )
  }

  const heroImage = room.images[0]?.url
  const capacityLimit = Number.parseInt(room.capacity, 10) || 1

  return (
    <div className="overflow-x-hidden bg-[#f7f4ee]">
      <section className="relative min-h-[82vh] overflow-hidden">
        <img src={heroImage} alt={room.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/80" />

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-between px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pb-20">
          <div className="flex items-start justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/80 transition hover:text-white"
            >
              <span className="text-lg leading-none">&lt;</span>
              Back
            </button>

            <div className="rounded-full bg-[#FAA821] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white">
              {room.tagline}
            </div>
          </div>

          <div ref={heroTextRef} className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FAA821]">Accommodation</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {room.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {room.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                {room.capacity}
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                {room.size}
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                {room.beds}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 px-4 pb-14 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 rounded-[2rem] bg-white/85 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-5">
          <StatPill label="Capacity" value={room.capacity} />
          <StatPill label="Villa Size" value={room.size} />
          <StatPill label="Beds" value={room.beds} />
          <StatPill label="Starting From" value={room.price} />
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-6 sm:pb-24 lg:px-10">
        <div className="absolute right-0 top-0 h-72 w-72 opacity-15 sm:h-96 sm:w-96">
          <img src="/images/sketch.png" alt="" className="h-full w-full object-contain" />
        </div>

        <div
          ref={contentRef}
          className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
        >
          <div className="rounded-[2rem] bg-white p-5 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={room.images[activeImg].url}
                alt={room.images[activeImg].alt}
                className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[460px]"
              />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {room.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImg(index)}
                  className={`min-w-[86px] overflow-hidden rounded-2xl border transition ${
                    activeImg === index
                      ? 'border-[#FAA821] ring-2 ring-[#FAA821]/30'
                      : 'border-stone-200 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={image.url} alt={image.alt} className="h-20 w-24 object-cover sm:h-24 sm:w-28" />
                </button>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">About This Room</p>
              <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">{room.subtitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">{room.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-500 sm:text-base">{room.longDescription}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] bg-[#1f1c18] p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:p-8 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">Reserve Your Stay</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-3xl font-bold sm:text-4xl">{room.price}</span>
                <span className="pb-1 text-sm text-white/60">{room.priceUnit}</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/55">Check-In</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(event) => setCheckIn(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#FAA821]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/55">Check-Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(event) => setCheckOut(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#FAA821]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[11px] uppercase tracking-[0.24em] text-white/55">Guests</label>
                <div className="flex w-fit items-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="px-4 py-2.5 text-lg text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    -
                  </button>
                  <span className="min-w-[54px] px-4 py-2.5 text-center text-sm font-semibold text-white">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(capacityLimit, guests + 1))}
                    className="px-4 py-2.5 text-lg text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#FAA821] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#e8960f]"
                >
                  Book Now
                </Link>
                <a
                  href="tel:067422112"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
                >
                  Call Reservation Desk
                </a>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-white/50">
                Free cancellation up to 48 hours before arrival, subject to availability and confirmation.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">Included</p>
              <h3 className="mt-3 text-2xl font-bold text-stone-900">Amenities & Features</h3>
              <div ref={amenitiesRef} className="mt-6 grid gap-3 sm:grid-cols-2">
                {room.amenities.map((amenity, index) => (
                  <AmenityBadge key={`${amenity.label}-${index}`} icon={amenity.icon} label={amenity.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-100/80 px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">Explore More</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">Other Accommodations</h2>
          </div>

          <div ref={relatedRef} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {roomsData.rooms
              .filter((relatedRoom) => relatedRoom.slug !== room.slug)
              .slice(0, 3)
              .map((relatedRoom) => (
                <Link
                  key={relatedRoom.id}
                  to={`/rooms/${relatedRoom.slug}`}
                  className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={relatedRoom.images[0].url}
                      alt={relatedRoom.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAA821]">{relatedRoom.tagline}</p>
                      <h3 className="mt-2 text-xl font-bold text-white">{relatedRoom.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{relatedRoom.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoomDetail
