import React, { useState } from "react";
import ChatWindow from "../components/Chatbot/ChatWindow";
import ChatbotButton from "../components/Chatbot/ChatbotButton";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <ChatWindow isOpen={isOpen} onClose={toggleChat} />
      <ChatbotButton toggleChat={toggleChat} />
    </div>
  );
};

export default Chatbot;
