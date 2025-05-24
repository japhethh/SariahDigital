import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="py-12 max-w-7xl px-4 mx-auto">
        <div className="flex md:flex-row flex-col gap-3 md:justify-between md:items-start">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logoImages.png" alt="SARIA" width={120} height={60} className="h-auto" />
            </Link>
          </div>

          <div className=" flex flex-row max-md:grid max-md:grid-cols-2 md:grid-cols-3 max-md:gap-4 md:gap-[73px]">

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-green-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-green-800">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/ebook-course" className="text-gray-600 hover:text-green-800">
                    E-book Course
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-green-800">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>

            {/* Course */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Course</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tutorials" className="text-gray-600 hover:text-green-800">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/bundles" className="text-gray-600 hover:text-green-800">
                    Bundles
                  </Link>
                </li>
                <li>
                  <Link href="/free-ebooks" className="text-gray-600 hover:text-green-800">
                    Free E-Books
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Me */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/profile" className="text-gray-600 hover:text-green-800">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/why-i-do" className="text-gray-600 hover:text-green-800">
                    Why I Do What I Do
                  </Link>
                </li>
                <li>
                  <Link href="/journey" className="text-gray-600 hover:text-green-800">
                    My Digital Journey
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="text-gray-600 hover:text-green-800">
                    Results
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21.5 15.5 16 12 21.5 8.5"></path>
                  <path d="M16 12H2"></path>
                  <path d="M22 2 11 13"></path>
                  <path d="m22 2-7 20-4-9-9-4 20-7Z"></path>
                </svg>
              </a>
              <a
                href="https://m.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13 8a3 3 0 0 1-2 2.82V22l3.5-2 3.5 2V10.82A3 3 0 0 1 16 8h-3Z"></path>
                </svg>
              </a>
              <a
                href="https://viber.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M5.5 20A3.5 3.5 0 0 1 2 16.5v-9A3.5 3.5 0 0 1 5.5 4h13A3.5 3.5 0 0 1 22 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-13Z"></path>
                  <path d="M12 12v.01"></path>
                  <path d="M8 12v.01"></path>
                  <path d="M16 12v.01"></path>
                </svg>
              </a>
            </div>
            <div className="mb-4">
              <p className="font-medium">Email Me</p>
              <a href="mailto:SaraDigital@gmail.com" className="text-gray-600 hover:text-green-800">
                SaraDigital@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#243B2D] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>All Rights Reserved. Copyright {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
