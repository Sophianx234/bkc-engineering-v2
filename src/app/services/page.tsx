import CoreServicesSection from "@/components/core-services"
import Footer from "@/components/footer"
import HeroX from "@/components/hero-x"
import ServicesHero from "@/components/services-hero"

function Page() {
  return (
    <div>
      <HeroX title="Our Services" subtitle=" Reliable, efficient, and customised solar solutions designed to meet your energy needs and support long-term sustainability.
          " backgroundImage="/images/h-2.jpg"/>
      <CoreServicesSection/>
    </div>
  )
}

export default Page
