import DigitalJourney from "@/components/about_us/DigitalJourney";
import Header from "@/components/about_us/Hero";
import OptionToday from "@/components/about_us/OptionToday";

const page = () => {
    return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 max-md:px-4">
      <Header />
      <DigitalJourney />
      <OptionToday />
    </div>
  )
}

export default page