// file to show the settings

// importing the required modules
"use client";
import React from "react";
import { Search } from "lucide-react";

const Settings = () => {
  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search settings..."
          className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">Settings</h3>
      <div>Settings</div>
    </div>
  );
};

export default Settings;
