# E-Commerce Application Project

## Project Description

This project is a fully functional e-commerce web application developed using React.js. The application enables users to browse products, view detailed descriptions, add items to a shopping cart, and manage their cart before proceeding to checkout. It provides a modern and intuitive UI/UX, designed with responsiveness in mind, ensuring accessibility across devices.

The app is built with a component-based architecture, utilizing React Context API for state management. It includes dynamic routing powered by React Router, ensuring seamless navigation between pages.

The backend data for the product catalog is fetched from the Fake Store API, allowing dynamic updates to the product list.

## Features

- Home Page:
  Displays a list of filtered products (men's and women's clothing).

- Product Details Page:
  Dynamic route for each product that provides detailed information, including an image, description, and price, with the ability to add the product to the cart.

- Cart Management:
  Add, remove, and update quantities of items in the cart.
  Clear the entire cart with a single click.
  Automatic calculation of the total price and item count.

- Sidebar for Cart:
  A slide-in sidebar showing cart items which can be toggled using the cart icon.

- Responsive Design:
  Fully responsive interface with optimal layouts for both mobile and desktop devices.

- Context API State Management:
  Context providers for managing products, cart and sidebar states across the application.

## Technology Stack

- Frontend: React.js
- State Management: React Context API
- Routing: React Router
- CSS Framework: Tailwind CSS
- Icons: React Icons for UI elements
- API Integration: Fake Store API for dynamic product data

## Application Structure and Key Files

The project has a modular structure, organized into distinct files for better maintainability and scalability:

- index.js:
  Application entry point, where providers like ProductProvider, CartProvider and SidebarProvider wrap the App component to enable global state access.

- App.js:
  Contains the main routing logic and global layout components such as Header, Sidebar and Footer.

- Context Providers:
  CartContext.js: Manages the cart state, including adding, removing and updating items.
  ProductContext.js: Fetches and provides product data from the API to other components.
  SidebarContext.js: Manages the visibility and actions related to the sidebar.

- Pages:
  Home.js: Displays the list of products fetched from the API.
  ProductDetails.js: Dynamically displays detailed information about a selected product.

- Components:
  Header.js: Contains the site logo and cart button with an item count badge.
  Sidebar.js: A slide-in sidebar displaying cart items, their quantities and total price.
  CartItem.js: Displays individual items in the cart, including quantity controls.
  Product.js: Represents a product card with an "add to cart" button and quick view functionality.
  Hero.js: Hero section with a promotional banner on the home page.
  Footer.js: Footer with copyright information.

## Installation and Usage

- Clone the Repository:
  git clone <repository-url>
  cd ecommerce-app

- Install Dependencies:
  npm install

- Run the Application:
  npm start
  The app will start on http://localhost:3000.

## Future Enhancements

- Authentication:
  Add user login and signup functionality.
- Backend Integration:
  Replace the fake API with a real backend for managing products, orders and users.
- Payment Gateway:
  Integrate a payment gateway for checkout.
- Wishlist:
  Add functionality to save products to a wishlist.
- Product Reviews:
  Enable users to leave reviews and ratings on products.

## Known issues (Work in progress)

Original styles for products window and scroll in the cart. The heigh for large screens is set to lg:h-[640px] but it couse issues on my laptop screen.
Difault size was set to h-[520px]

useEffect(() => {
window.addEventListener('scroll', () => {
// If scrolled down more than 60 pixels, set `isActive` to true, else false
window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
console.log('Scrolling');
});
}, []);
