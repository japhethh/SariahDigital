import { ChevronRight } from "lucide-react"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const PaymentSection = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium text-base sm:text-lg">READY TO BEGIN?</span>
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Your path to financial freedom starts here!
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-4xl leading-relaxed">
            To complete your purchase, select your preferred payment method below and scan the QR code to finalize your
            payment.
          </p>
        </div>

        {/* Payment Details Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Payment Details</h2>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: "GCASH",
              bgColor: "bg-gradient-to-r from-[#5856D6] to-[#6B5CE7]",
              imgSrc: "/gcashImage.png",
              qrSrc: "/gcashQR.png",
              fallbackText: "You can also send your payment directly via GCash:",
              fallbackNumber: "Gcash No: 09352868373",
              accent: "bg-gradient-to-r from-[#5856D6] to-[#6B5CE7]",
            },
            {
              name: "Maya",
              bgColor: "bg-[#181818]",
              imgSrc: "/mayaImage.png",
              qrSrc: "/mayaQR.png",
              fallbackText: "You can also send your payment directly via Maya:",
              fallbackNumber: "Maya No: 09352868373",
              accent: "bg-[#181818]",
            },
            {
              name: "GoTyme Bank",
              bgColor: "bg-[#00C7BE]",
              imgSrc: "/goTimeImage.png",
              qrSrc: "/goTimeQR.png",
              fallbackText: "You can also send your payment directly via GoTyme Bank:",
              fallbackNumber: "GoTyme No: 09352868373",
              accent: "bg-[#00C7BE]",
            },
          ].map((method, idx) => (
            <div key={idx} className="w-full max-w-full sm:max-w-sm mx-auto">
              <div className={`${method.bgColor} rounded-t-lg p-4 sm:p-6 text-white`}>
                <div className="flex justify-between items-center gap-2 sm:gap-4">
                  <Image
                    className="rounded-lg"
                    src={method.imgSrc}
                    width={50}
                    height={50}
                    alt={`${method.name} Image`}
                  />
                  <h1 className="text-base sm:text-xl font-medium">{method.name}</h1>
                  <div className="bg-white p-1 sm:p-2 rounded">
                    <Image src={method.qrSrc} width={50} height={50} alt={`${method.name} QR`} />
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full rounded-lg -translate-y-1">
                <AccordionItem value={method.name.toLowerCase()} className="border-0">
                  <AccordionTrigger className="border border-gray-200 px-4 sm:px-6 bg-white py-4 rounded-b-lg hover:no-underline transition-colors hover:bg-gray-50">
                    <span className="text-gray-700 text-base sm:text-lg font-medium">Not Working?</span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-4 sm:px-6 py-4 rounded-b-lg border border-t-0 border-gray-200">
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm">{method.fallbackText}</p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-base font-bold text-gray-800">{method.fallbackNumber}</p>
                      </div>
                      <div className={`${method.accent} p-3 rounded-md text-white`}>
                        <p className="flex font-normal items-start gap-2 text-sm">
                          <span>📩</span>
                          <span>Once done, kindly send your proof of payment to my official inbox or email.</span>
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-16">
          {/* Complete Purchase Section */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                COMPLETE MY PURCHASE AND GET INSTANT ACCESS!
              </h2>
              <div className="inline-block">
                <div className="bg-red-100 border border-red-300 rounded-lg px-4 py-2">
                  <p className="text-red-800 font-semibold text-sm">NO REFUND POLICY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note Section */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Important Note</h3>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>
                  By completing your payment, you agree to our No Refund Policy. As all digital products offered are
                  digital and instantly accessible upon purchase, we do not offer refunds.
                </p>
                <p>Please ensure that you understand the terms before finalizing your transaction.</p>
                <p>
                  We value transparency and are confident in the quality of our products, designed to help you grow your
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSection
