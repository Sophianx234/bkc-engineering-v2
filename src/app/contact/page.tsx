import ContactSection from '@/components/contact-section'
import HeroX from '@/components/hero-x'

function Page() {
  return (
    <div>
      <HeroX title="Contact Us" titleSecondary="Today" subtitle="Explore our portfolio of successful solar energy installations and the impact we've made in the community." backgroundImage="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <ContactSection/>
    </div>
  )
}

export default Page