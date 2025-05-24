"use client"

import { Element } from "react-scroll"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Import Swiper styles
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
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  // 20 testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ella Lewis",
      email: "EllaLewis@gmail.com",
      image: "/testimonialProfile.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text ever since the 1500s",
      chatSnippet: "Have a great working week!!",
      time: "09:25 AM",
    },
    {
      id: 2,
      name: "Ava Jackson",
      email: "AvaJackson@gmail.com",
      image: "/testimonialProfile.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text ever since the 1500s",
      chatSnippet: "Have a great working week!!",
      time: "09:30 AM",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "JaneSmith@gmail.com",
      image: "/testimonialProfile1.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text ever since the 1500s",
      chatSnippet: "Have a great working week!!",
      time: "10:25 AM",
    },

    {
      id: 5,
      name: "Sophie Johnson",
      email: "SophieJohnson@gmail.com",
      image: "/testimonialProfile.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "The team exceeded my expectations with their attention to detail and commitment to quality. I could not be happier with the results.",
      chatSnippet: "Thanks for the amazing service!",
      time: "11:15 AM",
    },

    {
      id: 7,
      name: "Olivia Brown",
      email: "OliviaBrown@gmail.com",
      image: "/testimonialProfile1.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "I was impressed by how quickly they understood our needs and delivered a solution that perfectly matched our requirements.",
      chatSnippet: "The results are fantastic!",
      time: "02:30 PM",
    },

    {
      id: 9,
      name: "Michael Johnson",
      email: "MichaelJohnson@gmail.com",
      image: "/testimonialProfile.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "The product quality exceeded my expectations. It is clear that they prioritize excellence in everything they do.",
      chatSnippet: "Truly impressed with the quality!",
      time: "10:05 AM",
    },

    {
      id: 11,
      name: "Sophia Martinez",
      email: "SophiaMartinez@gmail.com",
      image: "/testimonialProfile1.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "I appreciate their transparency throughout the entire process. They kept us informed every step of the way.",
      chatSnippet: "Great communication!",
      time: "01:20 PM",
    },

    {
      id: 13,
      name: "Amelia Thomas",
      email: "AmeliaThomas@gmail.com",
      image: "/testimonialProfile.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Their dedication to meeting deadlines is commendable. They delivered on time, even with our tight schedule.",
      chatSnippet: "Reliable and punctual!",
      time: "09:40 AM",
    },
    {
      id: 15,
      name: "Charlotte White",
      email: "CharlotteWhite@gmail.com",
      image: "/testimonialProfile1.png",
      commentsImage: "/testimonialImage1.png",
      testimonial: "Their pricing is transparent and fair. We received excellent value for our investment.",
      chatSnippet: "Great value for money!",
      time: "12:35 PM",
    },

    {
      id: 17,
      name: "Lily Clark",
      email: "LilyClark@gmail.com",
      image: "/testimonialProfile.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Their team is creativity helped us stand out in a competitive market. The unique approach has paid dividends.",
      chatSnippet: "Creative solutions that work!",
      time: "09:15 AM",
    },


  ]

  return (
    <Element name="testimonials" className="py-16">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#243B2D] mb-2">
            What My Client Say.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the standard dummy text since the 1500s.
          </p>
        </div>


        <div className="relative">
          <div className="flex justify-end gap-2 mb-6">
            <button
              ref={prevRef}
              className="p-2 rounded-full bg-[#243B2D] text-white hover:bg-green-700 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="p-2 rounded-full bg-[#243B2D] text-white hover:bg-green-700 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true, el: null }}
            loop={true}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white  rounded-lg border overflow-hidden h-full my-2">
                  <div className="p-[24px] flex flex-col h-full">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center mb-2">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover mr-2"
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
                        src={testimonial.commentsImage || "/placeholder.svg"}
                        alt=""
                        width={400}
                        height={200}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Element>
  )
}
