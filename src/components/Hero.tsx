"use client"


import { Button } from "@/components/ui/button"
import Image from "next/image"
import MarqueeDemo from "./MarqueeDemo"

const Hero = () => {
  return (
    <div className="min-h-screen max-h-[900px] xl:pb-16 "> {/* Add max-h */}
      <div className="relative">
        {/* Background diagonal shape */}
        <div className="absolute top-0 left-0 w-full h-full -z-10"></div>

        <div className="py-12 px-4 md:px-6 lg:px-8  h-full">
          <div className="flex flex-col space-y-8 h-full">
            <div>
              <Button className="bg-gradient-to-r from-[#5D55D9] to-[#9349FD] text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition-opacity">
                Premium E-Books
              </Button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 flex-1">
              {/* Text Content */}
              <div className="flex flex-col space-y-6 max-w-xl">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-medium text-gray-900 leading-tight">
                    Unlock Premium Coaching
                  </h1>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#243B2D] leading-tight">
                    Plus Exclusive eBook
                    <br />
                    Reselling Rights
                  </h1>
                  <p className="text-gray-700 max-w-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>

                <div className="space-y-6">
                  <Button className="cursor-pointer py-3 px-6 bg-[#243B2D] rounded-full text-white">
                    Get Started
                  </Button>

                  {/* Partner logos */}
                  <div className="pt-4">
                    <div className="flex items-center space-x-6">
                      <Image src="/socialmedia1.png" alt="Social icon" width={40} height={40} />
                      <Image src="/socialmedia2.png" alt="Social icon" width={40} height={40} />
                      <Image src="/socialmedia3.png" alt="Social icon" width={40} height={40} />
                      <Image src="/socialmedia4.png" alt="Social icon" width={40} height={40} />
                      <Image src="/socialMedia5.jpg" alt="Social icon" width={40} height={40} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="flex justify-center items-center mt-8 md:mt-0 max-h-[600px]">
                <div className="relative max-w-[420px]">
                  <div className="relative rounded-lg">
                    <Image
                      src="/heroImage.png"
                      alt="Hero Image"
                      width={400}
                      height={500}
                      className="w-[400px] h-auto max-h-[500px] object-contain -translate-y-10"
                    />
                  </div>

                  {/* Floating Tags */}
                  <div className="absolute -top-12 -right-10 md:-right-16">
                    <span className="inline-block bg-[#5856D6] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium">
                      Supportive Community
                    </span>
                  </div>

                  <div className="absolute top-5 -left-10 md:-left-20">
                    <span className="inline-block bg-[#34C759] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium">
                      All-in Digibundle Club
                    </span>
                  </div>

                  <div className="absolute bottom-32 -right-10 md:-right-20">
                    <span className="inline-block bg-blue-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium">
                      Social Media Presence
                    </span>
                  </div>

                  <div className="absolute bottom-5 -left-10 md:-left-16">
                    <span className="inline-block bg-teal-400 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium">
                      Learn & Grow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MarqueeDemo />
      </div>
    </div>
  )
}


export default Hero
