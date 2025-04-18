import React from "react";
import Course from "./Course";
import { useLoadUserQuery } from "@/features/api/authApi";

const MyLearning = () => {
  const { data, isLoading, error } = useLoadUserQuery();
  const myLearning = data?.user?.enrolledCourses || [];

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 md:px-0">
      <h1 className="font-bold text-2xl mb-4">MY LEARNING</h1>

      {isLoading ? (
        <MyLearningSkeleton />
      ) : error ? (
        <p className="text-red-500">Failed to load courses. Please try again.</p>
      ) : myLearning.length === 0 ? (
        <p className="text-gray-600"></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {myLearning.map((course) => (
            <Course key={course._id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLearning;

// Loading skeleton component
const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
      />
    ))}
  </div>
);
