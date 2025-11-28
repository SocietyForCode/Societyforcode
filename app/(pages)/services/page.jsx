import Navbar from '@/app/components/ui/Navbar'
import React from 'react'
import ServicesHero from './_sections/ServicesHero'
import WhatWeBuild from './_sections/WhatWeBuild'
import ServiceSpectrum from './_sections/ServiceSpectrum'
import Footer from '@/app/components/sections/footer'
import ProcessSection from './_sections/ProcessSection'
import WhyChooseSFC from './_sections/WhyChooseSFC'

function page() {
  return (
    <div>
        <Navbar/>
        <ServicesHero/>
        <WhatWeBuild/>
        <ServiceSpectrum/>
        <ProcessSection/>
        <WhyChooseSFC/>
        <Footer/>
    </div>
  )
}

export default page