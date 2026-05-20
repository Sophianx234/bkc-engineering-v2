import HeroX from "@/components/hero-x"
import ProductsSection from "@/components/product-section"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Products | Premium Solar Equipment | BKC Engineering",
  description: "Explore BKC Engineering's curated selection of  solar panels, smart hybrid inverters, lithium-ion energy storage, and solar water heaters.",
  keywords: [
    "Solar Panels Ghana",
    "Hybrid Inverters Accra",
    "Lithium-ion Solar Batteries",
    "Solar Water Heaters Ghana",
    "Buy Solar Equipment Accra",
    "Tier 1 Solar Panels"
  ],
  openGraph: {
    title: "Premium Solar Products & Equipment | BKC Engineering",
    description: "Discover our premium selection of high-efficiency solar panels, smart inverters, and durable battery storage solutions.",
    url: "https://www.bkcengineering.com/products", // Replace with your actual URL
    siteName: "BKC Engineering",
    images: [
      {
        // Using the upgraded version of your Unsplash hero image URL
        url: "https://images.unsplash.com/photo-1583345237708-add35a664d77?q=80&w=1200&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "BKC Engineering Premium Solar Products",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Solar Products & Equipment | BKC Engineering",
    description: "Discover our premium selection of high-efficiency solar panels, smart inverters, and durable battery storage solutions.",
    images: ["https://images.unsplash.com/photo-1583345237708-add35a664d77?q=80&w=1200&auto=format&fit=crop"],
  },
};
function Page() {
  return (
    <div>
      <HeroX title="Check Our Products" titleSecondary="Today" subtitle="Explore our portfolio of successful solar energy installations and the impact we've made in the community." backgroundImage="https://images.unsplash.com/photo-1583345237708-add35a664d77?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <ProductsSection/>
    </div>
  )
}

export default Page
