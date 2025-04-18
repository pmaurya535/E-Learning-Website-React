import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { Trash, Edit } from "lucide-react";

const AdminUsersDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/user/all") // ✅ Make sure backend is running on port 5000
      .then((response) => response.json())
      .then((data) => setUsers(data.users)) // `data.users` if your backend returns { users: [...] }
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="max-w-6xl mx-auto shadow-xl rounded-lg">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">👑 Admin - Users Management</h2>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3 font-semibold text-blue-700">{user.role}</td>
                    <td className="p-3 text-center">
                      <Button variant="outline" className="mr-2 text-blue-600 hover:bg-blue-100">
                        <Edit className="w-4 h-4" />
                      </Button>
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

export default AdminUsersDashboard;
