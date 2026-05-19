import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const Activities = () => {
    const containerRef = useRef(null);
    const isAnimatingRef = useRef(false);

    const activities = [
        { id: 1, title: "Classic zipline", image: "/images/zipline.jpg" },
        { id: 2, title: "River Rafting", image: "/images/rafting.jpg" },
        { id: 3, title: "Giant swing", image: "/images/swing.webp" },
        { id: 4, title: "Cycling", image: "/images/cycling.jpg" },
        { id: 5, title: "Superman zipline", image: "/images/zipline2.jpg" },
    ];

    const updateCaterpillar = (forward) => {
        const container = containerRef.current;
        if (!container) return;
        
        // Get all activity card containers (the outer divs)
        const cards = gsap.utils.toArray(".activity-item", container);
        
        if (cards.length === 0) return;
        
        const first = cards[0];
        const last = cards[cards.length - 1];
        const state = Flip.getState(cards);
        
        // Create new card element with fixed dimensions
        let newCard = document.createElement("div");
        newCard.className = "activity-item flex flex-col items-center flex-shrink-0";
        newCard.style.width = '350px';
        newCard.style.position = 'relative';
        gsap.set(newCard, { scale: 0, opacity: 0 });

        if (forward) {
            // Clone the first card's content and ensure image dimensions are preserved
            newCard.innerHTML = first.innerHTML;
            // Ensure the image container has fixed dimensions
            const imageContainer = newCard.querySelector('div[style*="background-image"]');
            if (imageContainer) {
                imageContainer.style.width = "100%";
                imageContainer.style.height = "400px";
            }
            container.appendChild(newCard);
            first.classList.add("hide");
        } else {
            // Clone the last card's content and ensure image dimensions are preserved
            newCard.innerHTML = last.innerHTML;
            // Ensure the image container has fixed dimensions
            const imageContainer = newCard.querySelector('div[style*="background-image"]');
            if (imageContainer) {
                imageContainer.style.width = "100%";
                imageContainer.style.height = "400px";
            }
            container.insertBefore(newCard, first);
            last.classList.add("hide");
        }
        
        Flip.from(state, {
            targets: ".activity-item",
            fade: true,
            absoluteOnLeave: true,
            duration: 0.6,
            ease: "power2.inOut",
            onEnter: (els) => {
                gsap.fromTo(els, 
                    {
                        opacity: 0,
                        scale: 0,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        transformOrigin: forward ? "bottom right" : "bottom left",
                        duration: 0.6,
                        ease: "power2.out"
                    }
                );
            },
            onLeave: (els) => {
                gsap.to(els, {
                    opacity: 0,
                    scale: 0,
                    transformOrigin: forward ? "bottom left" : "bottom right",
                    duration: 0.6,
                    ease: "power2.in",
                    onComplete: () => {
                        els[0].remove();
                        isAnimatingRef.current = false;
                    }
                });
            }
        });
    };

    const handleNext = () => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        updateCaterpillar(true);
    };

    const handlePrev = () => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        updateCaterpillar(false);
    };

    return (
        <div className="relative w-full z-10 flex flex-col">
            <div
                className="w-full flex items-center justify-center p-8"
                style={{
                    backgroundColor: "#FAA821",
                    maskImage: "url('/images/mask3.svg')",
                    WebkitMaskImage: "url('/images/mask3.svg')",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                }}
            >
                <div className="text-center w-full max-w-[1200px] mx-auto py-24">
                    <button
                        className="text-[#FAA821] px-8 py-2 mb-3 text-sm uppercase tracking-widest font-semibold transition-colors duration-300"
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
                        <h3>Activities</h3>
                    </button>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1b6934] font-bold leading-tight mb-8 drop-shadow-2xl">
                        Make your trip worth
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={handlePrev}
                            className="bg-[#1b6934] text-white px-6 py-3 rounded-full hover:bg-[#145227] transition-colors duration-300 font-semibold"
                        >
                          <p>  ← Previous</p>
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-[#1b6934] text-white px-6 py-3 rounded-full hover:bg-[#145227] transition-colors duration-300 font-semibold"
                        >
                           <p> Next →</p>
                        </button>
                    </div>

                    {/* Slider Container */}
                    <div className="relative overflow-hidden">
                        <div 
                            ref={containerRef}
                            className="flex gap-8 justify-center items-start"
                            style={{ 
                                minHeight: '500px',
                                position: 'relative'
                            }}
                        >
                            {activities.map((activity, index) => (
                                <div
                                    key={`${activity.id}-${index}`}
                                    className="activity-item flex flex-col items-center flex-shrink-0"
                                    style={{ 
                                        width: '350px',
                                        position: 'relative'
                                    }}
                                >
                                    {/* Image with mask - FIXED SIZE */}
                                    <div
                                        className="bg-cover bg-center relative"
                                        style={{
                                            backgroundImage: `url(${activity.image})`,
                                            maskImage: "url('/images/mask.png')",
                                            WebkitMaskImage: "url('/images/mask.png')",
                                            maskSize: "contain",
                                            WebkitMaskSize: "contain",
                                            maskPosition: "center",
                                            WebkitMaskPosition: "center",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskRepeat: "no-repeat",
                                            width: "350px",
                                            height: "400px",
                                            minWidth: "350px",
                                            minHeight: "400px",
                                            maxWidth: "350px",
                                            maxHeight: "400px"
                                        }}
                                    ></div>
                                    
                                    {/* Title */}
                                    <h3 className="text-[#1b6934] text-xl md:text-2xl font-bold mt-6 text-center w-full">
                                        {activity.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hide {
                    display: none;
                }
                .activity-item {
                    transition: none;
                }
            `}</style>
        </div>
    );
};

export default Activities;