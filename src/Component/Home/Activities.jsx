import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const activities = [
    { id: 1, title: "Classic zipline", image: "/images/zipline.jpg" },
    { id: 2, title: "River Rafting", image: "/images/rafting.jpg" },
    { id: 3, title: "Giant swing", image: "/images/swing.webp" },
    { id: 4, title: "Cycling", image: "/images/cycling.jpg" },
    { id: 5, title: "Superman zipline", image: "/images/zipline2.jpg" },
];

const Activities = () => {
    const containerRef = useRef(null);
    const isAnimatingRef = useRef(false);
    const flipStateRef = useRef(null);
    const [orderedActivities, setOrderedActivities] = useState(activities);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container || !flipStateRef.current) return;

        const cards = container.querySelectorAll(".activity-item");
        const animation = Flip.from(flipStateRef.current, {
            targets: cards,
            absolute: true,
            duration: 0.6,
            ease: "power2.inOut",
            stagger: 0.03,
            onComplete: () => {
                flipStateRef.current = null;
                isAnimatingRef.current = false;
            },
        });

        return () => {
            animation.kill();
        };
    }, [orderedActivities]);

    const updateCaterpillar = (forward) => {
        const container = containerRef.current;
        if (!container || isAnimatingRef.current) return;

        const cards = container.querySelectorAll(".activity-item");
        if (cards.length === 0) return;

        isAnimatingRef.current = true;
        flipStateRef.current = Flip.getState(cards);

        setOrderedActivities((prev) => (
            forward
                ? [...prev.slice(1), prev[0]]
                : [prev[prev.length - 1], ...prev.slice(0, -1)]
        ));
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

                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => updateCaterpillar(false)}
                            className="bg-[#1b6934] text-white px-6 py-3 rounded-full hover:bg-[#145227] transition-colors duration-300 font-semibold"
                        >
                            <p>&larr; Previous</p>
                        </button>
                        <button
                            onClick={() => updateCaterpillar(true)}
                            className="bg-[#1b6934] text-white px-6 py-3 rounded-full hover:bg-[#145227] transition-colors duration-300 font-semibold"
                        >
                            <p>Next &rarr;</p>
                        </button>
                    </div>

                    <div className="relative overflow-hidden">
                        <div
                            ref={containerRef}
                            className="flex gap-8 justify-center items-start"
                            style={{
                                minHeight: '500px',
                                position: 'relative',
                            }}
                        >
                            {orderedActivities.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="activity-item flex flex-col items-center flex-shrink-0"
                                    style={{
                                        width: '350px',
                                        position: 'relative',
                                    }}
                                >
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
                                            maxHeight: "400px",
                                        }}
                                    />

                                    <h3 className="text-[#1b6934] text-xl md:text-2xl font-bold mt-6 text-center w-full">
                                        {activity.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
