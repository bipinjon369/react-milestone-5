import { Star } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  image?: string
  rating?: number
}

interface ProductCardProps {
  product: Product
  showRating?: boolean
}

export const ProductCard = ({ product, showRating = false }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      {showRating && product.rating && (
        <div className="flex items-center mb-2">
          {renderStars(product.rating)}
          <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
        </div>
      )}
      <p className="text-xl font-bold">{product.price}</p>
    </div>
  )
}