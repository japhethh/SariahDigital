import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlarmClock, TrendingUp, Banknote } from "lucide-react"

const WhyChoose = () => {
  return (
    <section className=" px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2d4134] mb-4">What's in it for you?</h2>
          <p className="text-black text-xl">Check out these inspiring success stories from my students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Save Time and Effort */}
          <div className="p-8 bg-white border rounded-lg">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <AlarmClock className="h-10 w-10 text-[#2d4134]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d4134] mb-3">Save Time and Effort:</h3>
              <p className="text-black mb-8 text-xl flex-grow">
                No need to create content or figure out strategies from scratch.
              </p>
              <Button className="bg-[#2d4134] hover:bg-[#1a2921] py-5 px-6 rounded-full text-white w-fit">Apply Now</Button>
            </div>
          </div>

          {/* Card 2: Build a Scalable Business */}
          <Card className="p-8 bg-white border rounded-lg">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <TrendingUp className="h-10 w-10 text-[#2d4134]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d4134] mb-3">Build a Scalable Business</h3>
              <p className="text-black text-xl mb-8 flex-grow">
                Tools and training designed to grow with you, offering long-term success and financial freedom.
              </p>
              <Button className="bg-[#2d4134] hover:bg-[#1a2921] py-5  px-6 rounded-full text-white w-fit">Inquire Now</Button>
            </div>
          </Card>

          {/* Card 3: Monetize Faster */}
          <Card className="p-8 bg-white border rounded-lg">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <Banknote className="h-10 w-10 text-[#2d4134]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d4134] mb-3">Monetize Faster</h3>
              <p className="text-black mb-8 text-xl flex-grow">
                Reselling rights let you start earning immediately, even as a beginner.
              </p>
              <Button className="bg-[#2d4134] hover:bg-[#1a2921] py-5  px-6 rounded-full text-white w-fit">Count Me In</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>)
}

export default WhyChoose