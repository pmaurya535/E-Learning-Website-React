import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./components/ThemeProvider";

const DarkMode = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative flex items-center justify-center p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl hover:scale-105"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-400" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-300" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 bg-white dark:bg-gray-900 rounded-lg shadow-2xl backdrop-blur-md">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md transition-all"
        >
          <Sun size={18} className="text-yellow-500" />
          <span className="text-gray-800 dark:text-gray-300 font-medium">Light Mode</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md transition-all"
        >
          <Moon size={18} className="text-gray-400" />
          <span className="text-gray-800 dark:text-gray-300 font-medium">Dark Mode</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-green-100 dark:hover:bg-green-900 rounded-md transition-all"
        >
          <Monitor size={18} className="text-green-500" />
          <span className="text-gray-800 dark:text-gray-300 font-medium">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkMode;
