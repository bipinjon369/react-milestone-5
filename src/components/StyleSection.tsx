interface StyleCategory {
  name: string
  image: string
}

export const StyleSection = () => {
  const styleCategories: StyleCategory[] = [
    { name: "Casual", image: "/placeholder.svg?height=200&width=300" },
    { name: "Formal", image: "/placeholder.svg?height=200&width=300" },
    { name: "Party", image: "/placeholder.svg?height=200&width=300" },
    { name: "Gym", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">BROWSE BY STYLE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styleCategories.map((category, index) => (
            <div key={index} className="relative group cursor-pointer rounded-lg overflow-hidden">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}