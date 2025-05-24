import { ArrowDownRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Feature data
const features = [
  { name: "💫 College | 20 | Business" },
  { name: "💰 Canva & Digital Products" },
  { name: "🍷 Trusted by 2.7k clients worldwide" },
  { name: "🍀 Founder: @_itsmexsophia" },
]

// Floating element data
const floatingElements = [
  {
    image: "/heroImage1.png",
    width: 230,
    height: 230,
    position: "top-1/4 left-8 md:left-12 lg:left-20 xl:left-24",
    buttonText: "Learn & Grow",
    buttonColor: "bg-[#00C7BE]",
    buttonPosition: "bottom-5 -right-10 md:-right-12 lg:-right-16",
  },
  {
    image: "/heroImage1.png",
    width: 169,
    height: 169,
    position: "top-1/4 right-8 md:right-12 lg:right-40 xl:right-48",
    buttonText: "Social Media Presence",
    buttonColor: "bg-[#32ADE6]",
    buttonPosition: "bottom-5 -right-10 md:-right-16 lg:-right-30",
  },
  {
    image: "/heroImage2.png",
    width: 250,
    height: 250,
    position: "bottom-1/4 left-8 md:left-12 lg:left-50 xl:left-60",
    buttonText: "Social Media Presence",
    buttonColor: "bg-[#34C759]",
    buttonPosition: "bottom-10 -right-10 md:-right-16 lg:-right-30",
  },
  {
    image: "/heroImage4.png",
    width: 230,
    height: 230,
    position: "bottom-1/4 right-8 md:right-12 lg:right-60 xl:right-72",
    buttonText: "Social Media Presence",
    buttonColor: "bg-[#5856D6]",
    buttonPosition: "bottom-10 -right-10 md:-right-16 lg:-right-30",
  },
]

// Mobile floating element data
const mobileElements = [
  {
    image: "/heroImage1.png",
    buttonText: "Learn & Grow",
    buttonColor: "bg-[#00C7BE]",
  },
  {
    image: "/heroImage4.png",
    buttonText: "Social Media",
    buttonColor: "bg-[#5856D6]",
  },
]

const HeroTesting = () => {
  return (
    <div className="relative sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center py-12 md:py-0">
        {/* Background Dots */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
          <Image
            src="/backgrounddot.png"
            alt="Background pattern"
            width={1007}
            height={476}
            priority
            className="w-full h-full object-contain opacity-80"
          />
        </div>

        {/* Floating Elements - Desktop & Tablet */}
        <div className="hidden md:block absolute inset-0">
          {floatingElements.map((element, index) => (
            <div key={index} className={`absolute ${element.position}`}>
              <div className="relative">
                <Image
                  src={element.image || "/placeholder.svg"}
                  alt={`Hero image ${index + 1}`}
                  width={element.width}
                  height={element.height}
                  className={`w-[${Math.floor(element.width * 0.6)}px] md:w-[${Math.floor(
                    element.width * 0.8,
                  )}px] lg:w-[${element.width}px] h-auto`}
                />
                <div className={`absolute ${element.buttonPosition}`}>
                  <Button
                    className={`${element.buttonColor} px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-white text-xs md:text-sm rounded-full whitespace-nowrap`}
                  >
                    {element.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Floating Elements */}
        <div className="md:hidden grid grid-cols-2 gap-4 mb-8 w-full">
          {mobileElements.map((element, index) => (
            <div key={index} className="relative">
              <Image
                src={element.image || "/placeholder.svg"}
                alt={`Hero image ${index + 1}`}
                width={150}
                height={150}
                className="w-full h-auto"
              />
              <div className="absolute bottom-2 right-0">
                <Button
                  className={`${element.buttonColor} px-3 py-1 text-white text-xs rounded-full whitespace-nowrap`}
                >
                  {element.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Central Content */}
        <div className="text-center flex flex-col gap-2 sm:gap-3 z-10 mt-4 md:mt-0">
          {/* Premium E-Books Badge */}
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center">
              <ArrowDownRight className="border-2 border-black w-4 h-4 sm:w-5 sm:h-5 bg-white text-black rounded-full" />
            </div>
            <div className="bg-[#EFF0F0] rounded-sm text-black py-2 sm:py-3 px-4 sm:px-7 font-medium text-xs">
              <h1>Premium E-Books</h1>
            </div>
          </div>

          {/* Main Heading Group */}
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 mt-2 sm:mt-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-black">Unlock Premium Coaching</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-[660px] mx-auto text-[#243B2D]">
              Plus Exclusive eBook
            </h1>
            <div className="relative pb-16 sm:pb-20 md:pb-24">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-[660px] mx-auto text-[#243B2D]">
                Reselling Rights
              </h1>
              <Image
                className="absolute -bottom-5 sm:-bottom-10 md:-bottom-18 right-0 sm:right-5 md:right-0 w-[120px] sm:w-[180px] md:w-[250px] h-auto"
                src="/GroupDoddle.png"
                width={250}
                alt="Decorative doodle"
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="-mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
        {/* Button and Description */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-2 text-center">
            <div className="flex justify-center items-center">
              <Button className="bg-[#243B2D] px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 text-white rounded-full w-auto text-sm sm:text-base">
                Become a Student
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-8 sm:mt-10 md:mt-12 mb-10">
          <ul className="flex flex-col sm:flex-row flex-wrap justify-around items-center gap-3">
            {features.map((item, index) => (
              <li
                className="bg-[#EBECEB] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full w-full sm:w-auto text-center text-xs sm:text-sm"
                key={index}
              >
                <h1>{item.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroTesting
