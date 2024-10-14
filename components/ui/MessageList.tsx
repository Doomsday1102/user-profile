import { MessageForm } from "@/types/interfaces";
import React from "react";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: MessageForm[];
  handleViewMessage: (id: number) => void;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  handleViewMessage,
}) => {
  return (
    <div className="h-1/2 overflow-y-scroll border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="sticky top-0 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold p-4">Messages</h1>
      </div>
      <div className="divide-y divide-gray-200">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          handleViewMessage={handleViewMessage}
        />
      ))}
      </div>
      
    </div>
  );
};

export default MessageList;
