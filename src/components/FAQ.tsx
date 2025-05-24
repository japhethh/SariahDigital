import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#243B2D]">Frequently Asked Question</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Build a business, get coached 1:1, and resell proven digital assets.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-md bg-white overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <span className="text-left font-medium text-gray-800">Is this bundle suitable for beginners?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
              The All-In DigBundle Club is designed with beginners in mind. It includes step-by-step tutorials, guides,
              and templates to help you start your digital business with confidence—even if you have no prior
              experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 rounded-md bg-white overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <span className="text-left font-medium text-gray-800">
                Do I need advanced technical skills to use these resources?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
              No, you do not need advanced technical skills. Our resources are designed to be user-friendly with clear
              instructions that anyone can follow, regardless of technical background.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 rounded-md bg-white overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <span className="text-left font-medium text-gray-800">
                Can I really earn 100% profit from reselling the materials?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
              Yes! Once you purchase the bundle, you receive full reselling rights. This means you keep 100% of the
              profits from any sales you make using our materials.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-200 rounded-md bg-white overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <span className="text-left font-medium text-gray-800">
                What platforms can I use to sell these digital products?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
              You can sell these products on various platforms including Etsy, Shopify, your own website, Gumroad,
              SendOwl, and many other digital marketplaces. We provide guidance on setting up your store on multiple
              platforms.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-gray-200 rounded-md bg-white overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <span className="text-left font-medium text-gray-800">
                What kind of support will I receive after purchasing?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
              You all receive comprehensive support including access to our private community, regular Q&A sessions,
              email support, and 1:1 coaching calls to help you implement the strategies and maximize your results.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-gray-200 rounded-md bg-white overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
              <span className="text-left font-medium text-gray-800">
                Can I access the materials immediately after purchase?
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
              Yes, you all get instant access to all materials immediately after your purchase is complete. Everything is
              delivered digitally, so you can start using the resources right away.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ