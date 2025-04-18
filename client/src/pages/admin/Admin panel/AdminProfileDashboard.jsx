import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Save, Camera, Lock, User } from "lucide-react";

const AdminProfileDashboard = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    password: "",
    profileImage: "https://via.placeholder.com/150", // Placeholder Image
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    console.log("Profile updated:", profile);
    // Add API call to save profile changes
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <Card className="max-w-3xl w-full shadow-xl rounded-lg">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <User className="w-6 h-6" /> Admin Profile
          </h2>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-gray-300">
                <AvatarImage src={profile.profileImage} alt="Admin Profile" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
              <Button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full shadow-md hover:bg-blue-700">
                <Camera className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <Label htmlFor="name">👤 Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Label htmlFor="email">📧 Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label htmlFor="password">🔑 Change Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter new password"
              value={profile.password}
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          {/* Save Button */}
          <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2" onClick={saveProfile}>
            <Save className="w-5 h-5" /> Save Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProfileDashboard;
