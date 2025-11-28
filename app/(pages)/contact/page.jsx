import React from 'react'
import Conatact from './_sections/CTA'
import Header from '@/app/components/layout/Header'
import CTA from './_sections/CTA'
import ContactHero from './_sections/ContactHero'
import AboutCommunity from './_sections/AboutCommunity'
import OurPhilosophy from './_sections/OurPhilosophy'
import ForBusinesses from './_sections/ForBusinesses'
import ForCreators from './_sections/ForCreators'
import Footer from '@/app/components/sections/footer'
import Navbar from '@/app/components/ui/Navbar'

function page() {
  return (
    <div>

        <Navbar/>
        <ContactHero/>
        {/* <AboutCommunity/>  */}
        <OurPhilosophy/>
       
        {/* <ForBusinesses/>  */}
        <CTA />
         <ForCreators/>
         {/* <Footer/>  */}
    </div>
  )
}

export default page