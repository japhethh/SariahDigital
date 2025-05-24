import React from 'react'
// import Hero from '@/components/Hero'
import Inquire from '@/components/Inquire'
import Offers1 from '@/components/Offers1'
import FAQ from '@/components/FAQ'
// import HeroTesting from '@/componentshudfa@sigul.cr/HeroTesting'
import Testimonials from '@/components/testimonials'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import DigitalJourney from '@/components/about_us/DigitalJourney'
import WebinarSection from '@/components/WebinarSection'
import EbookBundles from '@/components/EbookBundles'
// import PaymentSection from '@/components/PaymentSection'
import PaymentSectionv1 from '@/components/PaymentSectionv1'
import GetInTouch from '@/components/GetInTouch'
// import HeroWithHeader from '@/components/Hero'
const page = () => {
  return (
    <div>
      <main className='max-w-7xl mx-auto px-8 max-md:px-4' >
        {/* <HeroTesting /> */}
        {/* <HeroWithHeader /> */}
        <Hero />
        <WhyChoose />
        <Offers1 />
        <Inquire />
        <DigitalJourney />
        <Testimonials />
        <WebinarSection />
        <EbookBundles />
        <PaymentSectionv1 />
        <FAQ />
        <GetInTouch />
      </main>
    </div >
  )
}

export default page