// file to show the contact list

// importing the required modules
"use client";
// import axiosInstance from "@/lib/axios/axiosInterceptor";
import { Search } from "lucide-react";
import React from "react";

const ContactList = () => {
  // for truncating the words
  const truncateWords = (str: string | undefined, numWords: number): string => {
    if (!str) return "";
    const words = str.split(" ");
    if (words.length <= numWords) {
      return str;
    }
    return words.slice(0, numWords).join(" ") + "...";
  };
  const selectedUser = {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "online",
    lastSeen: "Active now",
    isTyping: false,
    hasStory: true,
  };

  const mockUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "online",
      lastSeen: "Active now",
      unreadCount: 0,
      lastMessage: "That sounds exciting! I'd love to hear more about it.",
      lastMessageTime: "10:33 AM",
      isTyping: false,
      hasStory: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "offline",
      lastSeen: "Last seen 2 hours ago",
      unreadCount: 0,
      lastMessage: "Did you see the latest update?",
      lastMessageTime: "9:41 AM",
      isTyping: false,
      hasStory: false,
    },
    {
      id: 3,
      name: "Carol White",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "online",
      lastSeen: "Active now",
      unreadCount: 0,
      lastMessage: "Available for a quick chat.",
      lastMessageTime: "",
      isTyping: false,
      hasStory: true,
    },
    {
      id: 4,
      name: "David Green",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "busy",
      lastSeen: "In a meeting",
      unreadCount: 0,
      lastMessage: "Working on the new design.",
      lastMessageTime: "",
      isTyping: false,
      hasStory: false,
    },
    {
      id: 5,
      name: "Eve Black",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "offline",
      lastSeen: "Last seen 3 days ago",
      unreadCount: 0,
      lastMessage: "Enjoying the weekend!",
      lastMessageTime: "",
      isTyping: false,
      hasStory: false,
    },
    {
      id: 6,
      name: "Frank Blue",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "online",
      lastSeen: "Active 5m ago",
      unreadCount: 0,
      lastMessage: "Let's connect next week.",
      lastMessageTime: "",
      isTyping: false,
      hasStory: true,
    },
    {
      id: 7,
      name: "Grace Grey",
      avatar: "/placeholder.svg?height=32&width=32",
      status: "offline",
      lastSeen: "Last seen yesterday",
      unreadCount: 0,
      lastMessage: "Out of office.",
      lastMessageTime: "",
      isTyping: false,
      hasStory: false,
    },
  ];
  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search contacts..."
          className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
      </div>
      {mockUsers?.map((user) => (
        <div
          key={user?.id}
          className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
            user?.id === selectedUser.id ? "bg-blue-50 dark:bg-blue-900/20" : ""
          }`}
        >
          <div className="relative">
            <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="h-full w-full object-cover"
              />
            </div>
            {user?.status === "online" && (
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800 bg-green-500"></div>
            )}
            {user?.hasStory && (
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 -z-10"></div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="font-medium truncate">{user?.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {user?.lastMessageTime}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400 min-w-0">
                {user?.isTyping ? (
                  <span className="text-green-500">Typing...</span>
                ) : (
                  truncateWords(user?.lastMessage, 2)
                )}
              </div>
              {user?.unreadCount > 0 && (
                <div className="ml-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {user?.unreadCount}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
