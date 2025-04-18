import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to IQ Challenger</h1>
      <Link to="/play" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Start Game
      </Link>
    </div>
  );
};

export default Home;
