import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";
import { motion } from "framer-motion";

const Courses = () => {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError)
    return <h1 className="text-red-500 text-center text-xl font-semibold mt-10">Some error occurred while fetching courses.</h1>;
  
  return (
    <div className="bg-gray-100 dark:bg-[#121212] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-extrabold text-4xl text-center text-gray-900 dark:text-white mb-12">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => <CourseSkeleton key={index} />)
            : data?.courses &&
              data.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }} // Start from left
                  animate={{ opacity: 1, x: 0 }} // Slide to position
                  transition={{ duration: 0.01, delay: index * 0.1 }} // Delayed animation for each item
                >
                  <Course course={course} />
                </motion.div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.01 }}
      className="bg-white dark:bg-[#1E1E1E] shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden transform hover:scale-105 duration-300"
    >
      <Skeleton className="w-full h-40 rounded-t-xl" />
      <div className="px-6 py-5 space-y-4">
        <Skeleton className="h-7 w-3/4 rounded-md" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-md" />
          </div>
          <Skeleton className="h-5 w-20 rounded-md" />
        </div>
        <Skeleton className="h-5 w-1/4 rounded-md" />
      </div>
    </motion.div>
  );
};
