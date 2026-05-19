import React from 'react'
import Hero from '../Component/Home/Hero'
import About from '../Component/Home/About'
import Rooms from '../Component/Home/Rooms'
import Extra from '../Component/Home/Extra'
import Activities from '../Component/Home/Activities'
import Services from '../Component/Home/Services'
import Testimonials from '../Component/Home/Testimonials'

const Home = () => {
    return (
        <>

            <Hero />
            <About />
            <Services />
            <Activities />
            <Testimonials />
            <Rooms />

            {/* <Extra /> */}



        </>

    )
}

export default Home