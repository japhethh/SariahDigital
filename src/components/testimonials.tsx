"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface Testimonial {
  id: number
  name: string
  email: string
  image: string
  testimonial: string
  chatSnippet: string
  commentsImage: string
  time: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [/* your 20 testimonial objects here */]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-[#243B2D]">Testimonials</h2>
          <p className="text-black max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-end gap-2 mb-6">
            <button
              className="swiper-button-prev p-2 rounded-full bg-[#243B2D] text-white hover:bg-green-700 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="swiper-button-next p-2 rounded-full bg-[#243B2D] text-white hover:bg-green-700 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover mr-2"
                        />
                        <div>
                          <h3 className="font-semibold text-md text-[#243B2D]">{testimonial.name}</h3>
                          <p className="text-black text-xs">{testimonial.email}</p>
                        </div>
                      </div>
                      <p className="text-black text-xs mb-1">{testimonial.testimonial}</p>
                    </div>
                    <div>
                      <Image
                        src={testimonial.commentsImage}
                        alt=""
                        width={400}
                        height={200}
                        className="w-full h-auto object-cover mt-2"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
