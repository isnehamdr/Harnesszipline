import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getServiceBySlug, servicesData } from '../data/servicesData'

gsap.registerPlugin(ScrollTrigger)

const HighlightBadge = ({ text }) => (
  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
    {text}
  </div>
)

const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
    <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FAA821]" />
    <p className="text-sm leading-relaxed text-stone-600">{text}</p>
  </div>
)

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = getServiceBySlug(slug)

  const [activeImage, setActiveImage] = useState(0)

  const heroTextRef = useRef(null)
  const introRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImage(0)
  }, [slug])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
          },
        }
      )

      if (featuresRef.current?.children?.length) {
        gsap.fromTo(
          featuresRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 80%',
            },
          }
        )
      }

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [slug])

  return (
    <div className="overflow-x-hidden bg-[#f8f6f1]">
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/80" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pb-20">
          <button
            onClick={() => navigate(-1)}
            className="mb-10 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/80 transition hover:text-white"
          >
            <span className="text-lg leading-none">&lt;</span>
            Back
          </button>

          <div ref={heroTextRef} className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FAA821]">
              {service.eyebrow}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {service.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {service.highlights.map((item) => (
                <HighlightBadge key={item} text={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute right-0 top-0 h-72 w-72 opacity-15 sm:h-96 sm:w-96">
          <img src="/images/sketch.png" alt="" className="h-full w-full object-contain" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div
            ref={introRef}
            className="grid items-start gap-10 rounded-[2rem] bg-white/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">
                Overview
              </p>
              <h2 className="text-2xl font-bold leading-tight text-stone-900 sm:text-3xl">
                Crafted to make the experience feel special from arrival to farewell
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:text-base">
                {service.intro}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-500 sm:text-base">
                {service.description}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-500 sm:text-base">
                {service.longDescription}
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={service.gallery[activeImage]}
                  alt={service.title}
                  className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {service.gallery.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-2xl border transition ${
                      activeImage === index
                        ? 'border-[#FAA821] ring-2 ring-[#FAA821]/30'
                        : 'border-stone-200 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={image} alt={`${service.title} ${index + 1}`} className="h-20 w-full object-cover sm:h-24" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">
                What You Can Expect
              </p>
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Thoughtful spaces, warm hospitality, and a memorable setting
              </h2>
              <div ref={featuresRef} className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <FeatureItem key={feature} text={feature} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#1e1c18] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.15)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">
                Plan Your Visit
              </p>
              <h3 className="mt-3 text-2xl font-bold">Let us help you organize the experience</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Reach out for availability, private arrangements, event coordination, or group planning. We will help you choose the right setup for your visit.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/85">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAA821]">Phone</p>
                  <p className="mt-2 text-base">067-422112</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAA821]">Email</p>
                  <p className="mt-2 break-all text-base">theharnessnepal@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#FAA821] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#e8960f]"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="border-t border-stone-200 bg-stone-100/80 px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FAA821]">More Experiences</p>
            <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">Explore More At Harness</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesData
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAA821]">{item.eyebrow}</p>
                      <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
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

export default ServiceDetail
