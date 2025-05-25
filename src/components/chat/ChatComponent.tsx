"use client";

import React, { useState, useRef } from "react";
import {
  Send,
  Paperclip,
  Smile,
  Mic,
  Camera,
  FileText,
  MapPin,
  Gift,
  Gamepad2,
  ImageIcon,
  MoreHorizontal,
  Phone,
  Video,
  Search,
  ChevronLeft,
  User,
  Bell,
  BellOff,
  Pin,
  Trash,
  UserPlus,
  Info,
  Moon,
  Sun,
  Sparkles,
  Check,
  CheckCheck,
  Clock,
  Edit,
  Reply,
  Forward,
  Copy,
  Bookmark,
  X,
  Bot,
  Users,
  MessageCircle,
  Plus,
  Settings,
} from "lucide-react";
import ChatSideBar from "../sidebar/ChatSideBar";

export const ChatComponent = () => {
  // Mock states for UI display
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [chatTheme, setChatTheme] = useState("default");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showStickerPicker, setShowStickerPicker] = useState(false);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const isMobile = false; // Mock for responsive design

  // Mock user data
  const selectedUser = {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    status: "online",
    lastSeen: "Active now",
    isTyping: false,
    hasStory: true,
  };

  // Mock messages data
  const mockMessages = [
    {
      id: 1,
      sender: "Alice Johnson",
      content: "Hey! How are you doing today? 😊",
      timestamp: "10:30 AM",
      isOwn: false,
      status: "read",
      avatar: "/placeholder.svg?height=32&width=32",
      reactions: [
        { emoji: "👍", count: 2, users: ["You", "Bob"] },
        { emoji: "❤️", count: 1, users: ["Carol"] },
      ],
      isEdited: false,
      isPinned: false,
    },
    {
      id: 2,
      sender: "You",
      content:
        "I'm doing great! Just working on some new projects. How about you?",
      timestamp: "10:32 AM",
      isOwn: true,
      status: "read",
      reactions: [{ emoji: "🔥", count: 1, users: ["Alice"] }],
      isEdited: true,
      isPinned: false,
    },
    {
      id: 3,
      sender: "Alice Johnson",
      content: "That sounds exciting! I'd love to hear more about it.",
      timestamp: "10:33 AM",
      isOwn: false,
      status: "read",
      avatar: "/placeholder.svg?height=32&width=32",
      reactions: [],
      isEdited: false,
      isPinned: true,
    },
    {
      id: 4,
      sender: "You",
      content:
        "I'm building a real-time chat application with some cool features like reactions, stickers, and AI assistance!",
      timestamp: "10:35 AM",
      isOwn: true,
      status: "delivered",
      reactions: [
        { emoji: "🤩", count: 1, users: ["Alice"] },
        { emoji: "👏", count: 1, users: ["Alice"] },
      ],
      isEdited: false,
      isPinned: false,
    },
    {
      id: 5,
      sender: "Alice Johnson",
      content: "Check out this amazing sunset I captured yesterday! 📸",
      timestamp: "10:36 AM",
      isOwn: false,
      status: "read",
      avatar: "/placeholder.svg?height=32&width=32",
      type: "image",
      mediaUrl: "/placeholder.svg?height=200&width=300",
      reactions: [
        { emoji: "😍", count: 2, users: ["You", "Bob"] },
        { emoji: "📸", count: 1, users: ["Carol"] },
      ],
      isEdited: false,
      isPinned: false,
    },
  ];

  // Mock quick action items
  const quickActionItems = [
    { icon: Camera, label: "Camera" },
    { icon: ImageIcon, label: "Gallery" },
    { icon: FileText, label: "Document" },
    { icon: MapPin, label: "Location" },
    { icon: Gift, label: "Gift" },
    { icon: Gamepad2, label: "Game" },
  ];

  // Mock users for sidebar
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
      status: "online",
      lastSeen: "Active now",
      unreadCount: 3,
      lastMessage: "Did you see the latest update?",
      lastMessageTime: "9:41 AM",
      isTyping: false,
      hasStory: false,
    },
  ];

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        chatTheme === "ocean"
          ? "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900"
          : ""
      } ${
        chatTheme === "sunset"
          ? "bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900 dark:to-pink-900"
          : ""
      }`}
    >
      <ChatSideBar />
      {/* Sidebar - User List */}
      <div
        className={`${
          isMobile ? "hidden" : "block"
        }w-92 border-r bg-white dark:bg-gray-800`}
      >
        {/* User List Header */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              RésoChat
            </h2>

            <div className="flex gap-1">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search conversations..."
              className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
        </div>

        {/* User List Tabs */}
        {/* <div className="p-4 pt-2">
          <div className="flex border-b w-full py-2 bg-gray-300 rounded-md">
            <button className="flex-1 mx-2 py-2 px-4 bg-gray-100 rounded-md dark:bg-gray-700 font-medium">
              <div className="flex items-center justify-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chats
              </div>
            </button>
            <button className="flex-1 py-2 px-4 rounded-md">
              <div className="flex mx-2 items-center justify-center">
                <User className="h-4 w-4 mr-2" />
                Contacts
              </div>
            </button>
            <button className="flex-1 py-2 px-4 rounded-md">
              <div className="flex mx-2 items-center justify-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Discover
              </div>
            </button>
            <button className="flex-1 py-2 px-4 rounded-md">
              <div className="flex mx-2 items-center justify-center">
                <Users className="h-4 w-4 mr-2" />
                Group
              </div>
            </button>
          </div>
        </div> */}

        {/* User List */}
        <div className="overflow-y-auto h-[calc(100vh-180px)]">
          {mockUsers.map((user) => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                user.id === selectedUser.id
                  ? "bg-blue-50 dark:bg-blue-900/20"
                  : ""
              }`}
            >
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                {user.status === "online" && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800 bg-green-500"></div>
                )}
                {user.hasStory && (
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 -z-10"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="font-medium truncate">{user.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {user.lastMessageTime}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {user.isTyping ? (
                      <span className="text-green-500">Typing...</span>
                    ) : (
                      user.lastMessage
                    )}
                  </div>
                  {user.unreadCount > 0 && (
                    <div className="ml-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {user.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-3 border-b bg-white dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {selectedUser.status === "online" && (
                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 bg-green-500"></div>
              )}
              {selectedUser.hasStory && (
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 -z-10"></div>
              )}
            </div>
            <div>
              <div className="font-medium">{selectedUser.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {selectedUser.isTyping ? (
                  <span className="text-green-500">Typing...</span>
                ) : (
                  selectedUser.lastSeen
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Phone className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Video className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className="space-y-4">
            {mockMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${
                  msg.isOwn ? "justify-end" : "justify-start"
                }`}
              >
                {!msg.isOwn && (
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                    <img
                      src={msg.avatar}
                      alt={msg.sender}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 relative ${
                    msg.isOwn
                      ? "bg-blue-500 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  } ${msg.isPinned ? "border-2 border-yellow-400" : ""}`}
                >
                  {!msg.isOwn && (
                    <div className="text-xs font-medium mb-1">{msg.sender}</div>
                  )}

                  {msg.type === "image" && msg.mediaUrl ? (
                    <div className="mb-2">
                      <img
                        src={msg.mediaUrl}
                        alt="Media content"
                        className="rounded-md max-w-full"
                      />
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap break-words">
                      {msg.content}
                    </div>
                  )}

                  <div
                    className={`flex items-center gap-1 mt-1 ${
                      msg.isOwn ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.isEdited && (
                      <span className="text-xs opacity-70">(edited)</span>
                    )}
                    <span className="text-xs opacity-70">{msg.timestamp}</span>
                    {msg.isOwn && (
                      <span className="text-xs opacity-70">
                        {msg.status === "read" ? (
                          <CheckCheck className="h-3 w-3" />
                        ) : (
                          <Check className="h-3 w-3" />
                        )}
                      </span>
                    )}
                  </div>

                  {msg.reactions && msg.reactions.length > 0 && (
                    <div
                      className={`flex flex-wrap gap-1 mt-1 ${
                        msg.isOwn ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.reactions.map((reaction, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-1.5 py-0.5 text-xs"
                        >
                          <span className="mr-1">{reaction.emoji}</span>
                          <span>{reaction.count}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.isPinned && (
                    <div className="absolute -top-2 -right-2">
                      <Pin className="h-4 w-4 text-yellow-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* AI Assistant Sidebar */}
        {showAIAssistant && (
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 z-10">
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                <h2 className="font-medium">AI Assistant</h2>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-blue-500" />
                </div>
                <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-700 max-w-[80%]">
                  Hello! I'm your AI assistant. How can I help you with your
                  conversation today?
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="border-t bg-white dark:bg-gray-800 p-4">
          {/* Quick Actions */}
          {showQuickActions && (
            <div className="mb-4 bg-white dark:bg-gray-800 border rounded-lg shadow-lg p-2 relative">
              <button className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center">
                <X className="h-3 w-3" />
              </button>
              <div className="grid grid-cols-3 gap-2">
                {quickActionItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Icon className="h-5 w-5 mb-1" />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute bottom-20 right-4 z-20 bg-white dark:bg-gray-800 border rounded-lg shadow-lg w-64">
              <div className="p-2 border-b">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search emojis..."
                    className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="p-2 grid grid-cols-8 gap-1 h-64 overflow-y-auto">
                {[
                  "😀",
                  "😃",
                  "😄",
                  "😁",
                  "😆",
                  "😅",
                  "😂",
                  "🤣",
                  "😊",
                  "😇",
                  "🙂",
                  "🙃",
                  "😉",
                  "😌",
                  "😍",
                  "🥰",
                ].map((emoji, index) => (
                  <button
                    key={index}
                    className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sticker Picker */}
          {showStickerPicker && (
            <div className="absolute bottom-20 right-4 z-20 bg-white dark:bg-gray-800 border rounded-lg shadow-lg w-64">
              <div className="p-2 border-b">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search stickers..."
                    className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="p-2 grid grid-cols-3 gap-2 h-64 overflow-y-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <div
                    key={index}
                    className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Media Picker */}
          {showMediaPicker && (
            <div className="absolute bottom-20 right-4 z-20 bg-white dark:bg-gray-800 border rounded-lg shadow-lg w-64">
              <div className="flex items-center justify-between p-2 border-b">
                <h3 className="font-medium">Media</h3>
                <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-2 grid grid-cols-3 gap-1 h-64 overflow-y-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-md"
                  ></div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-end gap-2">
            {/* Quick Action Button */}
            <button
              className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={() => setShowQuickActions(!showQuickActions)}
            >
              <Paperclip className="h-4 w-4" />
            </button>

            {/* Message Input */}
            <div className="flex-1 relative">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full pr-32 py-2 px-4 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ImageIcon className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Gift className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Smile className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Voice Record / Send Button */}
            {message.trim() ? (
              <button className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white">
                <Send className="h-4 w-4" />
              </button>
            ) : (
              <button
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  isRecording
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                <Mic
                  className={`h-4 w-4 ${isRecording ? "animate-pulse" : ""}`}
                />
              </button>
            )}
          </div>

          {/* Recording indicator */}
          {isRecording && (
            <div className="flex items-center gap-2 mt-2 text-red-500">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm">Recording... Tap to stop</span>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*,video/*,.pdf,.doc,.docx"
        />
      </div>
    </div>
  );
};
