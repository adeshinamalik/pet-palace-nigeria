
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ServiceDirectory from "./pages/ServiceDirectory";
import Adoption from "./pages/Adoption";
import UserAccount from "./pages/UserAccount";
import Community from "./pages/Community";
import AccessGroups from "./pages/AccessGroups";
import GroupProfiles from "./pages/GroupProfiles";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/service-directory" element={<ServiceDirectory />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/community" element={<Community />} />
            <Route path="/access-groups" element={<AccessGroups />} />
            <Route path="/access-groups/:groupType" element={<GroupProfiles />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
