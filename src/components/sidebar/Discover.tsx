// file to show the searched users

// importing the required modules
"use client";
import axiosInstance from "@/lib/axios/axiosInterceptor";
import { userStore } from "@/store/userStore";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface SearchUser {
  _id: string;
  name: string;
  profileImage: string;
}

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchUser[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const loggedInUser = userStore((state) => state.user);
  const [sentRequests, setSentRequests] = useState<string[]>([]);

  // for setting the search results
  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(`/user/search/${searchTerm}`);
      if (response.status === 200) {
        const formattedSearchResults = response.data.data.map((user: any) => {
          return {
            _id: user._id,
            name: user.name,
            profileImage: user.profileImage,
          };
        });
        setSearchResults(formattedSearchResults);
      }
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  // function for the adding new friend
  const handleAddFriend = async (userId: string) => {
    try {
      const response = await axiosInstance.post(
        `/user/add-friend/${userId}/${loggedInUser?._id}`
      );
      if (response.status === 202) {
        if (response.data.success === false) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          setSentRequests((prev) => [...prev, userId]);
        }
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // function for the viewing the profile
  const viewProfile = async (userId: string) => {
    try {
      const response = await axiosInstance.get(`/user/profile/${userId}`);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error: any) {
      console.error("error", error);
      toast.error(error.message);
    }
  };

  // for updating the search results
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setHasSearched(true);
      handleSearch();
    } else {
      setHasSearched(false);
      setSearchResults([]); // Clear results if search term is empty
    }
  }, [searchTerm]);

  return (
    <div className="w-full space-y-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search users..."
          className="w-full pl-8 pr-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {!hasSearched && !searchTerm ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-10">
          <p className="text-lg">Explore and find new friends!</p>
          <p className="text-sm">Start typing to search for users.</p>
        </div>
      ) : searchResults?.length > 0 ? (
        <>
          <h3 className="text-lg font-semibold mb-2">Search Results</h3>
          <div className="space-y-2">
            {searchResults?.map((user) => (
              <div
                key={user._id}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
              >
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600"
                />
                <div className="font-medium">{user.name}</div>
                {/* Add button to send friend request or view profile */}
                {loggedInUser?._id === user._id ? (
                  <button
                    onClick={() => viewProfile(user._id)}
                    className="ml-auto bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-md w-24"
                  >
                    View
                  </button>
                ) : sentRequests.includes(user._id) ? (
                  <button
                    disabled
                    className="ml-auto bg-gray-400 text-white text-sm py-1 px-3 rounded-md w-24 cursor-not-allowed"
                  >
                    Sent
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddFriend(user._id)}
                    className="ml-auto bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-md w-24"
                  >
                    Add Friend
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 py-10">
          <p className="text-lg">No data found.</p>
          <p className="text-sm">Try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default Discover;
