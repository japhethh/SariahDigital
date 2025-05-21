import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Inquire from '@/components/Inquire'
import Offers from '@/components/Offers'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/testimonials'
const page = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Offers />
        <Testimonials />
        <Inquire />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default page