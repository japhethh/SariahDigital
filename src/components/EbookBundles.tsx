import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bundles = [
  {
    title: "First Bundle",
    price: "₱2,000.00",
    subtitle: "For: Beginners on a budget",
    description: "Get started with essential tools and resources without breaking the bank.",
    color: "bg-cyan-500",
    inclusions: [
      "Full course for eBook creation",
      "Editable Canva templates (personal + business use)",
      "Access to my recorded and upcoming webinars",
      "Official community group access",
    ],
  },
  {
    title: "Second Bundle",
    price: "₱4,000.00",
    subtitle: "For: Action-takers who want fast results",
    description: "Designed to help you achieve quick and effective success.",
    color: "bg-violet-600",
    inclusions: [
      "Everything in the first bundle",
      "Full course on Sales Psychology",
      "Personalized feedback & selling strategies",
      "Additional Canva templates",
      "DFY funnel/landing page",
      "1:1 coaching call (2 sessions, 30–60 mins each)",
    ],
  },
  {
    title: "Third Bundle",
    price: "₱2,000.00",
    subtitle: "For: Beginners on a budget",
    description: "Get started with essential tools and resources without breaking the bank.",
    color: "bg-cyan-500",
    inclusions: [
      "Full course for eBook creation",
      "Editable Canva templates (personal + business use)",
      "Access to my recorded and upcoming webinars",
      "Official community group access",
    ],
  },
];

export default function EbookBundles() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-medium text-gray-500">
          Choose Your Path to eBook Success
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
          Direct & Benefit-Focused
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Whether you’re starting on a budget or ready to scale fast — we’ve got the perfect bundle for your journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <div className={`${bundle.color} rounded-t-2xl p-4 text-white text-lg font-semibold`}>{bundle.title}</div>
              <CardContent className="p-6 space-y-4">
                <p className="text-cyan-600 text-sm">Starting at</p>
                <h2 className="text-3xl font-bold text-gray-800">{bundle.price}</h2>
                <div className="bg-gray-100 p-4 rounded-md text-left">
                  <p className="font-medium text-gray-700">{bundle.subtitle}</p>
                  <p className="text-gray-600 text-sm mt-1">{bundle.description}</p>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Inclusions:</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
                    {bundle.inclusions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full">
                  Try this Bundle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
