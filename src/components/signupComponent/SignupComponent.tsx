// file to create login page

// importing the required modules
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { SignupType } from "@/types/types";
import axiosInstance from "@/lib/axios/axiosInterceptor";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import signupSchema from "@/lib/validation/signupValidation";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  // for handling the form data
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const updatedFormData = { ...formData, [id]: value };
    setFormData(updatedFormData);

    // If the field is empty, clear any error for that field
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
      return;
    }

    try {
      // Special handling for confirmPassword field
      if (id === "confirmPassword") {
        // Check if passwords match
        if (value !== updatedFormData.password) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: "Passwords must match",
          }));
        } else {
          // Clear error if passwords match
          setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: "",
          }));
        }
      } else {
        // For other fields, use the schema validation
        await signupSchema.validateAt(id, updatedFormData);
        setErrors((prevErrors) => ({ ...prevErrors, [id]: "" })); // Clear error if valid

        // If password field changes and confirmPassword has a value, check if they still match
        if (id === "password" && updatedFormData.confirmPassword) {
          if (value !== updatedFormData.confirmPassword) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              confirmPassword: "Passwords must match",
            }));
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              confirmPassword: "",
            }));
          }
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (validationError: any) {
      // Don't set error for confirmPassword here as we handle it separately above
      if (id !== "confirmPassword") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [id]: validationError.message,
        }));
      }
    }
  };

  // for handling the form submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      // Clear all errors before submission
      setErrors({});

      // Check required fields
      const requiredFields = ["name", "email", "password", "confirmPassword"];
      const missingFields = requiredFields.filter(
        (field) => !formData[field as keyof SignupType]
      );

      if (missingFields.length > 0) {
        const validationErrors: Record<string, string> = {};
        missingFields.forEach((field) => {
          validationErrors[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`;
        });
        setErrors(validationErrors);
        toast.error("Please fill in all required fields");
        return;
      }

      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords must match",
        }));
        toast.error("Passwords do not match");
        return;
      }

      // Validate all fields before submission
      await signupSchema.validate(formData, { abortEarly: false });

      // If validation passes, remove confirmPassword before sending to API
      const { confirmPassword, ...dataToSubmit } = formData;

      const response = await axiosInstance.post("/user/signup", dataToSubmit);
      console.log(response);
      if (response.status === 201) {
        // Store the token in localStorage if it's returned from the API
        if (response.data.token) {
          localStorage.setItem("access_token", response.data.token);
        }
        toast.success("Signup successful");
        router.push("/chat");
      }
    } catch (error: any) {
      // Handle Yup validation errors
      if (error.inner) {
        const validationErrors: Record<string, string> = {};
        error.inner.forEach((err: any) => {
          // Only set errors for non-empty fields
          const fieldValue = formData[err.path as keyof SignupType];
          if (
            fieldValue &&
            typeof fieldValue === "string" &&
            fieldValue.trim() !== ""
          ) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
        toast.error("Please fix the validation errors");
      } else if (error.message) {
        // Use the enhanced error object from our axios interceptor
        toast.error(error.message);
      } else if (error.response?.data) {
        // Fallback if our interceptor enhancement didn't work
        const errorMessage =
          error.response.data?.message ||
          (typeof error.response.data === "string"
            ? error.response.data
            : "Signup failed");
        toast.error(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full p-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              username
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="name"
              placeholder="Enter your name"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="phoneNumber"
              placeholder="Enter your phone number"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
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
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button className="w-full py-2 mt-5 text-white font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
