import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function OptionToday() {
  return (
    <section className="w-full py-12 bg-white flex flex-col justify-center h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl font-medium tracking-tight text-gray-900 mb-4">Your Options Today</h2>
              <p className="text-xl text-gray-600 mt-4">
                From Struggles to Success: How Digital Products Transformed My Life
              </p>
            </div>

            <Card className="border-0 shadow-none">
              <CardContent className="p-0 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-white font-medium">
                    #1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Option 1: Stay where you are.</h3>
                    <p className="text-gray-600 mt-1">
                      Keep feeling stuck, overwhelmed, and unsure of how to start earning online.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-white font-medium">
                    #2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Option 2: Invest in your future with Saria Digitals.
                    </h3>
                    <p className="text-gray-600 mt-1">
                      For just PHP 4,998, you'll gain everything you need to create a sustainable, passive income
                      stream.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center md:justify-center">
            <Image
              src="/about/optionTodayImage.png"
              alt="Professional in white blazer"
              width={400}
              height={500}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
