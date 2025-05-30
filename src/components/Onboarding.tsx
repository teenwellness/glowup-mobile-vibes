
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const onboardingSteps = [
  {
    emoji: "🌟",
    title: "Welcome to GlowUp",
    description: "Your personal mental wellness companion designed just for you",
    gradient: "from-glow-purple to-glow-pink"
  },
  {
    emoji: "🎯",
    title: "Track Your Mood",
    description: "Daily check-ins help you understand your emotional patterns",
    gradient: "from-glow-pink to-glow-orange"
  },
  {
    emoji: "🏆",
    title: "Set Goals & Grow",
    description: "Achieve milestones and unlock badges as you progress",
    gradient: "from-glow-cyan to-glow-green"
  },
  {
    emoji: "💬",
    title: "Connect & Share",
    description: "Join a supportive community of peers on similar journeys",
    gradient: "from-glow-yellow to-glow-orange"
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/signup');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-glow-pink/10 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 h-screen flex flex-col">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          <div className="text-sm text-muted-foreground">
            {currentStep + 1} of {onboardingSteps.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-muted/20 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-glow h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
          ></div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-md bg-card/60 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className={`w-24 h-24 bg-gradient-to-br ${onboardingSteps[currentStep].gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center animate-scale-in`}>
                <span className="text-4xl">{onboardingSteps[currentStep].emoji}</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
                {onboardingSteps[currentStep].title}
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up">
                {onboardingSteps[currentStep].description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="text-muted-foreground hover:text-white disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'bg-glow-purple' : 'bg-muted/40'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextStep}
            className={`glow-button bg-gradient-glow hover:scale-105 transition-all duration-300 ${
              currentStep === onboardingSteps.length - 1 ? 'animate-glow-pulse' : ''
            }`}
          >
            {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
