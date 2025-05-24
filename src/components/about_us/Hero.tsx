import React from 'react'
import Image from "next/image"
import { CircleIcon } from "lucide-react"

const Header = () => {
  return (
    <div>
      <main className="container mx-auto px-4 max-w-6xl py-12">
        {/* Top section with profile and journey */}
        <div className="md:gap-12 md:border-r flex flex-col md:flex-row mb-16 ">
          <div className="space-y-6  md:pr-8 md:w-2/5">
            <div className="flex items-center gap-4 py-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/about/icon.png"
                  alt="Profile picture"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium">I'm Lara Sophia</h2>
                <p className="text-sm text-black">
                  A founder of Saria Digitals, a 19-year-old entrepreneur from the Philippines.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 flex items-center text-[#181818]">
            <div>
              <p className="text-[#181818]">
                My journey to building a six-figure monthly income wasn't easy—but it was worth it. After trying
                numerous ventures that didn't work out, from being a boosting ads manager to running a shoe business, I
                finally discovered the game-changer: digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Why I Do What I Do section */}
        <div>
          <h1 className="text-4xl font-light md:text-5xl mb-3 py-1">Why I Do What I Do</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-base mb-8">
                I know what it's like to feel stuck, frustrated, and overwhelmed. I've been in your shoes, wondering how
                to build a business that works without wasting time and resources on dead ends.
              </p>

              <ul className="space-y-6 ">
                <li className="flex items-start gap-3">
                  <CircleIcon className="h-6 w-6 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-lg font-medium">Break free from the 9-to-5 grind.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleIcon className="h-6 w-6 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-lg font-medium">Create scalable income streams with ease.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleIcon className="h-6 w-6 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-lg font-medium">
                    Build an online business that allows for flexibility, creativity, and financial independence.
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full flex justify-center items-center">

              <p className="w-[250px] -translate-y-20 text-base flex justify-center items-center ">
                Through my resources, you'll find not just tools but also a step-by-step guide to achieving your goals
                without the stress.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Header