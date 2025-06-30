import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { BrandSection } from "./BrandSection"
import { ProductSection } from "./ProductSection"
import { StyleSection } from "./StyleSection"
import { Footer } from "./Footer"

const Homepage = () => {
  const newArrivals = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: "$120",
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: "$240",
      image: "/placeholder.svg?height=300&width=250",
      rating: 3.5,
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: "$180",
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: "$130",
      image: "/placeholder.svg?height=300&width=250",
      rating: 4.5,
    },
  ]

  const casualProducts = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      price: "$212",
      image: "/placeholder.svg?height=250&width=200",
    },
    {
      id: 2,
      name: "Courage Graphic T-shirt",
      price: "$145",
      image: "/placeholder.svg?height=250&width=200",
    },
    {
      id: 3,
      name: "Loose Fit Bermuda Shorts",
      price: "$80",
      image: "/placeholder.svg?height=250&width=200",
    },
    {
      id: 4,
      name: "Faded Skinny Jeans",
      price: "$210",
      image: "/placeholder.svg?height=250&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BrandSection />
      <ProductSection 
        title="NEW ARRIVALS" 
        products={newArrivals} 
        showRating={true} 
        showViewAll={true}
      />
      <ProductSection 
        title="CASUAL" 
        products={casualProducts} 
        backgroundColor="bg-gray-50"
      />
      <StyleSection />
      <Footer />
    </div>
  )
}

export default Homepage