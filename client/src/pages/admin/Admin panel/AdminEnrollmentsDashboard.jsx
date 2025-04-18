import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { Trash } from "lucide-react";

const AdminEnrollmentsDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/enrollments")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched enrollments:", data);
        setEnrollments(data);
      })
      .catch((error) => console.error("Failed to fetch:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="max-w-6xl mx-auto shadow-xl rounded-lg">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            📚 Admin - Enrollments Management
          </h2>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Course</th>
                  <th className="p-3 text-left">Enrollment Date</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enrollments.map((enrollment) => (
                  <tr key={enrollment.id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{enrollment.name}</td>
                    <td className="p-3 font-semibold text-green-700">{enrollment.courseTitle}</td>
                    <td className="p-3">{new Date(enrollment.date).toLocaleDateString()}</td>
                    <td className="p-3 text-center">
                      <Button variant="destructive" className="text-red-600 hover:bg-red-100">
                        <Trash className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEnrollmentsDashboard;
