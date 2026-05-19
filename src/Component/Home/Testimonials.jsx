import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            location: "New York, USA",
            rating: 5,
            text: "An absolutely magical experience! The spa treatments were world-class, and the staff went above and beyond to make our stay unforgettable. The cultural activities added a unique touch that we haven't found anywhere else.",
            image: "/images/testimonial1.jpg"
        },
        {
            id: 2,
            name: "Michael Chen",
            location: "Singapore",
            rating: 5,
            text: "Pure Cuisine exceeded all expectations. Every meal was a culinary journey. The wellness programs helped me reconnect with myself. Highly recommend this paradise to anyone seeking true relaxation.",
            image: "/images/testimonial2.jpg"
        },
        {
            id: 3,
            name: "Emma Williams",
            location: "London, UK",
            rating: 4,
            text: "We celebrated our wedding at Harness and it was perfect. The team's attention to detail, the beautiful setting, and the incredible service made our special day even more memorable.",
            image: "/images/testimonial3.jpg"
        }
    ]

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }

    return (
        <div className="relative max-w-7xl mx-auto mt-12 z-10 flex flex-col px-4 sm:px-6 lg:px-8">
            <div
                className="w-full flex items-center justify-center p-4 sm:p-8"
                style={{
                    backgroundColor: "#FAA821",
                    maskImage: "url('/images/check.png')",
                    WebkitMaskImage: "url('/images/check.png')",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                }}
            >
                <div className="text-center w-full max-w-[1200px] mx-auto py-12 sm:py-16">
                    <button
                        className="text-[#FAA821] px-6 sm:px-8 py-2 mb-6 text-sm uppercase tracking-widest font-semibold transition-colors duration-300"
                        style={{
                            backgroundColor: "white",
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
                        <h3>Testimonials</h3>
                    </button>

                    <h2 className="text-[#1b6934] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-2xl">
                        What Our Guests Say
                    </h2>

                    <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-12">
                        Don't just take our word for it - hear from our valued guests about their transformative experiences
                    </p>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="p-6 md:p-8">
                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {renderStars(testimonial.rating)}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Divider */}
                                    <div className="w-12 h-0.5 bg-[#FAA821] mb-4"></div>

                                    {/* Guest Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#FAA821] flex items-center justify-center text-white font-bold text-xl">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-800">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Quote Section */}
                    {/* <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
                        <svg className="w-8 h-8 text-white/50 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-white text-lg md:text-xl font-medium">
                            "The perfect blend of luxury, wellness, and authentic cultural experiences. A hidden gem that everyone should discover."
                        </p>
                        <p className="text-white/80 text-sm mt-3">- Travel + Leisure Magazine</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Testimonials