
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
import MoodTracker from "./components/MoodTracker";
import ProfileSetup from "./components/ProfileSetup";
import Chatbot from "./components/Chatbot";
import Community from "./components/Community";
import Goals from "./components/Goals";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

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
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/community" element={<Community />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
