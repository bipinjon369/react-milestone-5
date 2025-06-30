import { ProductCard } from "./ProductCard"

interface Product {
  id: number
  name: string
  price: string
  image?: string
  rating?: number
}

interface ProductSectionProps {
  title: string
  products: Product[]
  showRating?: boolean
  backgroundColor?: string
  showViewAll?: boolean
}

export const ProductSection = ({ 
  title, 
  products, 
  showRating = false, 
  backgroundColor = "bg-white",
  showViewAll = false 
}: ProductSectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showRating={showRating} 
            />
          ))}
        </div>
        {showViewAll && (
          <div className="text-center mt-8">
            <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  )
}