import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Save, Settings, Lock, User } from "lucide-react";

const AdminSettingsDashboard = () => {
  const [settings, setSettings] = useState({
    siteName: "E-Learning Platform",
    adminEmail: "admin@example.com",
    enableNotifications: true,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleToggle = (name) => {
    setSettings({ ...settings, [name]: !settings[name] });
  };

  const saveSettings = () => {
    console.log("Settings saved:", settings);
    // Add API call to save settings
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Card className="max-w-4xl mx-auto shadow-xl rounded-lg">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6" /> Admin - Settings
          </h2>

          {/* Site Name */}
          <div className="mb-4">
            <Label htmlFor="siteName">🏫 Site Name</Label>
            <Input
              type="text"
              id="siteName"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          {/* Admin Email */}
          <div className="mb-4">
            <Label htmlFor="adminEmail">📧 Admin Email</Label>
            <Input
              type="email"
              id="adminEmail"
              name="adminEmail"
              value={settings.adminEmail}
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          {/* Enable Notifications */}
          <div className="flex items-center justify-between mb-4">
            <Label>🔔 Enable Notifications</Label>
            <Switch checked={settings.enableNotifications} onCheckedChange={() => handleToggle("enableNotifications")} />
          </div>

          {/* Maintenance Mode */}
          <div className="flex items-center justify-between mb-4">
            <Label>⚙️ Maintenance Mode</Label>
            <Switch checked={settings.maintenanceMode} onCheckedChange={() => handleToggle("maintenanceMode")} />
          </div>

          {/* Save Button */}
          <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2" onClick={saveSettings}>
            <Save className="w-5 h-5" /> Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettingsDashboard;
