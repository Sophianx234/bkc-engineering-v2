import HeroX from "@/components/hero-x"
import ProjectsSection from "@/components/projects"
import TestimonialsSection from "@/components/testimonials"

function Page() {
  return (
    <div>
      <HeroX title="Our Projects" subtitle="Explore our portfolio of successful solar energy installations and the impact we've made in the community." backgroundImage="/images/h-3.jpg"/>
      <ProjectsSection/>
      <TestimonialsSection/>
    </div>
  )
}

export default Page
