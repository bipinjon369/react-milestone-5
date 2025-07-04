import { useEffect } from "react"
const useApi = '../services/useApi'
import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { BrandSection } from "./BrandSection"
import { ProductSection } from "./ProductSection"
import { StyleSection } from "./StyleSection"
import { Footer } from "./Footer"

const Homepage = () => {
  const { getAPI } = useApi()
  useEffect(() => {
    const newArrivals = getAPI('products?offset=0&limit=10')
    const casualProducts = getAPI('products?offset=10&limit=10')
  })
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BrandSection />
      <ProductSection 
        title="NEW ARRIVALS" 
        products={newArrivals} 
      />
      <ProductSection 
        title="CASUAL" 
        products={casualProducts} 
      />
      <StyleSection />
      <Footer />
    </div>
  )
}

export default Homepage