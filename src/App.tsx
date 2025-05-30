
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Onboarding from "./components/Onboarding";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mood-tracker" element={<div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center"><h1 className="text-2xl">Mood Tracker - Coming Soon! 😊</h1></div>} />
          <Route path="/profile-setup" element={<div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center"><h1 className="text-2xl">Profile Setup - Coming Soon! 🎨</h1></div>} />
          <Route path="/chatbot" element={<div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center"><h1 className="text-2xl">Chatbot Support - Coming Soon! 💬</h1></div>} />
          <Route path="/community" element={<div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center"><h1 className="text-2xl">Community - Coming Soon! 👥</h1></div>} />
          <Route path="/goals" element={<div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center"><h1 className="text-2xl">Goal Setting - Coming Soon! 🎯</h1></div>} />
          <Route path="/profile" element={<div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center"><h1 className="text-2xl">Profile - Coming Soon! 👤</h1></div>} />
          <Route path="/settings" element={<div className="min-h-screen bg-gradient-dark text-white flex items-center justify-center"><h1 className="text-2xl">Settings - Coming Soon! ⚙️</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
