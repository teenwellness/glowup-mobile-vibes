
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Camera, Palette } from "lucide-react";

const avatarOptions = [
  "🦄", "🌟", "🎨", "🎭", "🦋", "🌈", "⚡", "🔥"
];

const colorThemes = [
  { name: "Purple Vibes", colors: "from-purple-500 to-pink-500" },
  { name: "Ocean Blue", colors: "from-blue-500 to-cyan-500" },
  { name: "Sunset", colors: "from-orange-500 to-yellow-500" },
  { name: "Forest", colors: "from-green-500 to-emerald-500" },
];

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("🦄");
  const [selectedTheme, setSelectedTheme] = useState(0);

  const handleSaveProfile = () => {
    console.log("Profile saved:", { username, avatar: selectedAvatar, theme: selectedTheme });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-glow-pink/15 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/signup')}
            className="text-muted-foreground hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-8 fade-in-up">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-glow-purple to-glow-pink bg-clip-text text-transparent">
            Create Your Vibe
          </h1>
          <p className="text-muted-foreground">
            Customize your profile and make it uniquely you ✨
          </p>
        </div>

        {/* Username */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Choose your username</h3>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username..."
              className="bg-muted/20 border-muted/40 text-white placeholder:text-muted-foreground text-lg"
            />
          </CardContent>
        </Card>

        {/* Avatar Selection */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              Pick your avatar
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {avatarOptions.map((emoji) => (
                <div
                  key={emoji}
                  onClick={() => setSelectedAvatar(emoji)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedAvatar === emoji
                      ? 'bg-gradient-to-br from-glow-purple to-glow-pink shadow-lg scale-110'
                      : 'bg-muted/20 hover:bg-muted/40'
                  }`}
                >
                  <span className="text-3xl block text-center">{emoji}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Theme Selection */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-yellow/30 mb-8 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Palette className="w-5 h-5 mr-2" />
              Choose your theme
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {colorThemes.map((theme, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedTheme(index)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedTheme === index
                      ? 'ring-2 ring-white/50 scale-105'
                      : ''
                  }`}
                >
                  <div className={`w-full h-16 bg-gradient-to-r ${theme.colors} rounded-xl mb-2`}></div>
                  <p className="text-center font-medium">{theme.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="text-center">
          <Button
            onClick={handleSaveProfile}
            disabled={!username.trim()}
            size="lg"
            className={`glow-button transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold ${
              username.trim()
                ? 'bg-gradient-to-br from-glow-purple to-glow-pink hover:scale-105'
                : 'bg-muted/40 cursor-not-allowed'
            }`}
          >
            Save My Vibe ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
