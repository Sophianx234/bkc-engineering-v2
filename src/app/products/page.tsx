import HeroX from "@/components/hero-x"
import ProductsSection from "@/components/product-section"

function Page() {
  return (
    <div>
      <HeroX title="Check Our Products" titleSecondary="Today" subtitle="Explore our portfolio of successful solar energy installations and the impact we've made in the community." backgroundImage="https://images.unsplash.com/photo-1583345237708-add35a664d77?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <ProductsSection/>
    </div>
  )
}

export default Page
