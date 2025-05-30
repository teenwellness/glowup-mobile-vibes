
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, Bell, Shield, Palette, Moon, Sun, Volume2 } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);

  const settingsSections = [
    {
      title: "Appearance",
      icon: <Palette className="w-5 h-5" />,
      items: [
        {
          label: "Dark Mode",
          description: "Use dark theme",
          value: darkMode,
          onChange: setDarkMode,
          icon: darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      items: [
        {
          label: "Push Notifications",
          description: "Receive app notifications",
          value: notifications,
          onChange: setNotifications
        },
        {
          label: "Daily Reminders",
          description: "Mood check-in reminders",
          value: dailyReminders,
          onChange: setDailyReminders
        }
      ]
    },
    {
      title: "Audio",
      icon: <Volume2 className="w-5 h-5" />,
      items: [
        {
          label: "Sound Effects",
          description: "App sounds and music",
          value: soundEffects,
          onChange: setSoundEffects
        }
      ]
    }
  ];

  const quickActions = [
    { label: "Privacy Policy", action: () => console.log("Privacy Policy") },
    { label: "Terms of Service", action: () => console.log("Terms") },
    { label: "Help & Support", action: () => console.log("Help") },
    { label: "About GlowUp", action: () => console.log("About") }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-glow-purple/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-glow-cyan/15 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/dashboard')}
            className="text-muted-foreground hover:text-white mr-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="bg-card/60 backdrop-blur-sm border-muted/20 fade-in-up">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-glow-purple">
                  {section.icon}
                  <span className="ml-2">{section.title}</span>
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/20 rounded-xl">
                      <div className="flex items-center flex-1">
                        {item.icon && <span className="mr-3">{item.icon}</span>}
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                      <Switch
                        checked={item.value}
                        onCheckedChange={item.onChange}
                        className="ml-4"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Privacy & Legal */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 mt-6 fade-in-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-glow-cyan">
              <Shield className="w-5 h-5 mr-2" />
              Privacy & Legal
            </h3>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={action.action}
                  className="w-full justify-start text-muted-foreground hover:text-white hover:bg-muted/20"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save Changes */}
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="glow-button bg-gradient-to-br from-glow-purple to-glow-pink hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold"
          >
            Save Changes ✨
          </Button>
        </div>

        {/* App Version */}
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            GlowUp v1.0.0 • Made with 💙 for your wellness journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
