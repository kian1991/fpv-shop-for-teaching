import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./page/home";
import { Products } from "./page/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductAdd } from "./page/product-add";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-add",
        element: <ProductAdd />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  </StrictMode>,
);
