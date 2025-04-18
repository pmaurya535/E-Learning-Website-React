import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { Eye, Trash } from "lucide-react";

const AdminPaymentsDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/payments")
      .then((response) => response.json())
      .then((data) => setPayments(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="max-w-6xl mx-auto shadow-xl rounded-lg">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">💰 Admin - Payments Management</h2>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-yellow-600 text-white">
                <tr>
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Payment Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{payment.studentName}</td>
                    <td className="p-3 font-semibold text-yellow-700">${payment.amount}</td>
                    <td className="p-3">{new Date(payment.date).toLocaleDateString()}</td>
                    <td className={`p-3 font-bold ${payment.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>{payment.status}</td>
                    <td className="p-3 text-center">
                      <Button variant="outline" className="mr-2 text-blue-600 hover:bg-blue-100">
                        <Eye className="w-4 h-4" />
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

export default AdminPaymentsDashboard;
