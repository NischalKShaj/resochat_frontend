// file to create home page for the application

// importing the required modules
"use client";
import React, { useState } from "react";
import LoginComponent from "../loginComponent/LoginComponent";
import SignupComponent from "../signupComponent/SignupComponent";
import {
  MessageCircle,
  Users,
  Shield,
  Zap,
  Smartphone,
  Monitor,
} from "lucide-react";

const HomeComponent = () => {
  const [isSwap, setIsSwap] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Features */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              RésoChat
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Next-generation messaging with AI, encryption, and advanced
              features
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Advanced Messaging
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Reactions, editing, stickers, GIFs, and AI-powered suggestions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Smart Groups
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Polls, events, games, roles, and advanced admin controls
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  End-to-end encryption, 2FA, and advanced privacy controls
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  AI & Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Smart bots, chat summaries, and intelligent suggestions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Monitor className="h-4 w-4" />
                Desktop
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Smartphone className="h-4 w-4" />
                Mobile
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Cross-platform sync
              </div>
            </div>
          </div>
        </div>

        {/* for setting up right side components */}
        <div className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
          <div className="text-center space-y-3 mb-8">
            <div className="text-2xl font-bold rounded-lg mb-2">
              {isSwap === true ? "Welcome back" : "Join ChatApp Pro"}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {isSwap === true
                ? "Sign in to access your conversations"
                : "Create your account to get started"}
            </div>
          </div>
          <div className="w-full  flex justify-center mt-6">
            <div className="bg-gray-300 p-1 rounded-md">
              <div className="grid grid-cols-2 w-72 rounded-md overflow-hidden">
                <div
                  onClick={() => setIsSwap(true)}
                  className={`cursor-pointer py-2 text-center transition-all duration-200 ${
                    isSwap
                      ? "bg-white text-black font-bold"
                      : "bg-gray-300 text-gray-500 font-normal"
                  }`}
                >
                  Login
                </div>
                <div
                  onClick={() => setIsSwap(false)}
                  className={`cursor-pointer py-2 text-center transition-all duration-200 ${
                    !isSwap
                      ? "bg-white text-black font-bold"
                      : "bg-gray-300 text-gray-500 font-normal"
                  }`}
                >
                  Sign Up
                </div>
              </div>
            </div>
          </div>

          <div>
            {isSwap ? (
              <div className="flex justify-center">
                <LoginComponent />
              </div>
            ) : (
              <div className="flex justify-center">
                <SignupComponent />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
