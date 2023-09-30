import React from "react";
import ReactDOM from "react-dom/client";
import "../src/sass/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <WishlistProvider>
    <CartProvider>

      <App />
    </CartProvider>
      </WishlistProvider>
   
    </ProductProvider>
  </React.StrictMode>
);
