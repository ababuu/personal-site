import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatbotButton from "./ChatbotButton";
import "./../styles/Chatbot.scss";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <ChatWindow />
      <ChatbotButton toggleChat={toggleChat} />
    </div>
  );
};

export default Chatbot;
