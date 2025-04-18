import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  { id: 1, title: "React for Beginners", category: "Web Development", rating: 4.8, enrolled: 1200, image: "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg" },
  { id: 2, title: "CCNA Networking Essentials", category: "Networking", rating: 4.7, enrolled: 950, image: "https://c8.alamy.com/comp/MKJ0E5/3d-rendering-computer-network-global-internet-concept-MKJ0E5.jpg" },
  { id: 3, title: "Cybersecurity Fundamentals", category: "Cybersecurity", rating: 4.9, enrolled: 800, image: "https://www.europeanfiles.eu/wp-content/uploads/2019/03/cyber-security-be-header-629x375-1.jpeg" },
  { id: 4, title: "Python Programming", category: "Software Development", rating: 4.6, enrolled: 1100, image: "https://intelligence-artificielle.com/wp-content/uploads/2022/05/Python-programming.png" },
  { id: 5, title: "Data Science Bootcamp", category: "Data Science", rating: 4.9, enrolled: 1300, image: "https://datasciencemehadhipatnam.com/wp-content/uploads/2022/11/37-The-Techniques-Team-and-Tools-for-Effective-Data-Science.jpg" },
  { id: 6, title: "Linux Administration", category: "Operating System", rating: 4.8, enrolled: 900, image: "https://core2web-do-data.blr1.digitaloceanspaces.com/public/course/1709531669000Inner%20Thumbnail%20OS-min.jpg" },
  { id: 7, title: "Cloud Computing Essentials", category: "Cloud Computing", rating: 4.7, enrolled: 1050, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX2uP2oWlJn9ePl4Gyoy47pkn3Kn-3YYw4A&s" },
  { id: 8, title: "Ethical Hacking", category: "Cybersecurity", rating: 4.9, enrolled: 850, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTHdsL38dt6asaOVZLLT2FrhbAm7EI4OSDw&s" },
];

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10"
  >
    <ChevronLeft size={28} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10"
  >
    <ChevronRight size={28} />
  </button>
);

const PopularCourses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20 px-6 flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=1600&q=80")`,
      }}
    >
      <h2 className="text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg">
        🚀 Popular Courses
      </h2>

      <div className="relative max-w-6xl w-full">
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="px-4">
              <div className="bg-white rounded-2xl shadow-lg p-5 transition hover:shadow-2xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4">{course.title}</h3>
                <p className="text-gray-500 text-sm">{course.category}</p>
                <div className="flex items-center mt-2 text-yellow-500">
                  <Star size={18} />
                  <span className="ml-1 font-semibold">{course.rating} ⭐</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  {course.enrolled}+ Students Enrolled
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularCourses;
