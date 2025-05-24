"use client"

import { Badge } from "@/components/ui/badge"

const WebinarSection = () => {
  return (
    <section className="h-dvh flex items-center bg-white">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-12 items-center">
        {/* Video Embed */}
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Free Webinar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 max-w-lg xl:max-w-xl">
          <Badge variant="outline" className="bg-violet-600 text-white hover:bg-violet-700">
            Lorem Ipsum
          </Badge>
          <h3 className="text-lg font-semibold text-gray-800">Webinar Sample</h3>
          <h2 className="text-5xl font-bold text-[#243B2D] leading-tight">
            Lorem Ipsum is a <br />
            Simply Dummy Text
          </h2>
          <p className="text-gray-700 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>


    </section>
  )
}

export default WebinarSection
