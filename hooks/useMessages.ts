
import { useState } from 'react';
import { MessageForm } from '@/types/interfaces';

const useMessages = (initialMessages: MessageForm[]) => {
  const [messages, setMessages] = useState<MessageForm[]>(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<MessageForm | null>(null);
  

  const handleViewMessage = (id: number) => {
    const message = messages.find((msg) => msg.id === id);
    
    if (message) {
      setSelectedMessage(message);
    }
    markMessageAsViewed(id);
  };

  const handleCloseMessage = () => {
    setSelectedMessage(null);
  };
  const markMessageAsViewed = (id: number) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, viewed: true } : msg
      )
    );
  };

  return {
    messages,
    selectedMessage,
    handleViewMessage,
    handleCloseMessage,
    
  };
};

export default useMessages;