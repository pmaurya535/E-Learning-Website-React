import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import CourseTab from "./CourseTab";

const EditCourse = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#4C1D95] to-[#1E3A8A] p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-4xl w-full">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-2xl text-gray-800">
            ✏️ Edit Course Details
          </h1>
          <Link to="lecture">
            <Button
              className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition-all"
            >
              Go to Lectures Page →
            </Button>
          </Link>
        </div>

        {/* Course Tabs Section */}
        <CourseTab />
      </div>
    </div>
  );
};

export default EditCourse;
