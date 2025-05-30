
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Calendar, TrendingUp } from "lucide-react";

const moodEmojis = [
  { emoji: "😢", label: "Very Sad", value: 1, color: "from-blue-500 to-blue-600" },
  { emoji: "😔", label: "Sad", value: 2, color: "from-indigo-500 to-indigo-600" },
  { emoji: "😐", label: "Neutral", value: 3, color: "from-gray-500 to-gray-600" },
  { emoji: "😊", label: "Happy", value: 4, color: "from-green-500 to-green-600" },
  { emoji: "😄", label: "Very Happy", value: 5, color: "from-yellow-500 to-yellow-600" },
];

const MoodTracker = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [moodNote, setMoodNote] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleMoodLog = () => {
    if (selectedMood) {
      // Here you would typically save to a database
      console.log("Mood logged:", { mood: selectedMood, note: moodNote, date: new Date() });
      setIsLogged(true);
      setTimeout(() => {
        setIsLogged(false);
        setSelectedMood(null);
        setMoodNote("");
      }, 2000);
    }
  };

  const selectedMoodData = moodEmojis.find(mood => mood.value === selectedMood);

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
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-white"
            >
              <Calendar className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-white"
            >
              <TrendingUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 fade-in-up">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-glow-purple to-glow-pink bg-clip-text text-transparent">
            How are you feeling?
          </h1>
          <p className="text-muted-foreground">
            Track your daily emotions and build awareness
          </p>
        </div>

        {/* Mood Selection */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Choose your mood</h3>
            <div className="grid grid-cols-5 gap-4">
              {moodEmojis.map((mood) => (
                <div
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`flex flex-col items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedMood === mood.value
                      ? `bg-gradient-to-br ${mood.color} shadow-lg scale-110`
                      : 'bg-muted/20 hover:bg-muted/40'
                  }`}
                >
                  <span className="text-3xl mb-2 animate-bounce-gentle">{mood.emoji}</span>
                  <span className="text-xs text-center font-medium">{mood.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mood Note */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">What's on your mind? (Optional)</h3>
            <Textarea
              value={moodNote}
              onChange={(e) => setMoodNote(e.target.value)}
              placeholder="Share what's making you feel this way..."
              className="bg-muted/20 border-muted/40 text-white placeholder:text-muted-foreground resize-none min-h-[100px]"
            />
          </CardContent>
        </Card>

        {/* Log Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleMoodLog}
            disabled={!selectedMood || isLogged}
            size="lg"
            className={`glow-button transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold ${
              selectedMood && !isLogged
                ? `bg-gradient-to-br ${selectedMoodData?.color} hover:scale-105`
                : 'bg-muted/40 cursor-not-allowed'
            }`}
          >
            {isLogged ? (
              <span className="flex items-center">
                ✓ Mood Logged!
              </span>
            ) : (
              "Log My Mood"
            )}
          </Button>
        </div>

        {/* Today's Summary */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-yellow/30 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-glow-yellow rounded-full mr-2"></span>
              Today's Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-glow-cyan">3</div>
                <div className="text-sm text-muted-foreground">Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-glow-pink">😊</div>
                <div className="text-sm text-muted-foreground">Average</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MoodTracker;
