import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetPurchasedCoursesQuery } from "@/features/api/purchaseApi";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetPurchasedCoursesQuery();

  if (isLoading)
    return (
      <h1 className="text-center text-2xl font-semibold text-gray-700">
        Loading...
      </h1>
    );
  if (isError)
    return (
      <h1 className="text-center text-red-500 text-xl">
        Failed to get purchased courses
      </h1>
    );

  // Debug: View raw data
  console.log("Fetched Data:", data);

  const purchasedCourses = data?.purchasedCourse || [];

  // Debug: View extracted courses
  console.log("Purchased Courses Array:", purchasedCourses);

  const totalRevenue = purchasedCourses.reduce(
    (acc, course) => acc + (course?.amount || 0),
    0
  );

  const totalSales = purchasedCourses.length || 0;

  const totalStudents = purchasedCourses.filter(
    (course) => course?.userId?.role === "student"
  ).length;

  const totalInstructor = purchasedCourses.filter(
    (course) => course?.userId?.role === "instructor"
  ).length;

  // Debug: Check individual fields
  purchasedCourses.forEach((course, i) => {
    console.log(`Course #${i + 1}`, {
      amount: course?.amount,
      courseTitle: course?.courseId?.courseTitle,
      coursePrice: course?.courseId?.coursePrice,
      userRole: course?.userId?.role,
    });
  });

  const courseData = purchasedCourses.map((course) => ({
    name: course?.courseId?.courseTitle || "Unknown Course",
    price: course?.courseId?.coursePrice || 0,
  }));

  return (
    <div className="bg-gradient-to-br from-[#1E3A8A] to-[#111827] p-6 rounded-lg shadow-xl text-white">
      {/* Cards Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Total Sales */}
        <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-blue-600">📊 Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-800">{totalSales}</p>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-green-600">💰 Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-800">₹{totalRevenue}</p>
          </CardContent>
        </Card>

        {/* Total Enrolled Students */}
        <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-purple-600">
              🎓 Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-800">{totalStudents}</p>
          </CardContent>
        </Card>

        {/* Total Enrolled Students */}
        <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-purple-600">
              🎓 Total Admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-800">{totalInstructor}</p>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-700">
              📈 Course Prices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={courseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  angle={-30}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis stroke="#6b7280" />
                <Tooltip formatter={(value) => [`₹${value}`]} />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#4a90e2"
                  strokeWidth={3}
                  dot={{ stroke: "#4a90e2", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
