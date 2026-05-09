import AboutShowcase from "@/components/about-showcase"
import ApproachSection from "@/components/approach-section"
import HeroX from "@/components/hero-x"
import TeamSection from "@/components/our-team"
import ServicesHero from "@/components/services-hero"
import SolarEnvironmentFeatures from "@/components/solar-environment"

function Page() {
  return (
    <div>
      <HeroX title="What to Know" titleSecondary="About Us" subtitle="Explore our portfolio of successful solar energy installations and the impact we've made in the community." backgroundImage="/images/h-4.jpg"/>
      
      <AboutShowcase/>
      <SolarEnvironmentFeatures/>
      <ApproachSection/>
      <TeamSection/>

    </div>
  )
}

export default Page
