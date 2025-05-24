"use client"

import { Badge } from "@/components/ui/badge"

const WebinarSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-white py-12">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Video Embed */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Free Webinar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-5 max-w-xl text-center md:text-left mx-auto md:mx-0">
          <Badge variant="outline" className="bg-violet-600 text-white hover:bg-violet-700 text-sm px-3 py-1">
            Lorem Ipsum
          </Badge>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            Webinar Sample
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#243B2D] leading-snug">
            Lorem Ipsum is a <br className="hidden sm:block" />
            Simply Dummy Text
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WebinarSection
