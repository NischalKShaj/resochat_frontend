// file for the chat side bar

// importing the required modules
"use client";

import { LogOut, MessageCircle, Settings, Sparkles, User, Users } from "lucide-react";

const ChatSideBar = () => {
  return (
    <div className="p-4 pt-2 border-r z-10 flex flex-col h-screen">
      {/* Main navigation icons */}
      <div className="flex flex-col mt-2 space-y-4 items-center">
        <button className="relative group p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chats
          </span>
        </button>
        <button className="relative group p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <User className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Contacts
          </span>
        </button>
        <button className="relative group p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <Sparkles className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Discover
          </span>
        </button>
        <button className="relative group p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <Users className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Group
          </span>
        </button>
      </div>
      
      {/* Settings and logout buttons at the bottom */}
      <div className="mt-auto flex flex-col space-y-4 items-center mb-4">
        <button className="relative group p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <Settings className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Settings
          </span>
        </button>
        <button className="relative group p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <LogOut className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChatSideBar;
