import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Star, Trophy, Gamepad2 } from "lucide-react";

const QuizHomepage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 via-green-400 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
        <CardContent className="p-8 text-center relative">
          <h1 className="text-3xl font-semibold drop-shadow-lg flex items-center justify-center gap-2">
            <Gamepad2 className="w-7 h-7 text-yellow-400" /> IQ Challenges Question
          </h1>
          <p className="text-md mt-3">
            🎯  Challenging quizzes! Sharpen your skills, collect rewards, and climb the leaderboard.
          </p>  
          
          <div className="flex justify-center mt-6 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-black">
              <Trophy className="w-10 h-10 text-yellow-500" />
              <p className="font-bold">Win Rewards</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-black">
              <Star className="w-10 h-10 text-blue-500" />
              <p className="font-bold">Boost IQ</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-black">
              <Rocket className="w-10 h-10 text-red-500" />
              <p className="font-bold">Compete Globally</p>
            </div>
          </div>
          
          <Button
            className="mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-xl px-6 py-3 rounded-xl shadow-lg"
            onClick={() => navigate("/game/select-options")}
          >
            🚀 Start Quiz Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizHomepage;