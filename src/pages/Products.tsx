import { useState } from 'react'
import '../styles/Products.css'

// Product data
const products = [
  {
    id: 1,
    name: 'MacBook Pro Alternative',
    category: 'computers',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Our premium laptop with a sleek design, powerful performance, and a stunning display.'
  },
  {
    id: 2,
    name: 'iPhone Inspired',
    category: 'phones',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A smartphone that combines elegant design with cutting-edge technology for everyday use.'
  },
  {
    id: 3,
    name: 'Smart Watch Pro',
    category: 'wearables',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Track your fitness, receive notifications, and stay connected in style with our smartwatch.'
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    category: 'audio',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1606741965509-222301c349b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Crystal clear sound with active noise cancellation and a comfortable, secure fit.'
  },
  {
    id: 5,
    name: 'Ultra HD Monitor',
    category: 'computers',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1619953942547-233eab5a70d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Experience stunning visuals with our 4K monitor featuring true-to-life colors and wide viewing angles.'
  },
  {
    id: 6,
    name: 'Tablet Pro',
    category: 'tablets',
    price: '$599',
    image: 'https://images.unsplash.com/photo-1543069190-f687504227cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'The perfect balance of productivity and entertainment with a beautiful display and long battery life.'
  }
]

// Available categories for filtering
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'computers', name: 'Computers' },
  { id: 'phones', name: 'Phones' },
  { id: 'tablets', name: 'Tablets' },
  { id: 'wearables', name: 'Wearables' },
  { id: 'audio', name: 'Audio' }
]

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory)
    
  return (
    <div className="products-page">
      <div className="container">
        {/* Header Section */}
        <section className="products-header">
          <h1 className="page-title">Our Products</h1>
          <p className="subtitle">
            Discover our collection of Apple-inspired products designed with elegance and functionality in mind.
          </p>
        </section>
        
        {/* Category Filter */}
        <section className="category-filter">
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="products-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                <button className="apple-button">Learn More</button>
              </div>
            </div>
          ))}
        </section>
        
        {/* Call to Action */}
        <section className="product-cta">
          <div className="cta-content">
            <h2 className="cta-title">Can't Find What You're Looking For?</h2>
            <p className="cta-subtitle">Our team is constantly working on new products. Let us know what you need.</p>
            <button className="apple-button">Contact Us</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products 