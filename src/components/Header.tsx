"use client"
import Image from "next/image"
import { PersonalInfoDialog } from "./personal-info-dialog"


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
            <div className="flex items-center gap-4">
              <PersonalInfoDialog />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
