import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CartProvider } from "./services/CartContext";
import { ReactQueryProvider } from "./services/ReactQueryProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ReactQueryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  </StrictMode>
);
