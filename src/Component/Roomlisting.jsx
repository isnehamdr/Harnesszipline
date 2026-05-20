import React from 'react'

const villas = [
  {
    id: 1,
    imageLeft: true,
    image: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2026/01/2041.jpg',
    imageAlt: 'Spa Sanctuary Villas',
    exploreHref: 'https://www.keemala.com/villa/spa-sanctuary-villas/',
    icon: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/logo-pa-ta-pea.svg',
    iconAlt: 'Villa Photo',
    title: 'Spa Sanctuary Villas',
    roomType: 'Pa-Ta-Pea Earth Clan',
    description:
      "The 'Pa-Ta-Pea' (Earth) clan believed that living close to the Earth enhances well-being. Their homes, crafted from soil and clay, reflected a grounded way of life deeply connected to nature—an inspiration beautifully embodied in a Spa Villa Phuket experience at Keemala, where organic design and holistic living come together in perfect harmony.",
    bgImage: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2026/01/bg-roomssty1-300x216-1.png',
  },
  {
    id: 2,
    imageLeft: false,
    image: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/15_ClayPoolCottages-3-scaled.jpg',
    imageAlt: 'Clay Pool Cottages',
    exploreHref: 'https://www.keemala.com/villa/clay-pool-cottages/',
    icon: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/logo-pa-ta-pea.svg',
    iconAlt: 'Villa Photo',
    title: 'Clay Pool Cottages',
    roomType: 'Pa-Ta-Pea Earth Clan',
    description:
      "The 'Pa-Ta-Pea' (Earth) clan consisted of hard-working farmers, fishermen, gardeners, carpenters, blacksmiths, and miners. They believed that connecting to the Earth benefits health and well-being. The clan built their homes on ground-level, using earth as a basic material for their walls, floors, ceilings, and furniture. Even the beds they slept on were made from soil and clay.",
    bgImage: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/bg-roomssty1.png',
  },
  {
    id: 3,
    imageLeft: true,
    image: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/Tent-Pool-Villa-Exterior-2-scaled.jpg',
    imageAlt: 'Tent Pool Villas',
    exploreHref: 'https://www.keemala.com/villa/tent-pool-villas/',
    icon: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/logo-khon-jorn.svg',
    iconAlt: 'Tent Pool Villas',
    title: 'Tent Pool Villas',
    roomType: 'Khon-Jorn Wanderers Clan',
    description:
      "The 'Khon-Jorn' (Wanderers), was a travelling clan made up of foragers, herders, performers, traders, and explorers, who traded with other tribes they'd encounter on their journeys. Because of their nomadic lifestyle, they'd construct semi-permanent homes, so they could easily move on.",
    bgImage: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/bg-roomssty2-1.png',
  },
  {
    id: 4,
    imageLeft: false,
    image: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/11_TreePoolHouses1-scaled.jpg',
    imageAlt: 'Tree Pool Houses',
    exploreHref: 'https://www.keemala.com/villa/tree-pool-houses/',
    icon: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/logo-we-ha.svg',
    iconAlt: 'Tree Pool Houses',
    title: 'Tree Pool Houses',
    roomType: 'We-Ha Sky Clan',
    description:
      "The We-Ha (Sky) clan cultivated an advanced understanding of the universe. They elevated their homes for enhanced creativity and a greater sense of liberty. This clan valued the talents of healers, creators, architects, and inventors.",
    bgImage: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/bg-roomssty1-1.png',
  },
  {
    id: 5,
    imageLeft: true,
    image: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/BNPV001.png',
    imageAlt: "Bird's Nest Pool Villas",
    exploreHref: 'https://www.keemala.com/villa/birds-nest-pool-villas/',
    icon: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/logo-rung-nok.svg',
    iconAlt: "Bird's Nest Pool Villas",
    title: "Bird's Nest Pool Villas",
    roomType: 'Rung-Nok Nest Clan',
    description:
      "The Rung-Nok (Nest) clan enjoyed opulence. Their distinctive exclusivity is expressed by the signature woven bird's nest exterior. This clan had a reputation for intellectual and creative excellence, and was comprised of artists, musicians, poets, astrologers, and philosophers. They believed that the future could be seen in the stars. They bathed under moonlight to replenish their souls, and sharpen their vision.",
    bgImage: 'https://cdn-6386ba12c1ac189bf80f70f6.closte.com/wp-content/uploads/2022/11/bg-roomssty2.png',
  },
]

// Shared mask style — applied identically to photo layer and dark overlay
const maskStyle = {
  WebkitMaskImage: `url('/images/bg4.png')`,
  maskImage: `url('/images/bg4.png')`,
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
}

const VillaCard = ({ villa }) => {
  const { image, imageAlt, exploreHref, icon, iconAlt, title, roomType, description, bgImage, imageLeft } = villa

  return (
    <>
    
      
    <div className="flex flex-col md:flex-row items-stretch py-10 md:py-14 gap-6 md:gap-0">


      {/* ── Photo column ── */}
      <div className={`flex-shrink-0 w-full md:w-[44%] ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
        <a href={exploreHref} className="block">
          <div className="relative w-full aspect-[4/3] group">
            {/* Background photo with SVG wave mask */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                ...maskStyle,
              }}
            />
            {/* Dark overlay — same mask shape */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                backgroundColor: 'rgba(0,0,0,0.4)',
                ...maskStyle,
              }}
            />
          </div>
        </a>
      </div>

      {/* ── Text column ── */}
      <div
        className={`
          relative flex-1 flex flex-col justify-center min-h-[220px]
          px-6 md:px-10 lg:px-14 py-6
          ${imageLeft ? 'md:order-2 items-start text-left' : 'md:order-1 items-end text-right'}
        `}
      >
        {/* Decorative bg image anchored to the bottom of the text panel */}
        <div
          className="absolute bottom-0 inset-x-0 h-full pointer-events-none select-none"
          aria-hidden="true"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: imageLeft ? 'bottom right' : 'bottom left',
            backgroundSize: 'auto 60%',
            opacity: 0.85,
          }}
        />

        {/* Text content — above the decorative bg layer */}
        <div className="relative z-10">

          {/* Room Type - H2 Title */}
          {/* <h2 className="text-stone-700 text-base md:text-lg font-semibold mb-2 tracking-wide">
            {roomType}
          </h2> */}

          {/* Clan icon */}
          <div className={`mb-4 ${imageLeft ? '' : 'flex justify-end'}`}>
            <img src={icon} alt={iconAlt} className="h-10 w-auto" />
          </div>

          {/* Villa Title */}
          <h3 className="text-[13px] md:text-[14px] tracking-[0.25em] uppercase text-stone-800 mb-4 leading-snug font-semibold">
            {title}
          </h3>

          {/* Description */}
          <p className="text-stone-600 text-[12.5px] md:text-base leading-relaxed font-normal max-w-2xl">
            {description}
          </p>

          {/* Explore link — sits below description, aligned to text side */}
          <div className={`mt-5 ${imageLeft ? '' : 'flex justify-end'}`}>
            <a
              href={exploreHref}
              className="inline-flex items-center gap-1.5 text-base tracking-[0.22em] uppercase font-semibold text-stone-600 border-b border-stone-400 pb-px hover:text-stone-900 hover:border-stone-700 transition-colors duration-200 group"
            >
              Explore
              <svg
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}

const Roomlisting = () => {
  return (
    <section className="w-full bg-white">
       <div className="text-center">
                                
                                <h2 className="text-[#faa821] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-2xl text-center">
                                  Accomdation 
                                </h2>
                                <div className="w-10 h-px bg-[#FAA821] mb-3 mx-auto" />
                               
                            </div>
      <div style={{ maxWidth: '1100px' }} className="mx-auto px-5 sm:px-8 md:px-10">
        {villas.map((villa) => (
          <VillaCard key={villa.id} villa={villa} />
        ))}
      </div>
    </section>
  )
}

export default Roomlisting