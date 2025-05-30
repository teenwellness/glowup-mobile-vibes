
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, Target, Plus, Trophy, Flame } from "lucide-react";

const currentGoals = [
  {
    id: 1,
    title: "Daily Mood Check-ins",
    description: "Track your mood every day for a week",
    progress: 85,
    streak: 6,
    target: 7,
    badge: "🌟",
    color: "from-glow-purple to-glow-pink"
  },
  {
    id: 2,
    title: "Mindfulness Minutes",
    description: "Complete 10 minutes of meditation",
    progress: 60,
    streak: 6,
    target: 10,
    badge: "🧘‍♀️",
    color: "from-glow-cyan to-glow-green"
  },
  {
    id: 3,
    title: "Gratitude Journal",
    description: "Write 3 things you're grateful for",
    progress: 100,
    streak: 3,
    target: 3,
    badge: "💙",
    color: "from-glow-yellow to-glow-orange"
  }
];

const badges = [
  { name: "First Steps", emoji: "👶", description: "Completed first goal" },
  { name: "Streak Master", emoji: "🔥", description: "7-day streak achieved" },
  { name: "Mindful Soul", emoji: "🧘‍♀️", description: "100 meditation minutes" },
  { name: "Gratitude Guru", emoji: "🙏", description: "30 gratitude entries" }
];

const Goals = () => {
  const navigate = useNavigate();
  const [goals, setGoals] = useState(currentGoals);

  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-glow-cyan/15 rounded-full blur-2xl animate-bounce-gentle"></div>
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
          <div className="text-center">
            <h1 className="text-2xl font-bold flex items-center">
              <Target className="w-6 h-6 mr-2 text-glow-yellow" />
              Your Goals
            </h1>
          </div>
          <Button
            size="sm"
            className="glow-button bg-gradient-to-br from-glow-purple to-glow-pink hover:scale-105 transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Weekly Overview */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Flame className="w-5 h-5 mr-2 text-glow-orange" />
              This Week's Progress
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-glow-cyan">6</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-glow-pink">3/3</div>
                <div className="text-sm text-muted-foreground">Goals Active</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Goals */}
        <div className="space-y-4 mb-8">
          {goals.map((goal) => (
            <Card key={goal.id} className="bg-card/60 backdrop-blur-sm border-muted/20 fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <span className="text-xl">{goal.badge}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                  {goal.progress === 100 && (
                    <Trophy className="w-6 h-6 text-glow-yellow" />
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress: {goal.streak}/{goal.target}</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
                
                {goal.progress === 100 && (
                  <div className="mt-4 p-3 bg-glow-yellow/20 rounded-xl">
                    <p className="text-sm font-medium text-glow-yellow">🎉 Goal completed! Great job!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* New Goal Button */}
        <div className="text-center mb-8">
          <Button
            size="lg"
            className="glow-button bg-gradient-to-br from-glow-cyan to-glow-green hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold"
          >
            Set New Goal 🎯
          </Button>
        </div>

        {/* Badges */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-yellow/30 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-glow-yellow" />
              Your Badges
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-muted/20 rounded-xl hover:bg-muted/40 transition-all duration-300"
                >
                  <span className="text-2xl mr-3">{badge.emoji}</span>
                  <div>
                    <div className="font-medium text-sm">{badge.name}</div>
                    <div className="text-xs text-muted-foreground">{badge.description}</div>
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

export default Goals;
