import React, { useContext } from 'react';
// Importing the product context to access product data
import { ProductContext } from '../contexts/ProductContext';
// Importing components
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  // Get products from the ProductContext (access the value of ProductContext)
  const { products } = useContext(ProductContext);

  // Get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  /* console.log(filteredProducts); */

  return (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
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
