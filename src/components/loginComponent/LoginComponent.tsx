// file to create login page

// importing the required modules
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import axiosInstance from "@/lib/axios/axiosInterceptor";
import { userStore } from "@/store/userStore";
import { LoginType } from "@/types/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState<LoginType>({
    email: "",
    password: "",
  });
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate form fields
      if (formData.email === "" || formData.password === "") {
        toast.error("Please fill all the fields");
        return;
      }

      // Attempt login
      const response = await axiosInstance.post("/user/login", formData);
      if (response.status === 200) {
        // Store the token in localStorage
        if (response.data.token) {
          localStorage.setItem("access_token", response.data.token);
        }
        isLoggedIn(response.data.user);
        toast.success("Login successful");
        router.push("/chat");
      }
    } catch (error: unknown) {
      // The axios interceptor enhances the error with a message property
      if (error && typeof error === "object" && "message" in error) {
        // This will catch the enhanced error from our axios interceptor
        toast.error(error.message as string);
      } else if (error instanceof AxiosError) {
        // Fallback for AxiosError if somehow our interceptor didn't enhance it
        if (error.response?.data) {
          const errorMessage =
            error.response.data?.message ||
            (typeof error.response.data === "string"
              ? error.response.data
              : "Invalid credentials");
          toast.error(errorMessage);
        } else {
          toast.error("Login failed. Please try again.");
        }
      } else {
        // Handle non-Axios errors
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full p-6 bg-white">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                value={formData.password}
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-end text-sm">
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
