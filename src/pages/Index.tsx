
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-glow-pink/20 rounded-full blur-lg animate-bounce-gentle"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-glow-cyan/15 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-glow-purple to-glow-pink bg-clip-text text-transparent">
            GlowUp
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your mental wellness journey starts here ✨
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Onboarding */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 hover:border-glow-purple/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/onboarding')}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-purple to-glow-pink rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Your Journey</h3>
              <p className="text-muted-foreground text-sm">Begin with our interactive onboarding</p>
            </CardContent>
          </Card>

          {/* Sign Up */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-pink/30 hover:border-glow-pink/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/signup')}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-pink to-glow-orange rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-muted-foreground text-sm">Join the GlowUp community</p>
            </CardContent>
          </Card>

          {/* Login */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 hover:border-glow-cyan/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/login')}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-cyan to-glow-green rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign In</h3>
              <p className="text-muted-foreground text-sm">Welcome back to your journey</p>
            </CardContent>
          </Card>

          {/* Dashboard */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-yellow/30 hover:border-glow-yellow/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/dashboard')}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-yellow to-glow-orange rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-muted-foreground text-sm">Your personalized wellness hub</p>
            </CardContent>
          </Card>

          {/* Mood Tracker */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-green/30 hover:border-glow-green/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/mood-tracker')}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-green to-glow-cyan rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mood Tracker</h3>
              <p className="text-muted-foreground text-sm">Track your daily emotions</p>
            </CardContent>
          </Card>

          {/* Community */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 hover:border-glow-purple/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/community')}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-purple to-glow-pink rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground text-sm">Connect with others</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/onboarding')}
            size="lg"
            className="glow-button bg-gradient-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold"
          >
            Start Your GlowUp Journey ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
