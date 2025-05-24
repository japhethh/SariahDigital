"use client"

import { ArrowDownRight } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

const pathSystemData = {
  createEbook: {
    title: "Create your own eBook",
    inclusions: [
      "Learn to write, design, and sell from scratch",
      "Ideal for creatives, freelancers, coaches",
      "Long-term brand building",
    ],
  },
  resellBundles: {
    title: "Resell DFY Digital Bundles",
    inclusions: [
      "Sell ready-made eBooks like the Digibook Kit, Premium Luxe, and All-In Bundle",
      "Ideal for working students, working professionals, OFWs",
      "Faster launch with zero product creation",
    ],
  },
}

const PathCard = ({
  title,
  inclusions,
  className,
}: {
  title: string
  inclusions: string[]
  className?: string
}) => (
  <div
    className={`border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between ${className || ""}`}
  >
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">Inclusions:</p>
      <div className="flex flex-col gap-3 text-sm font-medium">
        {inclusions.map((inclusion, index) => (
          <div key={index} className="flex gap-2 items-start">
            <ArrowDownRight className="h-4 w-4 text-gray-700 mt-1" />
            <span className="text-gray-800 leading-snug">{inclusion}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="pt-6 text-right">
      <Button
        variant="outline"
        className="rounded-full bg-white py-2 px-6 border-gray-800 text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200 text-sm"
      >
        Inquire Now
      </Button>
    </div>
  </div>
)

const Inquire = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className=" w-full">
        {/* Header */}
        <header className="mb-10 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">2-PATH SYSTEM</h2>
          <p className="text-lg text-gray-600 mt-2">
            Build a business, get coached 1:1, and resell proven digital assets.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1.8fr] gap-6 items-stretch">
          {/* Left Path */}
          <PathCard
            title={pathSystemData.createEbook.title}
            inclusions={pathSystemData.createEbook.inclusions}
          />

          {/* Image */}
          <div className="relative aspect-[3/4] lg:aspect-auto w-full max-h-[500px] rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/inquireImage.png"
              alt="Professional woman with laptop - Digital business coaching"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Right Path */}
          <PathCard
            title={pathSystemData.resellBundles.title}
            inclusions={pathSystemData.resellBundles.inclusions}
          />
        </div>
      </div>
    </section>
  )
}

export default Inquire
