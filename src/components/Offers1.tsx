import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BundleSection() {
  return (
    <section className="py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 2 Free Webinars Card */}
        <div className="bg-[#F0F0F0] shadow-sm rounded-lg overflow-hidden">
          <div className="p-8 pb-0">
            <div className="flex flex-col h-full justify-between">
              <div className="space-y-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#243B2D]">
                  2 Free
                  <br />
                  Webinars
                </h2>
                <p className="text-gray-600 max-w-md">
                  Get the exact strategies that helped me earn my first ₱50,000 as a beginner, no fluff, just results.
                </p>
              </div>

              <div className="space-y-6">
                <Button variant="default" className="bg-[#243B2D] hover:bg-[#1a2c21] text-white rounded-md px-6">
                  Limited Slots Only
                </Button>
              </div>
            </div>
          </div>

          {/* Image container as a separate div that extends to full width */}
          <div className="relative w-full h-[300px] mt-4">
            <Image
              src="/offersImage3.png"
              alt="Colorful book spines"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Right Column - Stacked Cards */}
        <div className="flex flex-col gap-6">
          {/* 2 Bundles for eBook Creation */}
          <div className="border rounded-lg ">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#243B2D]">
                  2 Bundles
                  <br />
                  for eBook Creation
                </h2>
                <p className="text-gray-600 max-w-md">
                  Get the exact strategies that helped me earn my first ₱50,000 as a beginner, no fluff, just results.
                </p>
                <div>
                  <Button variant="default" className="bg-[#243B2D] hover:bg-[#1a2c21] text-white rounded-md px-6">
                    Start Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>

          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Person Image */}
              <Card className="bg-[#E5C3AD] h-full min-h-[200px] relative">
                <Image
                  src="/offersImage2.png"
                  alt="Professional woman in white blazer"
                  fill
                  className="object-cover rounded-md"
                />
              </Card>

              {/* Content */}
              <Card className="p-8 flex flex-col justify-center bg-white">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#243B2D]">
                    3 Bundles for
                    <br />
                    Reselling
                  </h2>
                  <p className="text-gray-600">Get the exact strategies that helped me earn my first.</p>
                  <div>
                    <Button
                      variant="default"
                      className="bg-[#243B2D] hover:bg-[#1a2c21] text-white rounded-md px-6 mt-2"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
