import AfterSalesSupport from "@/components/after-sales-support";
import BenefitsSection from "@/components/benefits";
import FAQSection from "@/components/faq-section";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import IndustriesWeServe from "@/components/industries-we-serve";
import ProjectVideoSection from "@/components/project-video";
import ProjectsGallery from "@/components/projects-gallery";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
    <HeroSection/>
    <FeaturesSection/>
    <ServicesSection/>
    <ProjectsGallery/>
    <BenefitsSection/>
    <ProjectVideoSection/>
    <IndustriesWeServe/>
    <AfterSalesSupport/>
    <FAQSection/>
          </div>
  );
}
