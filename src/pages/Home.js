// The Home component represents the homepage of the e-commerce application
// It renders the product list, filtering to specific categories (men’s and women’s clothing)
import React, { useContext } from 'react';
// Product context to access product data
import { ProductContext } from '../contexts/ProductContext';
// Components
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  // Accessing the `products` array from the ProductContext
  const { products } = useContext(ProductContext);

  // Filtering products to get only men's & women's clothing categories
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  // Rendering the Hero section and the product grid
  return (
    <div>
      {/* The Hero component displays a banner or promotional content at the top */}
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          {/* Creating a responsive grid layout for displaying the products */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {/* Mapping through the filtered products to render each product using the Product component */}
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
