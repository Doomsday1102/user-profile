import { MessageForm } from "@/types/interfaces";
import React from "react";

interface MessageItemProps {
  message: MessageForm;
  handleViewMessage: (id: number) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  handleViewMessage,
}) => {
  const getPreview = (content: string) => {
    return content.length > 80 ? content.substring(0, 80) + "..." : content;
  };

  return (
    <div
      key={message.id}
      className={`cursor-pointer p-4 transition duration-300 ease-in-out transform hover:scale-105 ${
        message.viewed ? "bg-white" : "bg-gray-100"
      }`}
      onClick={() => handleViewMessage(message.id)}
    >
      <p className="text-lg font-semibold text-gray-800">
        {message.sender} - {message.time}
      </p>
      <p className="text-gray-600">{getPreview(message.content)}</p>
    </div>
  );
};

export default MessageItem;
