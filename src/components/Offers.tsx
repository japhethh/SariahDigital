"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const Offers = () => {
  // Animation variants
  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

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
            <motion.tr
              className="border-b border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerAnimation}
            >
              <td className="py-8 pr-8 w-1/2">
                <motion.div variants={imageAnimation}>
                  <Image
                    src="/1image.png"
                    width={200}
                    height={0}
                    className="w-full rounded-lg shadow-sm"
                    alt="Conference room with presentation screen"
                  />
                </motion.div>
              </td>
              <td className="py-8 pl-8 w-1/2">
                <motion.div className="max-w-xl" variants={imageAnimation}>
                  <div className="flex flex-col gap-2 font-bold text-4xl lg:text-6xl text-[#243B2D]">
                    <h1>2 Free</h1>
                    <h1>Webinars</h1>
                  </div>
                  <p className="text-[#243B2D] my-3">
                    Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just
                    results.
                  </p>
                  <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white">Limited Slots Only</Button>
                </motion.div>
              </td>
            </motion.tr>

            {/* Second Row - eBook Bundles */}
            <motion.tr
              className="border-b border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerAnimation}
            >
              <td className="py-8 pr-8 w-1/2">
                <div className="max-w-xl ml-auto">
                  <motion.div variants={imageAnimation}>
                    <div className="flex flex-col gap-2 font-bold text-4xl lg:text-6xl text-[#243B2D]">
                      <h1>2 Bundles for</h1>
                      <h1>eBook Creation</h1>
                    </div>
                    <p className="text-[#243B2D] py-4 my-3">
                      Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just
                      results.
                    </p>
                    <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white">Start Now</Button>
                  </motion.div>
                </div>
              </td>
              <td className="py-8 pl-8 w-1/2">
                <motion.div variants={imageAnimation}>
                  <Image
                    src="/1image.png"
                    width={200}
                    height={0}
                    className="w-full rounded-lg shadow-sm"
                    alt="eBook mockups"
                  />
                </motion.div>
              </td>
            </motion.tr>

            {/* Third Row - Reselling */}
            <motion.tr
              className="border-b border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerAnimation}
            >
              <td className="py-8 pr-8 w-1/2">
                <motion.div variants={imageAnimation}>
                  <Image
                    src="/1image.png"
                    width={200}
                    height={0}
                    className="w-full rounded-lg shadow-sm"
                    alt="Conference room with presentation screen"
                  />
                </motion.div>
              </td>
              <td className="py-8 pl-8 w-1/2">
                <motion.div className="max-w-xl" variants={imageAnimation}>
                  <div className="flex flex-col gap-2 font-bold text-4xl lg:text-6xl text-[#243B2D]">
                    <h1>3 Bundles for </h1>
                    <h1>Reselling</h1>
                  </div>
                  <p className="text-[#243B2D] my-3">
                    Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just
                    results.
                  </p>
                  <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white">Get Started</Button>
                </motion.div>
              </td>
            </motion.tr>
          </tbody>
        </table>
      </div>

      {/* Mobile version (card-based layout) */}
      <div className="md:hidden space-y-12">
        {/* First Card - Webinars */}
        <div className="space-y-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageAnimation}>
            <Image
              src="/1image.png"
              width={200}
              height={0}
              className="w-full rounded-lg shadow-sm"
              alt="Conference room with presentation screen"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageAnimation}>
            <div className="flex flex-col gap-2 font-bold text-3xl text-[#243B2D]">
              <h1>2 Free</h1>
              <h1>Webinars</h1>
            </div>
            <p className="text-[#243B2D] my-3">
              Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just results.
            </p>
            <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white w-full">Limited Slots Only</Button>
          </motion.div>
        </div>

        {/* Second Card - eBook Bundles */}
        <div className="space-y-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageAnimation}>
            <Image
              src="/1image.png"
              width={400}
              height={0}
              className="w-full rounded-lg shadow-sm"
              alt="eBook mockups"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageAnimation}>
            <div className="flex flex-col gap-2 font-bold text-3xl text-[#243B2D]">
              <h1>2 Bundles for</h1>
              <h1>eBook Creation</h1>
            </div>
            <p className="text-[#243B2D] my-3">
              Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just results.
            </p>
            <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white w-full">Start Now</Button>
          </motion.div>
        </div>

        {/* Third Card - Reselling */}
        <div className="space-y-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageAnimation}>
            <Image
              src="/1image.png"
              width={400}
              height={0}
              className="w-full rounded-lg shadow-sm"
              alt="Conference room with presentation screen"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageAnimation}>
            <div className="flex flex-col gap-2 font-bold text-3xl text-[#243B2D]">
              <h1>3 Bundles for </h1>
              <h1>Reselling</h1>
            </div>
            <p className="text-[#243B2D] my-3">
              Get the exact strategies that helped me earn my first ₱50,000 as a beginner — no fluff, just results.
            </p>
            <Button className="bg-[#243B2D] hover:bg-[#1a2c21] rounded-sm text-white w-full">Get Started</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Offers
