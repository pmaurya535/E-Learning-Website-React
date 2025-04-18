import BuyCourseButton from "@/components/BuyCourseButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetCourseDetailWithStatusQuery } from "@/features/api/purchaseApi";
import { BadgeInfo, Lock, PlayCircle } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();
  const courseId = params.courseId;
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetCourseDetailWithStatusQuery(courseId);

  if (isLoading) return <h1 className="text-center text-xl font-semibold">Loading...</h1>;
  if (isError) return <h1 className="text-center text-xl text-red-500">Failed to load course details</h1>;

  const course = data?.course;
  const purchased = data?.purchased;

  const handleContinueCourse = () => {
    if (purchased) {
      navigate(`/course-progress/${courseId}`);
    }
  };

  return (
    <div className="space-y-5">
      {/* Course Header with Image */}
      <div className="relative bg-gradient-to-r from-[#2D2F31] to-[#1F1F1F] text-white">
        {course?.courseImage && (
          <img
            src={course.courseImage}
            alt="Course"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="relative max-w-7xl mx-auto py-12 px-4 md:px-8 flex flex-col gap-3">
          <h1 className="font-bold text-3xl md:text-4xl">{course?.courseTitle || "Course Title"}</h1>
          <p className="text-lg md:text-xl text-gray-300">Course Sub-title</p>
          <p>
            Created By{" "}
            <span className="text-[#C0C4FC] underline italic">
              {course?.creator?.name || "Unknown Instructor"}
            </span>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <BadgeInfo size={18} />
            <p>Last updated {course?.createdAt?.split("T")[0] || "N/A"}</p>
          </div>
          {/* 
    <p>Students enrolled: {course?.enrolledStudents?.length || 0}</p> 
  */}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section: Course Details */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="font-bold text-xl md:text-2xl">Description</h1>
          <p
            className="text-base text-gray-700"
            dangerouslySetInnerHTML={{ __html: course?.description || "No description available." }}
          />

          {/* Course Content */}
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Course Content</CardTitle>
              <CardDescription>
                {course?.lectures?.length || 0} lectures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {course?.lectures?.map((lecture, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span>
                    {purchased ? <PlayCircle size={16} className="text-green-500" /> : <Lock size={16} className="text-gray-400" />}
                  </span>
                  <p className="font-medium">{lecture?.lectureTitle || "Untitled Lecture"}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Section: Video Player and Purchase */}
        <div className="w-full lg:w-1/3">
          <Card className="shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-5 flex flex-col">
              {/* Video Player */}
              <div className="w-full aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden">
                {course?.lectures?.length > 0 ? (
                  <ReactPlayer width="100%" height="100%" url={course.lectures[0]?.videoUrl} controls={true} />
                ) : (
                  <p className="text-center text-gray-500">No video available</p>
                )}
              </div>

              <h1 className="text-lg font-medium">{course?.lectures?.[0]?.lectureTitle || "Lecture title"}</h1>
              <Separator className="my-2" />

              {/* Course Price */}
              <div className="flex justify-between items-center">
                <h1 className="text-lg md:text-xl font-semibold text-gray-800">Price:</h1>
                <p className="text-xl font-bold text-green-600">
                  {course?.price ? `₹${course.price}` : "Payment"}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              {purchased ? (
                <Button onClick={handleContinueCourse} className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  Continue Course
                </Button>
              ) : (
                <BuyCourseButton courseId={courseId} />
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
