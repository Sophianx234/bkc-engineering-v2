import ContactSection from '@/components/contact-section'
import HeroX from '@/components/hero-x'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Contact Us | BKC Engineering",
  description: "Get in touch with BKC Engineering for information on premium solar panel installations, battery backups, and electrical engineering services across Ghana.",
  keywords: [
    "Contact BKC Engineering",
    "Solar Installation Quote Ghana",
    "Renewable Energy Consultation",
    "Solar Customer Support",
    "Hire Solar Engineers Accra",
    "Solar Maintenance Ghana"
  ],
  openGraph: {
    title: "Contact BKC Engineering | Get Your Free Solar Quote",
    description: "Ready to switch to clean energy? Reach out to our expert team today for consultations, custom installations, and premium after-sales support.",
    url: "https://www.bkcengineering.com/contact", // Replace with your actual URL
    siteName: "BKC Engineering",
    images: [
      {
        // Using a cleaned-up version of your Unsplash hero image URL
        url: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Contact the BKC Engineering Team",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BKC Engineering | Get Your Free Solar Quote",
    description: "Ready to switch to clean energy? Reach out to our expert team today.",
    images: ["https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200&auto=format&fit=crop"],
  },
};

function Page() {
  return (
    <div>
      <HeroX title="Contact Us" titleSecondary="Today" subtitle="Explore our portfolio of successful solar energy installations and the impact we've made in the community." backgroundImage="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <ContactSection/>
    </div>
  )
}

export default Page