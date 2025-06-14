// file to setup the socket for the notifications

// importing the required modules
import toast from "react-hot-toast";
import { io, Socket } from "socket.io-client";
import { userStore } from "@/store/userStore";

// setting up the socket
let socket: Socket | null = null;

// function to initialize the socket
export const connectSocket = () => {
  if (!socket) {
    console.log("🔌 Initializing socket connection...");

    socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}/notifications`, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      query: {
        userId: userStore.getState().user?._id || "anonymous",
      },
    });

    console.log("🔌 Socket instance created, waiting for connection...");

    // Type guard to ensure socket is not null
    const setupSocketListeners = (s: Socket) => {
      s.on("receive-friend-request", 
        (data: { message: string; recipientId: string }) => {
          console.log("🎯 Friend request received:", data);
          
          // Get current user from the store
          const currentUser = userStore.getState().user;
          console.log("👤 Current user ID:", currentUser?._id);
          console.log("🎯 Intended recipient ID:", data.recipientId);

          // Only show the toast if the current user is the intended recipient
          if (currentUser && currentUser._id === data.recipientId) {
            console.log("✅ Showing toast to recipient");
            toast.success(data.message);
          } else {
            console.log("❌ Not showing toast - user is not the intended recipient");
          }
        }
      );
    };

    socket.on("connect", () => {
      console.log("✅ Socket connected with ID:", socket?.id);
      
      // Set up all socket listeners
      if (socket) {
        setupSocketListeners(socket);
      }
    });

    socket.on("connect_error", (error) => {
      console.error("❌ Socket connection error:", error);
    });

    socket.on("disconnect", (reason) => {
      console.log("🔌 Socket disconnected. Reason:", reason);
    });
  } else {
    console.log("🔌 Socket already initialized");
  }
};

export const disconnectSocket = () => {
  if (socket) {
    console.log("🔌 Disconnecting socket...");
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = () => socket;

export default socket;
