// file to show the notifications

// importing the required modules
"use client";
import { useTriggerStore } from "@/store/triggerStore";
import { Search } from "lucide-react";

const Notifications = () => {
  const selectTrigger = useTriggerStore((state) => state.trigger);

  return (
    <div className="w-92 max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {/* Notifications content will go here */}
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          No new notifications
        </p>
      </div>
    </div>
  );
};

export default Notifications;
