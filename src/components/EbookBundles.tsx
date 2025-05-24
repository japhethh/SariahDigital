"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Component() {
  const bundles = [
    {
      id: 1,
      name: "First Bundle",
      price: "₱2,000.00",
      bgColor: "bg-teal-500",
      textColor: "text-teal-500",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
      target: "For: Beginners on a budget",
      description: "Get started with essential tools and help create without breaking the bank.",
      inclusions: [
        "Full course for eBook creation",
        "Editable Canva templates (personal + business use)",
        "Access to my recorded and upcoming webinars",
        "Official community group access",
      ],
    },
    {
      id: 2,
      name: "Second Bundle",
      price: "₱4,000.00",
      bgColor: "bg-purple-600",
      textColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      target: "For: Action-takers who want fast results",
      description: "Designed to help you achieve quick and effective success.",
      inclusions: [
        "Everything in the first bundle",
        "Full course on Sales Psychology",
        "Personalized feedback & scaling strategies",
        "Additional Canva templates",
        "DFY funnel/landing page",
        "1:1 coaching call (2 sessions, 30-60 mins each)",
      ],
    },
    {
      id: 3,
      name: "Third Bundle",
      price: "₱2,000.00",
      bgColor: "bg-teal-500",
      textColor: "text-teal-500",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
      target: "For: Beginners on a budget",
      description: "Get started with essential tools and help create without breaking the bank.",
      inclusions: [
        "Full course for eBook creation",
        "Editable Canva templates (personal + business use)",
        "Access to my recorded and upcoming webinars",
        "Official community group access",
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 px-4">
          <p className="text-gray-600 text-base sm:text-lg mb-4">Choose Your Path to eBook Success</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Direct & Benefit-Focused
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Whether you're starting on a budget or ready to scale fast — we've got the perfect bundle for your journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {bundles.map((bundle, index) => (
            <Card
              key={bundle.id}
              className="relative overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-[1.01]"
            >
              {/* Header */}
              <div className={`absolute top-0 left-0 w-full ${bundle.bgColor} text-white text-center py-4 z-10`}>
                <h3 className="text-lg sm:text-xl font-semibold tracking-wide">{bundle.name}</h3>
              </div>

              <CardContent className={`mt-5 pt-20 ${index === 1 ? "p-6 sm:p-8 pb-12" : "p-4 sm:p-6"}`}>
                {/* Price Row */}
                <div className="mb-4 flex justify-between items-center">
                  <p className={`${bundle.textColor} text-sm sm:text-md mb-1`}>Starting at</p>
                  <p className={`font-bold ${bundle.textColor} ${index === 1 ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                    {bundle.price}
                  </p>
                </div>

                {/* Target & Description */}
                <div className="mb-4 bg-gray-50 rounded-lg p-3">
                  <p className="text-purple-600 font-medium text-sm mb-2">{bundle.target}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{bundle.description}</p>
                </div>

                {/* Inclusions */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Inclusions:</h4>
                  <ul className="space-y-2">
                    {bundle.inclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="bg-teal-500 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div>
                  <Button
                    className={`w-full ${bundle.buttonColor} text-white rounded-full font-medium transition-colors ${index === 1 ? "py-4 text-base sm:text-lg" : "py-3 text-sm sm:text-base"
                      }`}
                  >
                    Try this Bundle
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
