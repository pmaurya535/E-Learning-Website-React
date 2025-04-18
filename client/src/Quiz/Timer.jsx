const Timer = ({ timeLeft }) => {
  return (
    <div className="relative flex items-center justify-center px-6 py-3 rounded-full shadow-lg bg-gradient-to-r from-red-600 to-orange-500 text-white animate-pulse">
      <h3 className="text-xl font-extrabold tracking-wide">
        ⏳ Time Left: <span className="text-yellow-300">{timeLeft}s</span>
      </h3>
      <div className="absolute inset-0 bg-white opacity-10 blur-xl rounded-full"></div>
    </div>
  );
};

export default Timer;
