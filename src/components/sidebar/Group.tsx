// file to show the group list

// importing the required modules
"use client";
import { Search } from "lucide-react";
import React from "react";

const Group = () => {
  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search groups..."
          className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">Group</h3>
      <div>Group</div>
    </div>
  );
};

export default Group;
