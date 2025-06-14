// file for the chat side bar

// importing the required modules
"use client";

import {
  Bell,
  LogOut,
  MessageCircle,
  Settings,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { useTriggerStore } from "@/store/triggerStore";
import axiosInstance from "@/lib/axios/axiosInterceptor";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { userStore } from "@/store/userStore";
import { disconnectSocket } from "@/lib/socket/notification";

const ChatSideBar = () => {
  const setSelectedTrigger = useTriggerStore((state) => state.setTrigger);
  const currentTrigger = useTriggerStore((state) => state.trigger);
  const router = useRouter();
  const isLoggedOut = userStore((state) => state.isLoggedOut);

  // for logging out
  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post("/user/logout");
      if (response.status === 200) {
        localStorage.removeItem("access_token");
        isLoggedOut();
        toast.success("Logout successfull");
        disconnectSocket();
        router.push("/");
      }
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="p-4 pt-2 border-r z-10 flex flex-col h-screen">
      {/* Main navigation icons */}
      <div className="flex flex-col mt-2 space-y-4 items-center">
        <button
          onClick={() => setSelectedTrigger("chats")}
          className={`relative group p-3 rounded-full transition-colors ${
            currentTrigger === "chats"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chats
          </span>
        </button>
        <button
          onClick={() => setSelectedTrigger("contacts")}
          className={`relative group p-3 rounded-full transition-colors ${
            currentTrigger === "contacts"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <User className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Contacts
          </span>
        </button>
        <button
          onClick={() => setSelectedTrigger("discover")}
          className={`relative group p-3 rounded-full transition-colors ${
            currentTrigger === "discover"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <Sparkles className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Discover
          </span>
        </button>
        <button
          onClick={() => setSelectedTrigger("group")}
          className={`relative group p-3 rounded-full transition-colors ${
            currentTrigger === "group"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <Users className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Group
          </span>
        </button>
        <button
          onClick={() => setSelectedTrigger("notifications")}
          className={`relative group p-3 rounded-full transition-colors ${
            currentTrigger === "notifications"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <Bell className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Notifications
          </span>
        </button>
      </div>

      {/* Settings and logout buttons at the bottom */}
      <div className="mt-auto flex flex-col space-y-4 items-center mb-4">
        <button
          onClick={() => setSelectedTrigger("settings")}
          className={`relative group p-3 rounded-full transition-colors ${
            currentTrigger === "settings"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          <Settings className="h-6 w-6" />
          <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Settings
          </span>
        </button>
        <button
          onClick={() => {
            handleLogout();
          }}
          className={`relative group p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-red-500 dark:hover:bg-red-500 transition-colors`}
        >
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
