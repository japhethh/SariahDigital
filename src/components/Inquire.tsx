import { Check } from "lucide-react"

const Inquire = () => {
  return (
    <div className="py-16 bg-gray-50 ">
      <div className=" max-w-7xl  mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">2-PATH SYSTEM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build a business, get coached 1:1, and resell proven digital assets.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-8 items-stretch">
          {/* Left Card */}
          <div className="w-full md:w-2/5 bg-[#243B2D] text-white rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0">
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-5">Create your own eBook</h3>

              <div className="mb-5">
                <p className="text-gray-300 mb-4">Inclusions:</p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-700 flex items-center justify-center mr-3">
                      <Check size={16} />
                    </div>
                    <span>Learn to write, design, and sell from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-700 flex items-center justify-center mr-3">
                      <Check size={16} />
                    </div>
                    <span>Ideal for creatives, freelancers, coaches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-700 flex items-center justify-center mr-3">
                      <Check size={16} />
                    </div>
                    <span>Long-term brand building</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto text-right">
                <button className="inline-block bg-white text-[#243B2D] px-[24px] py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full md:w-3/5 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">Resell DFY Digital Bundles</h3>

              <div className="mb-5">
                <p className="text-gray-500 mb-4">Inclusions:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">
                      Sell ready-made eBooks like the Digibook Kit, Premium Luxe, and All-In Bundle
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">Ideal for working students, working professionals, OFWs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">Faster launch with zero product creation</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto text-right">
                <button className="inline-block bg-[#243B2D] text-white px-[24px] py-2 rounded-full font-medium hover:bg-green-800 transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inquire
