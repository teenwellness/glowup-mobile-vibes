
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Users, MessageCircle, Heart, Share } from "lucide-react";

const communityPosts = [
  {
    id: 1,
    author: "Sarah M. 🌸",
    time: "2 hours ago",
    content: "Just completed my first week of daily meditation! Feeling so much more centered. Anyone else trying mindfulness? 🧘‍♀️",
    likes: 24,
    comments: 8,
    liked: false
  },
  {
    id: 2,
    author: "Alex K. ⚡",
    time: "4 hours ago",
    content: "Had a tough day but remembered to use the breathing techniques from the app. Small wins matter! 💪✨",
    likes: 31,
    comments: 12,
    liked: true
  },
  {
    id: 3,
    author: "Jordan L. 🦋",
    time: "6 hours ago",
    content: "Sharing my mood tracker progress - it's amazing to see the patterns! Thanks to this community for the support 💙",
    likes: 18,
    comments: 5,
    liked: false
  }
];

const Community = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(communityPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

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
              <Users className="w-6 h-6 mr-2 text-glow-pink" />
              Community
            </h1>
          </div>
          <div className="w-16"></div>
        </div>

        {/* Community Stats */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-purple/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-glow-purple">1.2K</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-glow-pink">345</div>
                <div className="text-sm text-muted-foreground">Posts Today</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-glow-cyan">89%</div>
                <div className="text-sm text-muted-foreground">Positive Vibes</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Post */}
        <Card className="bg-card/60 backdrop-blur-sm border-glow-cyan/30 mb-6 fade-in-up">
          <CardContent className="p-6">
            <Button
              size="lg"
              className="w-full glow-button bg-gradient-to-br from-glow-purple to-glow-pink hover:scale-105 transition-all duration-300"
            >
              Share Your Story ✨
            </Button>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="bg-card/60 backdrop-blur-sm border-muted/20 fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-glow-purple to-glow-pink rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">👤</span>
                  </div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-xs text-muted-foreground">{post.time}</div>
                  </div>
                </div>
                
                <p className="mb-4 leading-relaxed">{post.content}</p>
                
                <div className="flex items-center space-x-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      post.liked ? 'text-red-400 hover:text-red-300' : 'text-muted-foreground hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                    <span>{post.likes}</span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-white"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-white"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
