import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { servicesData } from '../data/servicesData'

gsap.registerPlugin(ScrollTrigger)

const ServicePage = () => {
    const heroRef = useRef(null)
    const textRef = useRef(null)
    const contentSectionRef = useRef(null)
    const maskRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── Hero entrance animation ──────────────────────────────
            gsap.fromTo(
                textRef.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
            )

            // ── Content section: scroll-over the hero ───────────────
            gsap.fromTo(
                contentSectionRef.current,
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

            // ── Mask SVG animation ───────────────────────────────────
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

            // ── Content children with stagger ────────────────────────
            if (contentRef.current && contentRef.current.children.length > 0) {
                gsap.fromTo(
                    contentRef.current.children,
                    { opacity: 0, y: 60, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'elastic.out(0.6, 0.5)',
                        scrollTrigger: {
                            trigger: contentSectionRef.current,
                            start: 'top 60%',
                            end: 'top 30%',
                            scrub: 0.5,
                        },
                    }
                )
            }
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
                {/* Background Image */}
                <img
                    src="/images/wed.jpeg"
                    alt="About Harness Zipline and Adventure Resort"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Hero Text */}
                <div className="relative z-20 w-full h-full flex flex-col justify-end items-center pb-10 lg:pb-20">
                    <div ref={textRef} className="text-center px-4">
                        <h2 className="text-white max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                          Services
                        </h2>

                        <h2 className="text-[#faa821] max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-6">
Experiences the best service                        </h2>
                        
                        <p className="text-white/90 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
                            Escape the ordinary and immerse yourself in tranquility. Surrounded by lush forests, 
                            melodious bird songs, and fresh mountain air, our sanctuary offers the perfect blend 
                            of comfort and wilderness. Whether you're seeking adventure or peaceful solitude, 
                            nature welcomes you home.
                        </p>
                    </div>
                </div>

                {/* ── Content wrapper ── */}
                <div
                    ref={contentSectionRef}
                    className="absolute left-0 right-0 bottom-0 z-30 overflow-hidden"
                    style={{ top: 'auto' }}
                >
                    {/* Mask SVG background */}
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

                    {/* Main Content Area */}
                    <div
                        ref={contentRef}
                        className="relative z-10 w-full min-h-screen flex items-center justify-center"
                    >
                        {/* Decorative Background Image - Only at Top Right Corner */}
                        <div 
                            className="
                                absolute 
                                top-0
                                right-0 
                                w-[300px]
                                sm:w-[400px]
                                md:w-[500px]
                                lg:w-[600px]
                                xl:w-[700px]
                                h-[300px]
                                sm:h-[400px]
                                md:h-[500px]
                                
                                pointer-events-none
                                opacity-30
                                lg:opacity-40
                                z-0
                            "
                            style={{
                                backgroundImage: "url('/images/sketch.png')",
                                backgroundSize: "contain",
                                backgroundPosition: "top right",
                                backgroundRepeat: "no-repeat",
                            }}
                        />

                        {/* Content Container - Centered and Lower */}
                        <div className="
                            w-full 
                            max-w-7xl 
                            mx-auto
                            px-4 
                            sm:px-6 
                            lg:px-10
                            py-20 
                            sm:py-24 
                            lg:py-32
                            relative
                            z-20
                            mt-20
                            sm:mt-24
                            lg:mt-32
                        ">
                            {/* ================= TEXT CONTENT SECTION ================= */}
                          

                            {/* ================= SERVICES SECTION ================= */}
                            <div className="w-full relative z-30 mt-48">
                                {/* Header */}
                                <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
                                    <button
                                        className="
                                            text-white
                                            px-6
                                            sm:px-8
                                            py-2
                                            mb-4
                                            sm:mb-5
                                            text-xs
                                            sm:text-sm
                                            uppercase
                                            tracking-[0.2em]
                                            sm:tracking-[0.3em]
                                            font-semibold
                                            transition-colors
                                            duration-300
                                            hover:opacity-90
                                            relative
                                            z-30
                                        "
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
                                     Services
                                    </button>

                                    <h2 className="
                                        text-[#faa821]
                                        text-2xl
                                        sm:text-3xl
                                        md:text-4xl
                                        lg:text-5xl
                                        font-bold
                                        leading-tight
                                        mb-4
                                        sm:mb-6
                                        px-2
                                        relative
                                        z-30
                                    ">
                                        Experience the Best Services
                                    </h2>

                                    <p className="
                                        text-black/80
                                        text-sm
                                        sm:text-base
                                        lg:text-lg
                                        max-w-3xl
                                        leading-relaxed
                                        px-2
                                        relative
                                        z-30
                                    ">
                                        Step into a place where every moment becomes an experience.
                                        From dining above breathtaking landscapes to celebrating
                                        life's biggest occasions and hosting meaningful events,
                                        Harness offers the perfect setting for adventure,
                                        connection, and unforgettable memories.
                                    </p>
                                </div>

                                {/* ================= SERVICE CARDS ================= */}
                                <div className="
                                    grid
                                    grid-cols-1
                                    sm:grid-cols-2
                                    lg:grid-cols-3
                                    gap-8
                                    sm:gap-10
                                    lg:gap-12
                                    xl:gap-14
                                    mt-12
                                    sm:mt-16
                                    lg:mt-20
                                    max-w-7xl
                                    mx-auto
                                    px-2
                                    sm:px-4
                                    relative
                                    z-30
                                ">
                                    {servicesData.map((service) => (
                                        <Link
                                            key={service.id}
                                            to={`/services/${service.slug}`}
                                            className="
                                                flex 
                                                flex-col
                                                items-center
                                                w-full
                                                group
                                                transition-transform
                                                duration-300
                                                hover:-translate-y-2
                                                focus:outline-none
                                            "
                                        >
                                            {/* Masked Image */}
                                            <div
                                                className="
                                                    relative
                                                    w-full
                                                    overflow-hidden
                                                    transition-all
                                                    duration-500
                                                    group-hover:scale-[1.02]
                                                    cursor-pointer
                                                "
                                                style={{
                                                    height: "clamp(280px, 40vw, 450px)",
                                                    backgroundImage: `url(${service.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                    maskImage: "url('/images/mask.png')",
                                                    WebkitMaskImage: "url('/images/mask.png')",
                                                    maskSize: "contain",
                                                    WebkitMaskSize: "contain",
                                                    maskPosition: "center",
                                                    WebkitMaskPosition: "center",
                                                    maskRepeat: "no-repeat",
                                                    WebkitMaskRepeat: "no-repeat",
                                                }}
                                            >
                                                {/* Overlay */}
                                                <div
                                                    className="
                                                        absolute inset-0
                                                        bg-black/0
                                                        group-hover:bg-black/25
                                                        transition-all
                                                        duration-500
                                                        cursor-pointer
                                                    "
                                                />
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className="
                                                    text-[#faa821]
                                                    text-lg
                                                    sm:text-xl
                                                    lg:text-2xl
                                                    font-bold
                                                    mt-5
                                                    sm:mt-6
                                                    text-center
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-[#fcb742]
                                                    px-2
                                                "
                                            >
                                                {service.title}
                                            </h3>
                                            <p className="mt-2 max-w-sm text-center text-sm leading-relaxed text-black/70">
                                                {service.tagline}
                                            </p>
                                            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#faa821]">
                                                View Details
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicePage
