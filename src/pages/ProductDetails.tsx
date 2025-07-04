import { useState } from 'react'
import { Star, Minus, Plus, Check } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Header } from '../components/Header'

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('Large')
  const [selectedColor, setSelectedColor] = useState('brown')
  const [quantity, setQuantity] = useState(1)

  const sizes = ['Small', 'Medium', 'Large', 'X-Large']
  const colors = [
    { name: 'brown', class: 'bg-amber-800' },
    { name: 'green', class: 'bg-green-800' },
    { name: 'navy', class: 'bg-blue-900' }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Samantha D.',
      rating: 5,
      date: 'August 14, 2023',
      text: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',
      verified: true
    },
    {
      id: 2,
      name: 'Alex M.',
      rating: 4,
      date: 'August 15, 2023',
      text: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
      verified: true
    },
    {
      id: 3,
      name: 'Ethan R.',
      rating: 4,
      date: 'August 16, 2023',
      text: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is just right. I can see the designer\'s touch in every aspect of this shirt.',
      verified: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Home</span>
          <span>/</span>
          <span>Shop</span>
          <span>/</span>
          <span>Men</span>
          <span>/</span>
          <span className="text-black">T-shirts</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/placeholder-product-main.jpg" 
                alt="One Life Graphic T-shirt"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={`/placeholder-product-${i}.jpg`}
                    alt={`Product view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">One Life Graphic T-shirt</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-sm text-gray-600">4.5/5</span>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold">$260</span>
                <span className="text-2xl text-gray-500 line-through">$300</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">-40%</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
              breathable fabric, it offers superior comfort and style.
            </p>

            {/* Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3">Select Colors</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full ${color.class} border-2 ${
                      selectedColor === color.name ? 'border-black' : 'border-gray-300'
                    } flex items-center justify-center`}
                  >
                    {selectedColor === color.name && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-medium mb-3">Choose Size</h3>
              <div className="flex space-x-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full border ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex space-x-4">
              <div className="flex items-center bg-gray-100 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-200 rounded-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-200 rounded-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button className="flex-1 bg-black text-white py-4 rounded-full hover:bg-gray-800">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-8">
              <h2 className="text-2xl font-bold">All Reviews</h2>
              <span className="text-gray-600">(451)</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="rounded-full">
                <img src="/filter-icon.svg" alt="Filter" className="w-4 h-4 mr-2" />
                Latest
              </Button>
              <Button className="bg-black text-white rounded-full">
                Write a Review
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <img src="/more-options.svg" alt="More" className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="font-semibold">{review.name}</span>
                  {review.verified && (
                    <img src="/verified-icon.svg" alt="Verified" className="w-4 h-4" />
                  )}
                </div>
                <p className="text-gray-600 mb-3">{review.text}</p>
                <span className="text-sm text-gray-500">Posted on {review.date}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full px-8">
              Load More Reviews
            </Button>
          </div>
        </div>

        {/* You might also like */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={`/placeholder-related-${i}.jpg`}
                    alt={`Related product ${i}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold mb-2">Polo with Contrast Trims</h3>
                <div className="flex items-center mb-2">
                  {[...Array(4)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600 ml-2">4.0/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold">$212</span>
                  <span className="text-gray-500 line-through">$242</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">-20%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}