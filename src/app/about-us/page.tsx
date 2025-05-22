import Image from "next/image"
import { CircleIcon } from "lucide-react"

const page = () => {
  return (
    <div className='max-h-screen'>
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/diverse-person-portrait.png"
                  alt="Profile picture"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium">I'm Lara Sophia</h2>
                <p className="text-sm text-muted-foreground">
                  A founder of Saria Digitals, a 19-year-old entrepreneur from the Philippines.
                </p>
              </div>
            </div>

            <p className="text-base">
              My journey to building a six-figure monthly income wasn't easy—but it was worth it. After trying numerous
              ventures that didn't work out, from being a boosting ads manager to running a shoe business, I finally
              discovered the game-changer: digital products.
            </p>
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl font-bold md:text-5xl">Why I Do What I Do</h1>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-base">
                  I know what it's like to feel stuck, frustrated, and overwhelmed. I've been in your shoes, wondering how
                  to build a business that works without wasting time and resources on dead ends.
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-2">
                    <CircleIcon className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-base font-medium">Break free from the 9-to-5 grind.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleIcon className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-base font-medium">Create scalable income streams with ease.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircleIcon className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-base font-medium">
                      Build an online business that allows for flexibility, creativity, and financial independence.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base">
                  Through my resources, you'll find not just tools but also a step-by-step guide to achieving your goals
                  without the stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page