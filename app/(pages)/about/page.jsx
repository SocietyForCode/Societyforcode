import Navbar from '@/app/components/ui/Navbar'
import React from 'react'
import AboutHero from './_sections/AboutHero'
import MissionVision from './_sections/MissionVision'
import Culture from './_sections/Culture'
import Footer from '@/app/components/sections/footer'
import DualPulseRefined from './_sections/DualPulseRefined'
import ServicesSection from './_sections/ServicesSection'
import CommunitySection from '@/app/(pages)/about/_sections/CommunitySection'

export default function page() {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
       

       
 <MissionVision/>
        <Culture/>
        <DualPulseRefined/>
        <ServicesSection/>
        <CommunitySection/>
        <Footer/>
      


    </div>
  )
}
