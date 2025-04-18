import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
import { Edit, PlusCircle } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseTable = () => {
  const { data, isLoading } = useGetCreatorCourseQuery();
  const navigate = useNavigate();

  if (isLoading)
    return <h1 className="text-center text-2xl font-semibold text-gray-700">Loading...</h1>;

  return (
    <div className="bg-gradient-to-br from-[#1E3A8A] to-[#111827] p-6 rounded-lg shadow-xl text-white">
      {/* Header & Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Courses</h2>
        <Button
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-all"
          onClick={() => navigate(`create`)}
        >
          <PlusCircle size={18} />
          Create Course
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-lg">
        <Table>
          <TableCaption className="text-gray-500">A list of your recent courses.</TableCaption>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px] text-gray-700">Price</TableHead>
              <TableHead className="text-gray-700">Status</TableHead>
              <TableHead className="text-gray-700">Title</TableHead>
              <TableHead className="text-right text-gray-700">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.courses.map((course) => (
              <TableRow
                key={course._id}
                className="hover:bg-gray-200 transition-all rounded-lg"
              >
                <TableCell className="font-semibold text-gray-800">
                  {course?.coursePrice || "NA"}
                </TableCell>
                <TableCell>
                  <Badge
                    className={`px-3 py-1 text-sm ${
                      course.isPublished ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                    }`}
                  >
                    {course.isPublished ? "Published" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-800">{course.courseTitle}</TableCell>
                <TableCell className="text-right">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-gray-300 transition-all"
                    onClick={() => navigate(`${course._id}`)}
                  >
                    <Edit className="text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CourseTable;
