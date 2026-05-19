import React from 'react'

const Services = () => {
    const services = [
        {
            id: 1,
            image: "/images/room6.jpg",
            title: "Tower Restaurant",
            alt: "Tower Restaurant"
        },
        {
            id: 2,
            image: "/images/wed.jpeg",
            title: "Weeding Destination",
            alt: "Wedding Destination"
        },
        {
            id: 3,
            image: "/images/room6.jpg",
            title: "Conference Room",
            alt: "Conference Room"
        }
    ];

    return (
        <div className="w-full h-full py-12 flex flex-col items-center justify-center px-6 text-center">
            <button
                className="text-white px-8 py-2 mb-4 text-sm uppercase tracking-widest font-semibold transition-colors duration-300"
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
                <h3>Experiences</h3>
            </button>

            <h2 className="text-[#faa821] text-2xl sm:text-3xl text-center md:text-4xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-2xl">
                Experiences the best service
            </h2>

            <p className="text-black/90 text-lg sm:text-xl tracking-wide max-w-2xl leading-relaxed mb-6 drop-shadow-lg">
                Step into a place where every moment becomes an experience. From dining above breathtaking landscapes to celebrating life’s
                biggest occasions and hosting meaningful events, Harness offers the perfect setting for adventure, connection, and unforgettable memories.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 mt-8 max-w-7xl">
                {services.map((service) => (
                    <div key={service.id} className="flex flex-col items-center w-full">
                        <div
                            className="bg-cover bg-center relative w-full"
                            style={{
                                backgroundImage: `url(${service.image})`,
                                maskImage: "url('/images/mask.png')",
                                WebkitMaskImage: "url('/images/mask.png')",
                                maskSize: "contain",
                                WebkitMaskSize: "contain",
                                maskPosition: "center",
                                WebkitMaskPosition: "center",
                                maskRepeat: "no-repeat",
                                WebkitMaskRepeat: "no-repeat",
                                height: "400px",
                                maxWidth: "100%",
                            }}
                        ></div>

                        <h3 className="text-[#faa821] text-xl md:text-2xl font-bold mt-6 text-center">
                            {service.title}
                        </h3>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @media (max-width: 640px) {
                    .grid > div > div {
                        height: 500px !important;
                    }
                    .grid {
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </div>
    )
}

export default Services