import { X } from "lucide-react"

const Header = () => {

  const nav = [
    {
      name: "Home",
      path: "#"
    },
    {
      name: "About Me",
      path: "#"
    },
    {
      name: "Contact Me",
      path: "#"
    },
  ]
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white shadow-xs">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex container mx-auto items-center justify-between py-6">
            <div>
              <img src="/logoImages.png" alt="Logo" />
            </div>
            <div>
              <ul className="flex flex-row md:gap-[75px] max-md:hidden ">
                {
                  nav.map((item, index) => (
                    <li key={index} className="cursor-pointer">{item.name}</li>
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
