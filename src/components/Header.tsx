"use client"
import { X } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'


const Header = () => {


  return (
    <div>
      <header className="sticky top-0 z-50  bg-white ">
        <div className="w-full mx-auto px-5 sm:px-3 lg:px-15">
          <div className="flex container mx-auto items-center justify-between py-4">
            <div className="w-[90px] h-auto">
              <Image
                src="/logoImages.png"
                width={800}
                height={800}
                alt="Logo"
                className="w-full h-auto"
              />
            </div>
            <div>
              <Link href="/getstarted" className="cursor-pointer py-2 px-6 bg-[#243B2D] rounded-full text-white">Get Started</Link>

              <div className="md:hidden">
                <X />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
