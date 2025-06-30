export const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              FIND CLOTHES
              <br />
              THAT MATCH YOUR
              <br />
              STYLE PERFECTLY
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Browse through our diverse range of meticulously crafted garments, designed
              to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Shop Now
            </button>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-gray-600">International Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2,000+</div>
                <div className="text-gray-600">High-Quality Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">30,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Fashion models"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}