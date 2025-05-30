
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Send, Sparkles } from "lucide-react";

const quickReplies = [
  "I'm feeling anxious 😰",
  "Need motivation 💪",
  "Can't sleep 😴",
  "Feeling lonely 💙",
  "Happy today! 😊",
  "Need advice 🤔"
];

const sampleMessages = [
  { type: 'bot', message: "Hey there! I'm your wellness buddy 🤖✨ How are you feeling today?", time: "2:30 PM" },
  { type: 'user', message: "I'm feeling a bit stressed about school", time: "2:31 PM" },
  { type: 'bot', message: "I hear you! School stress is totally normal. Let's try a quick breathing exercise together. Ready? 🌸", time: "2:31 PM" }
];

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(sampleMessages);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        type: 'user' as const,
        message: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          type: 'bot' as const,
          message: "Thanks for sharing! I'm here to support you. Would you like to try a mindfulness exercise? 🧘‍♀️",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-glow-cyan/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-glow-pink/15 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>

      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-muted/20">
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
            <h1 className="text-xl font-bold flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-glow-cyan" />
              Wellness Bot
            </h1>
            <p className="text-xs text-muted-foreground">Always here for you 💙</p>
          </div>
          <div className="w-16"></div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} fade-in-up`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-br from-glow-purple to-glow-pink text-white'
                    : 'bg-card/60 backdrop-blur-sm text-white'
                }`}
              >
                <p className="text-sm">{msg.message}</p>
                <p className="text-xs opacity-70 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="p-4 border-t border-muted/20">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => handleQuickReply(reply)}
                className="bg-muted/20 hover:bg-muted/40 text-xs rounded-full"
              >
                {reply}
              </Button>
            ))}
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="bg-muted/20 border-muted/40 text-white placeholder:text-muted-foreground"
            />
            <Button
              onClick={handleSendMessage}
              className="glow-button bg-gradient-to-br from-glow-cyan to-glow-green hover:scale-105 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
