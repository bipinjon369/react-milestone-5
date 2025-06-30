export const BrandSection = () => {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"]

  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="text-white text-2xl font-bold">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}