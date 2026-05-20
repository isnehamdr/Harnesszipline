import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GalleryPage = () => {
    const heroRef = useRef(null)
    const textRef = useRef(null)
    const contentSectionRef = useRef(null)
    const maskRef = useRef(null)
    const contentRef = useRef(null)

    const services = [
        {
            id: 1,
            image: "/images/gallery.jpeg",
            alt: "Tower Restaurant"
        },
        {
            id: 2,
            image: "/images/gallery.jpeg",
            alt: "Wedding Destination"
        },
        {
            id: 3,
            image: "/images/gallery.jpeg",
            alt: "Conference Room"
        },
        {
            id: 4,
            image: "/images/gallery.jpeg",
            alt: "Adventure Park"
        },
        {
            id: 5,
            image: "/images/gallery.jpeg",
            alt: "Beachfront Villa"
        },
        {
            id: 6,
            image: "/images/gallery.jpeg",
            alt: "Mountain Retreat"
        },
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Hero text animation
            gsap.fromTo(
                textRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out'
                }
            )

            // Scroll reveal section
            gsap.fromTo(
                contentSectionRef.current,
                { yPercent: 100 },
                {
                    yPercent: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: '+=120%',
                        scrub: 1,
                        pin: true,
                    },
                }
            )

            // Mask animation
            gsap.fromTo(
                maskRef.current,
                { opacity: 0, scale: 1.1 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top center',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            )

            // Cards stagger animation
            if (contentRef.current?.children.length > 0) {
                gsap.fromTo(
                    contentRef.current.children,
                    {
                        opacity: 0,
                        y: 60,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.15,
                        ease: 'power3.out',
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
        <div className="relative bg-white w-full min-h-screen">

            {/* HERO SECTION */}
            <section
                ref={heroRef}
                className="relative w-full h-screen overflow-hidden"
            >

                {/* Background Image */}
                <img
                    src="/images/gallery.jpeg"
                    alt="Gallery Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Hero Content */}
                <div className="relative z-20 w-full h-full flex items-end justify-center pb-16 lg:pb-24">
                    <div
                        ref={textRef}
                        className="text-center px-4"
                    >
                        <h1 className="
                            text-white
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            leading-tight
                            drop-shadow-lg
                            max-w-4xl
                            mx-auto
                        ">
                            Harness Zipline and Adventure Resort Gallery
                        </h1>
                    </div>
                </div>

                {/* CONTENT SECTION */}
                <div
                    ref={contentSectionRef}
                    className="absolute inset-x-0 bottom-0 z-30"
                >

                    {/* SVG MASK */}
                    <div
                        ref={maskRef}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src="/images/mask.svg"
                            alt=""
                            className="w-full h-full object-cover object-top invert"
                        />
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="relative z-10 bg-transparent">

                        {/* Decorative Sketch */}
                        <div
                            className="
                                absolute
                                top-0
                                right-0
                                w-[300px]
                                sm:w-[400px]
                                md:w-[500px]
                                lg:w-[650px]
                                h-[300px]
                                sm:h-[400px]
                                md:h-[500px]
                                pointer-events-none
                                opacity-20
                                lg:opacity-30
                                z-0
                            "
                            style={{
                                backgroundImage: "url('/images/sketch.png')",
                                backgroundSize: "contain",
                                backgroundPosition: "top right",
                                backgroundRepeat: "no-repeat",
                            }}
                        />

                        <div className="
                            relative
                            z-20
                            w-full
                            max-w-7xl
                            mx-auto
                            px-4
                            sm:px-6
                            lg:px-10
                            py-20
                            sm:py-24
                            lg:py-32
                        ">

                            {/* SECTION HEADER */}
                            <div className="w-full relative z-30 mt-16 lg:mt-48">

                                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                                    {/* Badge */}
                                    <button
                                        className="
                                            text-white
                                            px-6
                                            sm:px-8
                                            py-2
                                            mb-5
                                            text-xs
                                            sm:text-sm
                                            uppercase
                                            tracking-[0.3em]
                                            font-semibold
                                            transition-all
                                            duration-300
                                            hover:opacity-90
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
                                        Photo
                                    </button>

                                    {/* Heading */}
                                    <h2 className="
                                        text-[#faa821]
                                        text-2xl
                                        sm:text-3xl
                                        md:text-4xl
                                        lg:text-5xl
                                        font-bold
                                        leading-tight
                                        mb-6
                                    ">
                                        Memories created by the Guest Experience
                                    </h2>

                                </div>

                                {/* GALLERY GRID */}
                                <div
                                    ref={contentRef}
                                    className="
                                        grid
                                        grid-cols-1
                                        sm:grid-cols-2
                                        lg:grid-cols-3
                                        gap-4
                                        sm:gap-6
                                        mt-14
                                        lg:mt-20
                                    "
                                >

                                    {services.map((service) => (
                                        <div
                                            key={service.id}
                                            className="
                                                group
                                                relative
                                                transition-transform
                                                duration-500
                                                hover:-translate-y-2
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
                                                    aspectRatio: "4/5",
                                                    minHeight: "300px",
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

                                                {/* Hover Overlay */}
                                                <div
                                                    className="
                                                        absolute
                                                        inset-0
                                                        bg-black/0
                                                        group-hover:bg-black/20
                                                        transition-all
                                                        duration-500
                                                    "
                                                />

                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default GalleryPage