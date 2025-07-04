import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState, AppDispatch } from "../store";
import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { BrandSection } from "./BrandSection"
import { ProductSection } from "./ProductSection"
import { StyleSection } from "./StyleSection"
import { Footer } from "./Footer"
import { fetchList } from '../store/slices/productSlice'

const Homepage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState) => state.products.data)
  useEffect(() => {
    const url: string =  'https://api.escuelajs.co/api/v1/products'
    dispatch(fetchList(url)) 
  })
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BrandSection />
      {/* <ProductSection 
        title="NEW ARRIVALS" 
        // products={newArrivals} 
      />
      <ProductSection 
        title="CASUAL" 
        // products={casualProducts} 
      /> */}
      <StyleSection />
      <Footer />
    </div>
  )
}

export default Homepage