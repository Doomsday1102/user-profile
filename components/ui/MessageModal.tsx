import { MessageForm } from "@/types/interfaces";
import React from "react";

interface MessageModalProps {
  message: MessageForm;
  handleClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({
  message,
  handleClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {message.sender}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{message.time}</p>
        <p className="text-gray-700 mb-4">{message.content}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
