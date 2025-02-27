# TomiStore E-commerce Application

This document details the TomiStore e-commerce application, a React-based project utilizing Tailwind CSS for styling and the Fake Store API for product data.

![TomiStore Screenshot](./docs/amiresponsive.png)
[Link to the deployed site](https://tomi-store.netlify.app/)

## Overview

TomiStore is a responsive e-commerce application providing a streamlined shopping experience.  Users can browse products, add items to a cart, view cart contents, adjust quantities, and remove items.  The application is built with a focus on clean code, maintainability, and a user-friendly interface.

## Deployment

The TomiStore application is deployed on Netlify and can be accessed at:
https://tomi-store.netlify.app/


## Features

*   **Product Browsing:**  Displays a catalog of products fetched from the Fake Store API, including titles, images, descriptions, and prices.  Users can filter products (implementation planned).
*   **Add to Cart:**  Users can add products to their shopping cart.  The application handles updates to the cart state and provides feedback (toast notifications) to confirm successful actions.
*   **Cart Management:** A dedicated cart page allows users to view their cart contents, adjust item quantities using increment/decrement buttons, and remove items.
*   **Responsive Design:** The application adapts seamlessly to different screen sizes and devices.
*   **Navbar:** A persistent navigation bar displays the cart count and provides links to the home page and a dedicated cart view.
*   **Footer:** A sticky footer provides copyright information and links to social media accounts.

## Technology Stack


*   **Frontend Framework:** [React.js](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **API:** Fake Store API ([https://fakestoreapi.com/](https://fakestoreapi.com/))
*   **State Management:** Context API (Simple state management)
*   **Routing:** React Router
*   [Toastify](https://fkhadra.github.io/react-toastify/introduction): For displaying notifications to the user
*   [Netlify](https://www.netlify.com/): A cloud platform for automated deployment and hosting of web applications

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tomdu3/ecommerce-cart.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd ecommerce-cart
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

## Directory Structure
```
.
├── docs
├── public
│   └── images
│       └── favicon_io
└── src
    ├── assets
    ├── components
    └── context
```
*   `./src/components`: Contains reusable React components (Navbar, ProductCard, Cart, etc.).
*   `./src/context`: Contains the context provider for managing cart state.
*   `./public/images`: Contains images used in the application.
*   `./src/App.jsx`: Main application component.
*   `./src/index.js`: Entry point of the application.


## Future Enhancements

*   **Advanced Filtering and Search:** Implement filtering and searching capabilities to allow users to easily find specific products.
*   **Checkout Functionality:**  Integrate a secure checkout process.
*   **User Authentication:** Implement user accounts and authentication.
*   **Payment Gateway Integration:** Integrate with a payment gateway (e.g., Stripe, PayPal).
*   **Order History:** Allow users to view their order history.
*   **Improved Error Handling:**  Implement more comprehensive error handling for API requests and other potential issues.
*   **Advanced State Management:** Transition to a more robust state management solution (Redux, Zustand, or Jotai) for larger applications.
*   **Unit and Integration Testing:** Comprehensive tests for application logic.
*   **Deployment Optimization:** Optimize the application for faster loading times and improved performance.


## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Copyright

Copyright © 2025 TomDcoding. All rights reserved.

 
