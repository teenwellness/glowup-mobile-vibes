
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login successful:', formData);
      navigate('/dashboard');
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-40 h-40 bg-glow-cyan/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-glow-green/20 rounded-full blur-lg animate-bounce-gentle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-glow-cyan to-glow-green rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🔑</span>
              </div>
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <p className="text-muted-foreground">Sign in to continue your wellness journey</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-blue-600 hover:bg-blue-700 border-blue-600 text-white hover:scale-105 transition-all duration-300"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <span className="mr-2">🔍</span>
                  Continue with Google
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white hover:scale-105 transition-all duration-300"
                  onClick={() => handleSocialLogin('Discord')}
                >
                  <span className="mr-2">🎮</span>
                  Continue with Discord
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted/30" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or sign in with email</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-muted/20 border-muted/30 focus:border-glow-cyan transition-all duration-300 ${
                      errors.email ? 'border-red-500 animate-shake' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 animate-fade-in-up">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`bg-muted/20 border-muted/30 focus:border-glow-cyan transition-all duration-300 ${
                      errors.password ? 'border-red-500 animate-shake' : ''
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1 animate-fade-in-up">{errors.password}</p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-muted-foreground">
                    <input type="checkbox" className="rounded border-muted/30" />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="text-glow-cyan hover:text-glow-green transition-colors">
                    Forgot password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full glow-button bg-gradient-to-r from-glow-cyan to-glow-green hover:scale-105 transition-all duration-300 text-lg py-6 rounded-xl font-semibold"
                >
                  Sign In ✨
                </Button>
              </form>

              <div className="text-center">
                <p className="text-muted-foreground text-sm">
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate('/signup')}
                    className="text-glow-cyan hover:text-glow-green transition-colors underline"
                  >
                    Create one here
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
