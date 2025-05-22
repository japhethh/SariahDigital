import Image from "next/image"

export default function HeroWithHeader() {
  return (
    <div className="max-h-screen bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      {/* Header */}
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center w-full max-w-4xl">
              <div className="w-full p-3 sm:p-5">
                <div className="flex flex-col gap-2 sm:gap-5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#243B2D]">
                    <span className="font-bold">Unlock</span> Premium Coaching +{" "}
                    <span className="font-bold inline-block">Exclusive</span>
                  </h1>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#243B2D]">
                    eBook <span className="font-bold">Reselling Rights</span>
                  </h1>
                </div>

                <p className="text-[#243B2D] my-3 sm:my-5 text-center mt-3 sm:mt-5 text-sm sm:text-base md:text-lg">
                  Build a business, get coached 1:1, and resell proven digital assets.
                </p>

                <div className="flex justify-center items-center mt-4 sm:mt-5">
                  <button className="bg-[#243B2D] font-bold cursor-pointer text-white text-sm sm:text-medium px-5 sm:px-[24px] py-2 sm:py-[12px] rounded-full">
                    Get Instant Access
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="transform -translate-y-0 sm:-translate-y-5 md:-translate-y-10 container mx-auto mt-6 sm:mt-0">
            <div className="flex justify-center">

              <Image
                src="/imageAllpng.png"
                width={200} height={0}
                className="w-full max-w-[1496px] object-contain"
                alt="Collection of digital products and coaching materials"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
