"use client"

import type React from "react"

import { Element } from "react-scroll"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"

interface JourneyBenefit {
  id: number
  title: string
  image: string
  icon: React.ReactNode
}

export default function DigitalJourney() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Journey benefits
  const journeyBenefits: JourneyBenefit[] = [
    {
      id: 1,
      image: "/about/journeyImage1.png",
      icon: <Clock className="w-5 h-5" />,
      title: "Break free from the 9-to-5 grind.",
    },
    {
      id: 2,
      image: "/about/journeyImage2.png",
      icon: <Clock className="w-5 h-5" />,
      title: "Create scalable income streams with ease.",
    },
    {
      id: 3,
      image: "/about/journeyImage3.png",
      icon: <Clock className="w-5 h-5" />,
      title: "Build an online business with freedom, creativity, and income potential.",
    },
    {
      id: 4,
      image: "/about/journeyImage4.png",
      icon: <Clock className="w-5 h-5" />,
      title: "Leverage digital products for passive income.",
    },
  ]

  return (
    <Element name="digital-journey">
      <div className="container mx-auto px-4">
        <div className="text-start mb-5 md:mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-[#243B2D]">My Digital Journey</h2>
          <p className="text-black text-sm md:text-base">
            From Struggles to Success: How Digital Products Transformed My Life
          </p>
        </div>

        <div className="relative mb-8">
          {/* Navigation buttons for carousel */}
          <div className="absolute top-1/2 -translate-y-1/2 z-10 w-full flex justify-between pointer-events-none px-2 md:px-4">
            <button
              ref={prevRef}
              className="bg-white rounded-full shadow-md p-1 md:p-2 flex items-center justify-center pointer-events-auto focus:outline-none"
              aria-label="Previous slide"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-700 rotate-180" />
            </button>
            <button
              ref={nextRef}
              className="bg-white rounded-full shadow-md p-1 md:p-2 flex items-center justify-center pointer-events-auto focus:outline-none"
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-700" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={13}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-first",
            }}
            loop={true}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 13,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 13,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 13,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 13,
              },
            }}
            className="journey-swiper pb-10"
          >
            {journeyBenefits.map((benefit) => (
              <SwiperSlide key={benefit.id}>
                <div className="flex flex-col gap-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col ">
                    <div className="relative h-[240px] flex-shrink-0">
                      <Image
                        src={benefit.image || "/placeholder.svg"}
                        alt={benefit.title}
                        width={502}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border flex items-center gap-3 h-[80px] bg-white">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f0f5f1] flex items-center justify-center text-[#243B2D]">
                      {benefit.icon}
                    </div>
                    <p className="text-sm md:text-base text-gray-800 font-medium">{benefit.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>


      </div>

      {/* Add custom styles for pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ccc;
          opacity: 1;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-active {
          background: #243B2D;
        }
        
        @media (max-width: 640px) {
          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            margin: 0 3px;
          }
        }
      `}</style>
    </Element>
  )
}
