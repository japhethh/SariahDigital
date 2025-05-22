import { X } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'
const Header = () => {


  const nav = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About Me",
      path: "/about-us"
    },
    {
      name: "Contact Me",
      path: "#"
    },
  ]
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-xs">
        <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex container mx-auto items-center justify-between py-6">
            <div className="w-[150px] h-auto">
              <Image
                src="/logoImages.png"
                width={800}
                height={800}
                alt="Logo"
                className="w-full h-auto"
              />
            </div>
            <div>
              <ul className="flex flex-row md:gap-[75px] max-md:hidden ">
                {
                  nav.map((item) => (
                    <Link href={item.path} key={item.name} className="cursor-pointer">{item.name}</Link>
                  ))
                }


              </ul>

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
