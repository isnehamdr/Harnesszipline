import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const heroRef = useRef(null)
    const textRef = useRef(null)
    const aboutRef = useRef(null)
    const maskRef = useRef(null)
    const aboutContentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── Hero entrance animation ──────────────────────────────
            gsap.fromTo(
                textRef.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
            )

            // ── About section: scroll-over the hero ─────────────────
            gsap.fromTo(
                aboutRef.current,
                { yPercent: 100 },
                {
                    yPercent: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 0.8,
                        pin: heroRef.current,
                        pinSpacing: true,
                    },
                }
            )

            // ── Mask SVG scales up and fades with improved animation ──
            gsap.fromTo(
                maskRef.current,
                { scale: 1, opacity: 0, rotateZ: -5 },
                {
                    scale: 1,
                    opacity: 1,
                    rotateZ: 0,
                    duration: 1.5,
                    ease: 'back.out(0.5)',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top center',
                        end: 'bottom top',
                        scrub: 1.2,
                    },
                }
            )

            // ── About content with bounce/stagger effect ─────────────
            gsap.fromTo(
                aboutContentRef.current.children,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'elastic.out(0.6, 0.5)',
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: 'top 60%',
                        end: 'top 30%',
                        scrub: 0.5,
                    },
                }
            )
        })

        return () => ctx.revert()
    }, [])

    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <div
                ref={heroRef}
                className="relative bg-white w-full h-screen overflow-hidden"
                style={{ zIndex: 1 }}
            >
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/images/main.mp4" type="video/mp4" />
                    <img
                        src="/images/hero-fallback.jpg"
                        alt="Adventure Resort"
                        className="w-full h-full object-cover"
                    />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* Hero Text */}
                <div className="relative z-20 w-full h-full flex flex-col justify-end items-center pb-10 lg:pb-20">
                    <div ref={textRef} className="text-center px-4">
                        <h1 className="text-white max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                            Harness Zipline and Adventure Resort!
                        </h1>
                    </div>
                </div>

                {/* Gold Divider */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-16 h-px bg-[#FAA821] z-20" />

                {/* ── ABOUT — slides up over the hero on scroll ── */}
                <div
                    ref={aboutRef}
                    className="absolute left-0 right-0 bottom-0 z-30 overflow-hidden min-h-[70vh] sm:min-h-[105vh]"
                    style={{ top: 'auto' }}
                >
                    {/* Mask SVG as full background */}
                    <div
                        ref={maskRef}
                        className="absolute inset-0 w-full h-full"
                        style={{ transformOrigin: 'center center' }}
                    >
                        <img
                            src="/images/mask.svg"
                            alt=""
                            className="w-full h-full object-cover object-top invert"
                        />
                    </div>

                    {/* Top Right Image */}
                    <div className="absolute top-24 right-4 z-20">
                        <img
                            src="/images/bg.png"
                            alt="Top right decoration"
                            className="w-26 h-26 lg:w-56 lg:h-56 object-contain"
                        />
                    </div>

                    {/* About content — centred on top of the mask */}
                    <div
                        ref={aboutContentRef}
                        className="relative z-10 w-full mt-24 sm:mt-42 h-full  flex flex-col items-center justify-center px-6 text-center"
                    >
                        {/* Container for staggered children */}
                        <div className="flex flex-col items-center pt-32">
                            {/* Gold rule above */}
                            <div className="w-10 h-px bg-[#FAA821] mb-4" />

                            <button
                                className="text-white px-8 py-2 mb-3 text-sm uppercase tracking-widest font-semibold transition-colors duration-300"
                                style={{
                                    backgroundColor: "#FAA821",
                                    maskImage: "url('/images/logo.png')",
                                    WebkitMaskImage: "url('/images/logo.png')",
                                    maskSize: "contain",
                                    WebkitMaskSize: "cover",
                                    maskPosition: "center",
                                    WebkitMaskPosition: "center",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskRepeat: "no-repeat",
                                }}
                            >
                                <h3>About us</h3>
                            </button>

                            <h2 className="text-[#faa821] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight mb-4 drop-shadow-2xl">
                                Where Adventure Meets Nature
                            </h2>

                            <p className="text-black/90 text-lg sm:text-xl tracking-wide max-w-xl leading-relaxed mb-6 drop-shadow-lg">
                                Founded with a vision to create unforgettable experiences, our resort has evolved into a sanctuary for those who crave both excitement and serenity. Guests can soar through the treetops on exhilarating ziplines or unwind while enjoying the tranquil beauty of nature.

                                We take pride in offering Nepal's first-ever igloo rooms, providing a lavish escape that seamlessly integrates adventure with modern comforts.
                            </p>

                            {/* CTA */}
                            <button className="relative px-8 py-2.5 text-sm font-semibold uppercase tracking-widest border border-[#FAA821] text-[#FAA821] overflow-hidden group transition-all duration-300 hover:shadow-lg">
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                    Discover More
                                </span>
                                <span className="absolute inset-0 bg-[#FAA821] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </button>

                            {/* Gold rule below */}
                            <div className="w-10 h-px bg-[#FAA821] mt-6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero