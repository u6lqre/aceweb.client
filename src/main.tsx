import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./app/Router";
import "./index.css";
import AuthProvider from "./features/auth/provider/AuthProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
