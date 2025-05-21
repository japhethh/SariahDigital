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
      id: 4,
      name: "Mia Taylor",
      email: "MiaTaylor@gmail.com",
      image: "/blonde-woman-portrait.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry standard dummy text ever since the 1500s",
      chatSnippet: "Have a great working week!!",
      time: "09:55 AM",
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
      id: 6,
      name: "Emma Wilson",
      email: "EmmaWilson@gmail.com",
      image: "/woman-black-hair.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Working with this company has been a game-changer for my business. Their innovative solutions have helped us grow exponentially.",
      chatSnippet: "Looking forward to our next project!",
      time: "01:45 PM",
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
      id: 8,
      name: "Isabella Davis",
      email: "IsabellaDavis@gmail.com",
      image: "/blonde-woman-portrait.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Their customer service is unparalleled. They were always available to answer questions and address concerns promptly.",
      chatSnippet: "Exceptional support team!",
      time: "03:10 PM",
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
      id: 10,
      name: "Daniel Williams",
      email: "DanielWilliams@gmail.com",
      image: "/woman-black-hair.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "Their innovative approach to problem-solving helped us overcome challenges we do been struggling with for months.",
      chatSnippet: "Game-changing solutions!",
      time: "11:45 AM",
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
      id: 12,
      name: "Ethan Anderson",
      email: "EthanAnderson@gmail.com",
      image: "/blonde-woman-portrait.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "The team is expertise in their field is evident. They provided valuable insights that helped shape our strategy.",
      chatSnippet: "Expert advice that made a difference!",
      time: "02:15 PM",
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
      id: 14,
      name: "Benjamin Jackson",
      email: "BenjaminJackson@gmail.com",
      image: "/woman-black-hair.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "The level of customization they offered was exactly what we needed. The solution feels tailor-made for our business.",
      chatSnippet: "Perfect fit for our needs!",
      time: "10:50 AM",
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
      id: 16,
      name: "Henry Harris",
      email: "HenryHarris@gmail.com",
      image: "/blonde-woman-portrait.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "The ongoing support after implementation has been exceptional. They truly care about long-term client satisfaction.",
      chatSnippet: "Excellent ongoing support!",
      time: "03:25 PM",
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
    {
      id: 18,
      name: "Alexander Lewis",
      email: "AlexanderLewis@gmail.com",
      image: "/woman-black-hair.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "The training they provided ensured our team could maximize the benefits of their solution. Very thorough.",
      chatSnippet: "Comprehensive training!",
      time: "11:05 AM",
    },
    {
      id: 19,
      name: "Grace Walker",
      email: "GraceWalker@gmail.com",
      image: "/red-haired-woman.png",
      commentsImage: "/testimonialImage1.png",
      testimonial: "Their attention to security and data protection gave us peace of mind throughout the project.",
      chatSnippet: "Security-focused approach!",
      time: "01:55 PM",
    },
    {
      id: 20,
      name: "William Turner",
      email: "WilliamTurner@gmail.com",
      image: "/blonde-woman-portrait.png",
      commentsImage: "/testimonialImage1.png",
      testimonial:
        "The scalability of their solution has allowed us to grow without worrying about outgrowing our systems.",
      chatSnippet: "Scalable and future-proof!",
      time: "04:10 PM",
    },
  ]

  return (
    <Element name="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-[#243B2D]">Testimonials</h2>
          <p className="text-black max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
            industry is standard dummy text ever since the 1500s
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
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
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
