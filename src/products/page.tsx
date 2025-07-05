import { Navbar } from "@/components/navbar"

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="p-6 rounded-lg border bg-card">
              <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
              <p className="text-muted-foreground mb-4">Description of product {item} with all its amazing features.</p>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
