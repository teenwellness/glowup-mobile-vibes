
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  });

  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Track Mood",
      description: "How are you feeling today?",
      emoji: "😊",
      color: "from-glow-pink to-glow-orange",
      action: () => navigate('/mood-tracker')
    },
    {
      title: "Quick Challenge",
      description: "3-minute mindfulness",
      emoji: "🧘‍♀️",
      color: "from-glow-cyan to-glow-green",
      action: () => console.log('Start challenge')
    },
    {
      title: "Chat Support",
      description: "Need someone to talk to?",
      emoji: "💬",
      color: "from-glow-purple to-glow-pink",
      action: () => navigate('/chatbot')
    },
    {
      title: "Set Goals",
      description: "Plan your week ahead",
      emoji: "🎯",
      color: "from-glow-yellow to-glow-orange",
      action: () => navigate('/goals')
    }
  ];

  const recentBadges = [
    { name: "First Check-in", emoji: "🌟", earned: true },
    { name: "Mood Tracker", emoji: "😊", earned: true },
    { name: "Goal Setter", emoji: "🎯", earned: false },
    { name: "Community Member", emoji: "👥", earned: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-purple/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-glow-pink/10 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {greeting}, Alex! 👋
            </h1>
            <p className="text-muted-foreground">Ready to continue your wellness journey?</p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/profile')}
              className="text-muted-foreground hover:text-white"
            >
              Profile
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/settings')}
              className="text-muted-foreground hover:text-white"
            >
              Settings
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-glow-purple">7</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm border-glow-pink/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-glow-pink">4.2</div>
              <div className="text-sm text-muted-foreground">Avg Mood</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-glow-cyan">12</div>
              <div className="text-sm text-muted-foreground">Challenges</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/60 backdrop-blur-sm border-glow-green/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-glow-green">85%</div>
              <div className="text-sm text-muted-foreground">Goals Met</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index}
                className="bg-card/60 backdrop-blur-sm border-0 hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={action.action}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{action.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                    <Button 
                      size="sm"
                      className="glow-button bg-gradient-glow hover:scale-105 transition-all duration-300"
                    >
                      Go
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Badges</h2>
          <Card className="bg-card/60 backdrop-blur-sm border-0">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recentBadges.map((badge, index) => (
                  <div 
                    key={index}
                    className={`text-center p-4 rounded-xl transition-all duration-300 ${
                      badge.earned 
                        ? 'bg-gradient-to-br from-glow-purple/20 to-glow-pink/20 border border-glow-purple/30' 
                        : 'bg-muted/20 opacity-50'
                    }`}
                  >
                    <div className="text-3xl mb-2">{badge.emoji}</div>
                    <div className="text-sm font-medium">{badge.name}</div>
                    {badge.earned && (
                      <Badge className="mt-2 bg-glow-purple/20 text-glow-purple border-glow-purple/30">
                        Earned
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-t border-muted/30 p-4">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/dashboard')}
              className="flex flex-col items-center space-y-1 text-glow-purple"
            >
              <span className="text-lg">🏠</span>
              <span className="text-xs">Home</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/mood-tracker')}
              className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-white"
            >
              <span className="text-lg">😊</span>
              <span className="text-xs">Mood</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/community')}
              className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-white"
            >
              <span className="text-lg">👥</span>
              <span className="text-xs">Community</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/profile')}
              className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-white"
            >
              <span className="text-lg">👤</span>
              <span className="text-xs">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
