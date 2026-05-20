import AboutShowcase from "@/components/about-showcase"
import ApproachSection from "@/components/approach-section"
import HeroX from "@/components/hero-x"
import TeamSection from "@/components/our-team"
import SolarEnvironmentFeatures from "@/components/solar-environment"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | BKC Engineering",
  description: "Learn about BKC Engineering's mission, explore our portfolio of successful solar energy installations, and meet the expert team driving renewable energy in Ghana.",
  keywords: [
    "About BKC Engineering",
    "Solar Energy Experts Ghana",
    "Renewable Energy Portfolio",
    "Solar Installation Team Accra",
    "Clean Energy Company"
  ],
  openGraph: {
    title: "About BKC Engineering | Our Mission & Team",
    description: "Explore our portfolio of successful solar energy installations and the impact we've made in the community.",
    url: "https://www.bkcengineering.com/about", // Replace with your actual URL
    siteName: "BKC Engineering",
    images: [
      {
        url: "/images/h-4.jpg", // Using your hero image as the sharing banner!
        width: 1200,
        height: 630,
        alt: "BKC Engineering Solar Installations",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BKC Engineering | Our Mission & Team",
    description: "Meet the expert team behind our premium solar and backup power solutions.",
    images: ["/images/h-4.jpg"],
  },
};

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
