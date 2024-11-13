# ecommerce-store

Explanation:

App.js: This is the main application component that contains the layout and routing logic. It includes a Header, Sidebar, and Footer, which are shared across all pages. Routes for the Home and ProductDetails pages are set up using React Router.

Home.js: This page displays a list of products. It gets the products data from the global context using useContext.

ProductDetails.js: This is a placeholder component for individual product details. It can be expanded to display more detailed information about a specific product.

ProductContext.js: This context provides the product data fetched from an external API (fakestoreapi.com).

ProductProvider: This component wraps the entire application (in index.js) makes the products available globally and provides access to the products state through ProductContext.

index.js: The entry point where the App component is rendered into the DOM, wrapped in ProductProvider so that product data is accessible throughout the app.

---

Summary of how useContext works:

1. Context Creation: Use React.createContext() to create a context object. This context will hold the shared state and allow components to subscribe to it.

2. Provider Component: Use the context's Provider component to make the state or value available to all child components. The Provider wraps around the parts of the app where the state should be accessible.

3. Consume: In child components, use the useContext hook to access the context value. Child components re-renders automatically when the state changes.

########

Original styles for products window and scroll. The heigh for large screnns is set to lg:h-[640px] but it couse issues on my laptop screen.

<div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
