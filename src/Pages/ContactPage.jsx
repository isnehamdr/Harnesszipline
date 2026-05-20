import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactCards = [
  {
    title: 'Visit Us',
    value: 'Kusma, Nepal, 33400',
    description: 'A scenic destination for stays, dining, and memorable events.',
  },
  {
    title: 'Call Us',
    value: '067-422112',
    description: 'Reach out for reservations, event planning, or quick inquiries.',
  },
  {
    title: 'Email Us',
    value: 'theharnessnepal@gmail.com',
    description: 'Share your travel dates, event ideas, or special requirements.',
  },
]

const ContactPage = () => {
  const heroTextRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      if (contentRef.current?.children?.length) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-x-hidden bg-[#f8f5ef]">
      <section className="relative min-h-[72vh] overflow-hidden">
        <img
          src="/images/DSC01949.jpeg"
          alt="Contact Harness"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/80" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pb-20">
          <div ref={heroTextRef} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#FAA821]">Contact</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s plan your stay, event, or next experience
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Whether you are booking a room, organizing a celebration, or just exploring what Harness offers, we are here to help you get started.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="absolute left-0 top-10 h-64 w-64 opacity-10 sm:h-80 sm:w-80">
          <img src="/images/bg5.png" alt="" className="h-full w-full object-contain" />
        </div>

        <div ref={contentRef} className="relative z-10 mx-auto max-w-7xl space-y-10">
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FAA821]">{card.title}</p>
                <h2 className="mt-4 text-xl font-bold leading-snug text-stone-900">{card.value}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FAA821]">Send An Inquiry</p>
              <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">
                Tell us what you&apos;re planning
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-500 sm:text-base">
                Share your dates, group size, or event idea and we&apos;ll help guide you to the best option at Harness.
              </p>

              <form
                className="mt-8 grid gap-4 sm:grid-cols-2"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#FAA821]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#FAA821]"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#FAA821]"
                />
                <select className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#FAA821]">
                  <option>Room Booking</option>
                  <option>Dining Reservation</option>
                  <option>Wedding or Celebration</option>
                  <option>Conference or Retreat</option>
                  <option>General Inquiry</option>
                </select>
                <input
                  type="date"
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#FAA821]"
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Guests"
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 outline-none transition focus:border-[#FAA821]"
                />
                <textarea
                  rows="5"
                  placeholder="Tell us a little more about your plans"
                  className="rounded-3xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm text-stone-700 outline-none transition focus:border-[#FAA821] sm:col-span-2"
                />
                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                  <a
                    href="mailto:theharnessnepal@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-[#FAA821] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#e8960f]"
                  >
                    Email Us Directly
                  </a>
                  <a
                    href="tel:067422112"
                    className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-stone-800 transition hover:border-[#FAA821] hover:text-[#FAA821]"
                  >
                    Call Now
                  </a>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                <img
                  src="/images/DSC01847.jpeg"
                  alt="Harness property"
                  className="h-[260px] w-full object-cover sm:h-[320px]"
                />
              </div>

              <div className="rounded-[2rem] bg-[#1f1c18] p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FAA821]">Why Reach Out</p>
                <h3 className="mt-3 text-2xl font-bold">We can help with more than just a room</h3>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/75">
                  <p>Ask about accommodation, dining, destination events, team gatherings, or activity planning.</p>
                  <p>We&apos;ll help you match your visit with the right space, timing, and experience.</p>
                  <p>Harness is best enjoyed when the stay, scenery, and service all work together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
