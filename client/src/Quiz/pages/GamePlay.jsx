import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import questionsData from "../data/questions";
import ScoreBoard from "../ScoreBoard";
import QuestionBox from "../QuestionBox";
import Timer from "../Timer"; // ✅ Timer Component Imported

const GamePlay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, difficulty } = location.state || { category: "Math", difficulty: "Easy" };

  // ✅ Filter Questions based on Selected Category & Difficulty
  const filteredQuestions = questionsData.filter(
    (q) => q.category === category && q.difficulty === difficulty
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // ✅ Timer Starts at 15s

  useEffect(() => {
    if (filteredQuestions.length === 0) {
      navigate("/");
    }
  }, [filteredQuestions, navigate]);

  // ✅ Timer Countdown Effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

      // ⏰ Play warning sound when 5 seconds left
      if (timeLeft === 5) {
        new Audio("/warning.mp3").play();
      }

      return () => clearTimeout(timer);
    } else {
      navigate("/game/result", { state: { score } });
    }
  }, [timeLeft, navigate, score]);

  const handleAnswer = (selectedAnswer) => {
    let newScore = score;

    if (selectedAnswer === filteredQuestions[currentQuestionIndex].answer) {
      newScore += 10; // ✅ Increase score for correct answer
    }

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setScore(newScore);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
      // ⚡ Reset Timer (slightly dynamic for better experience)
      setTimeLeft(difficulty === "Easy" ? 15 : difficulty === "Medium" ? 12 : 10);
    } else {
      setScore(newScore);
      setTimeout(() => {
        navigate("/game/result", { state: { score: newScore } });
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-700 p-5">
      <ScoreBoard score={score} />
      <Timer timeLeft={timeLeft} maxTime={difficulty === "Easy" ? 15 : difficulty === "Medium" ? 12 : 10} /> {/* ✅ Improved Timer */}
      
      {filteredQuestions.length > 0 && (
        <QuestionBox
          question={filteredQuestions[currentQuestionIndex].question}
          options={filteredQuestions[currentQuestionIndex].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default GamePlay;
