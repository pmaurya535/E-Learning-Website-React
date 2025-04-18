import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { FileText, Download } from "lucide-react";

const AdminReportsDashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reports")
      .then((response) => response.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="max-w-6xl mx-auto shadow-xl rounded-lg">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Admin - Reports Management</h2>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="p-3 text-left">Report Title</th>
                  <th className="p-3 text-left">Date Generated</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{report.title}</td>
                    <td className="p-3">{new Date(report.date).toLocaleDateString()}</td>
                    <td className="p-3 font-semibold text-purple-700">{report.type}</td>
                    <td className="p-3 text-center">
                      <Button variant="outline" className="mr-2 text-blue-600 hover:bg-blue-100">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="success" className="text-green-600 hover:bg-green-100">
                        <Download className="w-4 h-4" />
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

export default AdminReportsDashboard;
