import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const SelectOptions = () => {
  const [category, setCategory] = useState("Math");
  const [difficulty, setDifficulty] = useState("Easy");
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game/gameplay", { state: { category, difficulty } });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-900 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">🎯 IQ Challenger</h1>
          <p className="text-gray-600 mb-5">Select your category & difficulty level</p>

          {/* Category Selection */}
          <div className="mb-4 text-left">
            <label className="block font-semibold text-lg mb-2">📚 Select Category:</label>
            <select
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400 text-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {["Math", "Science", "GK", "English", "Nepali", "Computer", "History", "Geography", "Economics", "Physics", "Chemistry", "Biology"].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Selection */}
          <div className="mb-6 text-left">
            <label className="block font-semibold text-lg mb-2">⚡ Select Difficulty:</label>
            <select
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400 text-lg"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              {['Easy', 'Medium', 'Hard'].map((diff) => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>

          {/* Start Game Button */}
          <button
            className="w-full px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold rounded-lg transition duration-300 text-lg shadow-md"
            onClick={startGame}
          >
            🚀 Start Game
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectOptions;
