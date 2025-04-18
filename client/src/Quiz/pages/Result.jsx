import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const finalScore = location.state?.score || 0;
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setDisplayScore((prev) => {
        if (prev < finalScore) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return finalScore;
        }
      });
    }, 20); // ✅ Smooth Animation (Faster)

    return () => clearInterval(interval); // ✅ Cleanup on Unmount
  }, [finalScore]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-10">
      <h1 className="text-5xl font-bold text-white mb-4">🎯 Game Over 🎯</h1>
      <h2 className="text-3xl text-white mt-3 font-semibold">
        Your Score: <span className="text-yellow-300">{displayScore}</span>
      </h2>
      <button
        className="mt-6 bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition text-lg shadow-lg"
        onClick={() => navigate("/game/select-options")}
      >
        🔄 Play Again
      </button>
      <button
        className="mt-6 bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition text-lg shadow-lg"
        onClick={() =>
          (window.location.href = "http://localhost:5173")
        }
      >
        🔙 Home page
      </button>
    </div>
  );
};

export default ResultPage;
