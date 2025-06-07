// file to show the middle pannel for the chat side bar

// importing the required modules
"use client";
import { useTriggerStore } from "@/store/triggerStore";
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
} from "lucide-react";
import ChatList from "./ChatList";
import ContactList from "./ContactList";
import Discover from "./Discover";
import Group from "./Group";
import Settings from "./Settings";
import { useEffect, useState } from "react";
import Notifications from "./Notifications";

const ChatMiddlePannel = () => {
  const selectTrigger = useTriggerStore((state) => state.trigger);
  const [data, setData] = useState<any>(null);

  const renderSection = () => {
    try {
      switch (selectTrigger) {
        case "chats":
          return <ChatList />;
        case "contacts":
          return <ContactList />;
        case "discover":
          return <Discover />;
        case "group":
          return <Group />;
        case "settings":
          return <Settings />;
        case "notifications":
          return <Notifications />;
        default:
          setData(null);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isMobile = false;

  return (
    <div
      className={`${
        isMobile ? "hidden" : "block"
      } w-[300px] overflow-x-hidden border-r bg-white dark:bg-gray-800`}
    >
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            RésoChat
          </h2>
          <div className="flex gap-1">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-full h-[calc(100vh-180px)] overflow-y-auto transition-all duration-300 ease-in-out">
        <div className="w-full max-w-[300px] px-4">{renderSection()}</div>
      </div>
    </div>
  );
};

export default ChatMiddlePannel;
