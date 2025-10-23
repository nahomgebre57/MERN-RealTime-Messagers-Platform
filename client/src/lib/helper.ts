import { format, isToday, isYesterday, isThisWeek } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { useSocket } from "@/hooks/use-socket";
import type { ChatType } from "@/types/chat.type";

export const isUserOnline = (userId?: string): boolean => {
  if (!userId) return false;
  
  const { onlineUsers } = useSocket.getState();
  console.log("Checking online:", userId, "Online users:", onlineUsers);
  
  return onlineUsers.includes(userId);
};

// New function to get online users count for groups
export const getOnlineUsersCount = (userIds: string[]): number => {
  const { onlineUsers } = useSocket.getState();
  return userIds.filter(userId => onlineUsers.includes(userId)).length;
};

export const getOtherUserAndGroup = (
  chat: ChatType,
  currentUserId: string | null
) => {
  const isGroup = chat?.isGroup;

  if (isGroup) {
    const onlineCount = getOnlineUsersCount(
      chat.participants.map(p => p._id).filter(Boolean) as string[]
    );
    
    return {
      name: chat.groupName || "Unnamed Group",
      subheading: `${chat.participants.length} members • ${onlineCount} online`,
      avatar: "",
      isGroup,
      onlineCount,
      totalMembers: chat.participants.length,
    };
  }

  const other = chat?.participants.find((p) => p._id !== currentUserId);
  const isOnline = isUserOnline(other?._id ?? "");

  return {
    name: other?.name || "Unknown",
    subheading: isOnline ? "Online" : "Offline",
    avatar: other?.avatar || "",
    isGroup: false,
    isOnline,
    isAI: other?.isAI || false,
  };
};

// New function to check if multiple users are online
export const areUsersOnline = (userIds: string[]): boolean => {
  return userIds.some(userId => isUserOnline(userId));
};

// New function to get online status with last seen (if available)
export const getUserStatus = (userId?: string, lastSeen?: string | Date) => {
  const isOnline = isUserOnline(userId);
  
  if (isOnline) {
    return { status: "online", text: "Online" };
  }
  
  if (lastSeen) {
    return { 
      status: "offline", 
      text: `Last seen ${formatChatTime(lastSeen)}` 
    };
  }
  
  return { status: "offline", text: "Offline" };
};

export const formatChatTime = (date: string | Date) => {
  if (!date) return "";
  const newDate = new Date(date);
  if (isNaN(newDate.getTime())) return "Invalid date";

  if (isToday(newDate)) return format(newDate, "h:mm a");
  if (isYesterday(newDate)) return "Yesterday";
  if (isThisWeek(newDate)) return format(newDate, "EEEE");
  return format(newDate, "M/d");
};

export function generateUUID(): string {
  return uuidv4();
}