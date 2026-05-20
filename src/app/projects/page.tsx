import HeroX from "@/components/hero-x"
import ProjectsSection from "@/components/projects"
import TestimonialsSection from "@/components/testimonials"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Projects & Portfolio | BKC Engineering",
  description: "Explore BKC Engineering's portfolio of successful residential and commercial solar energy installations, battery backups, and electrical projects across Ghana.",
  keywords: [
    "Solar Projects Ghana",
    "Solar Installations Accra",
    "Commercial Solar Ghana",
    "Renewable Energy Portfolio",
    "BKC Engineering Case Studies",
    "Kumasi Solar Projects"
  ],
  openGraph: {
    title: "Our Projects & Portfolio | BKC Engineering",
    description: "Explore our portfolio of successful solar energy installations and see the impact we've made in communities across Ghana.",
    url: "https://www.bkcengineering.com/projects", // Replace with your actual URL
    siteName: "BKC Engineering",
    images: [
      {
        url: "/images/h-3.jpg", // Syncing with your HeroX background image!
        width: 1200,
        height: 630,
        alt: "BKC Engineering Solar Projects Portfolio",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects & Portfolio | BKC Engineering",
    description: "Explore our portfolio of successful solar energy installations across Ghana.",
    images: ["/images/h-3.jpg"],
  },
};
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
