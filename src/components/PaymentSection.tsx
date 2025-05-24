import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, Camera } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const paymentMethods = [
    {
      id: "gcash",
      name: "GCASH",
      logo: "/gcashImage.png",
      bgGradient: "bg-gradient-to-r from-blue-600 to-purple-600",
      instructionBg: "bg-purple-600",
      qrPlaceholder: "gcashQR.png",
    },
    {
      id: "maya",
      name: "Maya",
      logo: "/mayaImage.png", // Update this to your actual Maya logo path
      bgGradient: "bg-gray-900",
      instructionBg: "bg-gray-900",
      qrPlaceholder: "mayaQR.png", // Update this to your actual Maya QR path
    },
    {
      id: "cotyme",
      name: "GoTyme Bank",
      logo: "/cotymeImage.png", // Update this to your actual GoTyme logo path
      bgGradient: "bg-teal-500",
      instructionBg: "bg-teal-500",
      qrPlaceholder: "cotymeQR.png", // Update this to your actual GoTyme QR path
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 ">
      <div >
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gray-700 font-medium text-lg">READY TO BEGIN?</span>
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your path to financial freedom starts here!
          </h1>

          <p className="text-gray-600 text-lg max-w-4xl">
            To complete your purchase, select your preferred payment method below and scan the QR code to finalize your
            payment.
          </p>
        </div>

        {/* Payment Details Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Details</h2>

          {/* Payment Method Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <Card key={method.id} className=" rounded-2xl shadow-lg overflow-hidden">
                {/* Payment Method Header */}
                <div className={`${method.bgGradient} text-white p-6 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className=" bg-opacity-20 rounded-lg p-2 flex items-center justify-center min-w-[40px] h-10">
                      {method.logo.endsWith(".png") ? (
                        <Image
                          src={method.logo || "/placeholder.svg"}
                          alt={`${method.name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      ) : (
                        <span className="font-bold text-sm">
                          {method.logo === "maya" ? <span className="text-xs">maya</span> : method.logo}
                        </span>
                      )}
                    </div>
                    <span className="font-semibold text-lg">{method.name}</span>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                    {method.qrPlaceholder.endsWith(".png") ? (
                      <Image
                        src={`/${method.qrPlaceholder}`}
                        alt={`${method.name} QR Code`}
                        width={56}
                        height={56}
                        className="object-contain rounded"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-0.5">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-800 rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Accordion for Not Working Section */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${method.id}`} className="border-none">
                      <AccordionTrigger className="text-gray-700 font-medium hover:no-underline py-2 px-0">
                        Not Working?
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div className="space-y-4">
                          {/* Alternative Payment Text */}
                          <p className="text-gray-600 text-sm">You can also send your payment directly via GCash:</p>

                          {/* GCash Number */}
                          <p className="font-semibold text-gray-800">Gcash No: 09352868373</p>

                          {/* Instruction Box */}
                          <div className={`${method.instructionBg} text-white rounded-lg p-4 flex items-start gap-3`}>
                            <Camera className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">
                              Once done, kindly send your proof of payment to my official inbox or email.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
