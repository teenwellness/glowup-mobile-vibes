
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

        {/* Main Authentication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          {/* Start Journey */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 hover:border-glow-purple/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/onboarding')}>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-glow-purple to-glow-pink rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Start Your Journey</h3>
              <p className="text-muted-foreground mb-4">Begin with our interactive onboarding experience</p>
              <Button className="glow-button bg-gradient-to-br from-glow-purple to-glow-pink hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Sign In */}
          <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 hover:border-glow-cyan/60 transition-all duration-300 hover:scale-105 cursor-pointer fade-in-up"
                onClick={() => navigate('/login')}>
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-glow-cyan to-glow-green rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🔑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Welcome Back</h3>
              <p className="text-muted-foreground mb-4">Continue your wellness journey</p>
              <Button className="glow-button bg-gradient-to-br from-glow-cyan to-glow-green hover:scale-105 transition-all duration-300">
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* App Features Preview */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6">What awaits you in GlowUp</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4 border border-muted/20">
              <div className="text-3xl mb-2">😊</div>
              <div className="text-sm font-medium">Mood Tracking</div>
            </div>
            <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4 border border-muted/20">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-sm font-medium">Goal Setting</div>
            </div>
            <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4 border border-muted/20">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-sm font-medium">Community</div>
            </div>
            <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4 border border-muted/20">
              <div className="text-3xl mb-2">💬</div>
              <div className="text-sm font-medium">AI Support</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/onboarding')}
            size="lg"
            className="glow-button bg-gradient-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold animate-glow-pulse"
          >
            Start Your GlowUp Journey ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
