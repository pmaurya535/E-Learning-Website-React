import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://atmamalik.co.in/uploads/2024/12/understanding-the-differences-elearning-vs-online-learning.webp",
  "https://cdn.growtha.dev/6622e01a23f4ca686b3b8aa3/6765d93d4795ad78e532befd_tmp9w8he9pk.jpeg",
  "https://media.licdn.com/dms/image/v2/D4D12AQHv85cnxLpYkg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734607584921?e=2147483647&v=beta&t=nSzdgSWTcbe6oj-5LReEY-lJ3TNfZWAupjyW_fjwUd4",
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-28 px-6 text-center text-white shadow-lg transition-all duration-1000"
      style={{ backgroundImage: `url('${images[currentImage]}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Unlock Your Potential with Expert-Led Courses
        </h1>
        <p className="text-lg text-gray-200 dark:text-gray-400 mb-10">
          Master new skills and advance your career with our carefully curated courses.
        </p>

        <form
          onSubmit={searchHandler}
          className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-md overflow-hidden max-w-xl mx-auto mb-8"
        >
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Courses"
            className="flex-grow border-none focus:ring-0 px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
          <Button
            type="submit"
            className="bg-blue-700 dark:bg-blue-800 text-white px-6 py-4 rounded-r-full hover:bg-blue-800 dark:hover:bg-blue-900 transition duration-300"
          >
            Search
          </Button>
        </form>

        <Button
          onClick={() => navigate(`/course/search?query`)}
          className="bg-white dark:bg-gray-800 text-blue-700 dark:text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
        >
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
