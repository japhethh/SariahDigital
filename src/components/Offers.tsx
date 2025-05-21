import { Button } from "@/components/ui/button"
import Image from "next/image"


const Offers = () => {
  return (
    <div className="min-h-auto max-w-7xl mx-auto px-4 lg:px-8 py-6 md:py-10">
      <div className="text-black max-w-md font-medium mb-8">
        Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just results.
      </div>

      {/* Table for larger screens */}
      <div className="hidden md:block overflow-hidden">
        <table className="w-full border-collapse">
          <tbody>
            {/* First Row - Webinars */}
            <tr className="border-b border-gray-200">
              <td className="py-8 pr-8 w-1/2">
                <Image
                  src="/1image.png"
                  className="w-full rounded-lg shadow-sm"
                  alt="Conference room with presentation screen"
                />
              </td>
              <td className="py-8 pl-8 w-1/2">
                <div className="max-w-xl">
                  <div className="flex flex-col gap-2 font-bold text-4xl lg:text-6xl text-[#243B2D]">
                    <h1>2 Free</h1>
                    <h1>Webinars</h1>
                  </div>
                  <p className="text-[#243B2D] my-3">
                    Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just
                    results.
                  </p>
                  <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white">Limited Slots Only</Button>
                </div>
              </td>
            </tr>

            {/* Second Row - eBook Bundles */}
            <tr className="border-b border-gray-200">
              <td className="py-8 pr-8 w-1/2">
                <div className="max-w-xl ml-auto">
                  <div className="flex flex-col gap-2 font-bold text-4xl lg:text-6xl text-[#243B2D]">
                    <h1>2 Bundles for</h1>
                    <h1>eBook Creation</h1>
                  </div>
                  <p className="text-[#243B2D] py-4 my-3">
                    Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just
                    results.
                  </p>
                  <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white">Start Now</Button>
                </div>
              </td>
              <td className="py-8 pl-8 w-1/2">
                <Image src="/1image.png" className="w-full rounded-lg shadow-sm" alt="eBook mockups" />
              </td>
            </tr>

            {/* Third Row - Reselling */}
            <tr>
              <td className="py-8 pr-8 w-1/2">
                <Image
                  src="/1image.png"
                  className="w-full rounded-lg shadow-sm"
                  alt="Conference room with presentation screen"
                />
              </td>
              <td className="py-8 pl-8 w-1/2">
                <div className="max-w-xl">
                  <div className="flex flex-col gap-2 font-bold text-4xl lg:text-6xl text-[#243B2D]">
                    <h1>3 Bundles for </h1>
                    <h1>Reselling</h1>
                  </div>
                  <p className="text-[#243B2D] my-3">
                    Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just
                    results.
                  </p>
                  <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white">Get Started</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile version (card-based layout) */}
      <div className="md:hidden space-y-12">
        {/* First Card - Webinars */}
        <div className="space-y-4">
          <Image
            src="/1image.png"
            className="w-full rounded-lg shadow-sm"
            alt="Conference room with presentation screen"
          />
          <div>
            <div className="flex flex-col gap-2 font-bold text-3xl text-[#243B2D]">
              <h1>2 Free</h1>
              <h1>Webinars</h1>
            </div>
            <p className="text-[#243B2D] my-3">
              Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just results.
            </p>
            <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white w-full">Limited Slots Only</Button>
          </div>
        </div>

        {/* Second Card - eBook Bundles */}
        <div className="space-y-4">
          <Image src="/1image.png" className="w-full rounded-lg shadow-sm" alt="eBook mockups" />
          <div>
            <div className="flex flex-col gap-2 font-bold text-3xl text-[#243B2D]">
              <h1>2 Bundles for</h1>
              <h1>eBook Creation</h1>
            </div>
            <p className="text-[#243B2D] my-3">
              Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just results.
            </p>
            <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white w-full">Start Now</Button>
          </div>
        </div>

        {/* Third Card - Reselling */}
        <div className="space-y-4">
          <Image
            src="/1image.png"
            className="w-full rounded-lg shadow-sm"
            alt="Conference room with presentation screen"
          />
          <div>
            <div className="flex flex-col gap-2 font-bold text-3xl text-[#243B2D]">
              <h1>3 Bundles for </h1>
              <h1>Reselling</h1>
            </div>
            <p className="text-[#243B2D] my-3">
              Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just results.
            </p>
            <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
