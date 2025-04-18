const ScoreBoard = ({ score = 0 }) => {
    return (
      <div className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Score: {score}</h2>
      </div>
    );
  };
  
  export default ScoreBoard;
  