"use client"

import { Marquee } from "./magicui/marquee";

const credentials = [
  {
    icon: "💫",
    text: "College 20 Business",
  },
  {
    icon: "💰",
    text: "Canva & Digital Products",
  },
  {
    icon: "🍷",
    text: "Trusted by 2.7k clients worldwide",
  },
  {
    icon: "🍀",
    text: "Founder: @_itsmexsophia",
  },
]

function CredentialCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center space-x-2 mx-15  bg-white  whitespace-nowrap">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium text-black">{text}</span>
    </div>
  )
}

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background  rotate-2 translate-y-0">
      <Marquee className="[--duration:30s] ">
        {credentials.map((credential, idx) => (
          <CredentialCard key={idx} icon={credential.icon} text={credential.text} />
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueeDemo
