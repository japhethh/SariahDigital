"use client"

import Image from "next/image";
import { useState } from "react";

const paymentMethods = [
  {
    name: "GCASH",
    color: "bg-[#4B4DED]",
    qr: "/gcash-qr.png",
    fallback: "Gcash No: 09352868373",
    accent: "bg-[#4B4DED]",
  },
  {
    name: "Maya",
    color: "bg-black",
    qr: "/maya-qr.png",
    fallback: "Gcash No: 09352868373",
    accent: "bg-black",
  },
  {
    name: "Go Tyme Bank",
    color: "bg-[#00C2A8]",
    qr: "/gotyme-qr.png",
    fallback: "Gcash No: 09352868373",
    accent: "bg-[#00C2A8]",
  },
];



const PaymentSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700 font-medium">READY TO BEGIN?</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-2">
          Your path to financial freedom starts here!
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          To complete your purchase, select your preferred payment method below and scan the QR code to finalize your payment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentMethods.map((method, index) => (
          <div key={index} className="border rounded-xl overflow-hidden shadow-md">
            {/* Header */}
            <div className={`flex justify-between items-center ${method.color} px-4 py-3`}>
              <h3 className="text-white font-semibold">{method.name}</h3>
              <div className="bg-white rounded p-1">
                <Image
                  src={method.qr}
                  alt={`${method.name} QR`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Dropdown Fallback */}
            <div className="px-4 py-4">
              <button
                className="text-sm text-gray-700 font-medium flex items-center justify-between w-full"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                Not Working?
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>

              {openIndex === index && (
                <div className="mt-3 text-sm text-gray-600">
                  <p className="mb-2">
                    You can also send your payment directly via GCash:
                  </p>
                  <p className="font-semibold text-gray-800 mb-3">{method.fallback}</p>
                  <div className={`text-white text-xs p-3 rounded-md ${method.accent}`}>
                    📩 Once done, kindly send your proof of payment to my official inbox or email.
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PaymentSection
