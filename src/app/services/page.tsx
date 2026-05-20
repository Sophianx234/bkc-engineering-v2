import CoreServicesSection from "@/components/core-services"
import Footer from "@/components/footer"
import HeroX from "@/components/hero-x"
import ServicesHero from "@/components/services-hero"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Services | Solar Installation & Audits | BKC Engineering",
  description: "Reliable, efficient, and customized solar solutions. Explore our core services including solar design, installation, energy audits, and backup power systems in Ghana.",
  keywords: [
    "Solar Services Ghana",
    "Solar Panel Installation",
    "Energy Audits Accra",
    "Backup Power Solutions",
    "Electrical Engineering Services",
    "Solar Maintenance Ghana"
  ],
  openGraph: {
    title: "Our Services | BKC Engineering",
    description: "Reliable, efficient, and customized solar solutions designed to meet your energy needs and support long-term sustainability.",
    url: "https://www.bkcengineering.com/services", // Replace with your actual URL
    siteName: "BKC Engineering",
    images: [
      {
        url: "/images/h-2.jpg", // Syncing perfectly with your HeroX background image!
        width: 1200,
        height: 630,
        alt: "BKC Engineering Solar Services",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | BKC Engineering",
    description: "Reliable, efficient, and customized solar solutions for your home or business.",
    images: ["/images/h-2.jpg"],
  },
};
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
