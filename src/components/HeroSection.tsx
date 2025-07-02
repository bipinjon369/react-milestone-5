export const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-220px)] py-16 px-4 bg-[url('hero_background.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="space-y-8">
            <h2 className="font-alfa text-hero-header-text">
              FIND CLOTHES
              <br />
              THAT MATCH YOUR
              <br />
              STYLE PERFECTLY
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Browse through our diverse range of meticulously crafted garments,
              <br />
              designed to bring out your individuality and cater to your sense of style.
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
        </div>
      </div>
    </section>
  )
}