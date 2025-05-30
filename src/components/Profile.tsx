
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Edit, Settings, Trophy, Target, Heart } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Days Active", value: "42", icon: "🔥", color: "text-glow-orange" },
    { label: "Goals Achieved", value: "8", icon: "🎯", color: "text-glow-green" },
    { label: "Badges Earned", value: "12", icon: "🏆", color: "text-glow-yellow" },
    { label: "Community Posts", value: "5", icon: "💬", color: "text-glow-cyan" }
  ];

  const recentActivity = [
    { action: "Completed daily mood check", time: "2 hours ago", icon: "😊" },
    { action: "Earned 'Mindful Soul' badge", time: "Yesterday", icon: "🧘‍♀️" },
    { action: "Shared in community", time: "2 days ago", icon: "💬" },
    { action: "Set new wellness goal", time: "3 days ago", icon: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-glow-pink/15 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/dashboard')}
            className="text-muted-foreground hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/settings')}
            className="text-muted-foreground hover:text-white"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {/* Profile Header */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 mb-6 fade-in-up">
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-glow-purple to-glow-pink rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">🦄</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Sarah Glow ✨</h2>
            <p className="text-muted-foreground mb-4">Wellness Warrior since March 2024</p>
            <Button
              size="sm"
              className="glow-button bg-gradient-to-br from-glow-cyan to-glow-green hover:scale-105 transition-all duration-300"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border-muted/20 fade-in-up">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Mood */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-pink/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-glow-pink" />
              Today's Mood
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-3xl mr-3">😊</span>
                <div>
                  <div className="font-medium">Happy</div>
                  <div className="text-sm text-muted-foreground">Feeling productive today!</div>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-white"
              >
                Update
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-glow-cyan" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center p-3 bg-muted/20 rounded-xl">
                  <span className="text-xl mr-3">{activity.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
