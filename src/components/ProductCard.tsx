import { Star } from "lucide-react"

interface Product {
  id: number
  title: string
  price: string
  images: string[]
}

interface ProductCardProps {
  product: Product
  showRating?: boolean
}

export const ProductCard = ({ product, showRating = false }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-100 rounded-[20px] overflow-hidden mb-4">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.title}
          className="w-[298px] h-[295px] rounded-[20px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-product-card-title mb-2 truncate" title={product.title}>{product.title}</h3>
      <p className="text-product-card-price">{'$' + product.price}</p>
    </div>
  )
}