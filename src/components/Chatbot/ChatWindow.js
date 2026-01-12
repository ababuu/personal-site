import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons/faCircleXmark";
import { faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import ChatbotInput from "./ChatbotInput";

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMessage = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      role: "user",
      content: trimmedInput,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedInput }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const botMessage = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        role: "bot",
        content:
          data.reply || "I had trouble generating a reply. Please try again.",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          role: "bot",
          content: "Sorry, I couldn't get a response right now.",
        },
      ]);
    }
  };

  return (
    <div
      className={`chatbot-window ${isOpen ? "open" : ""}`}
      aria-live="polite"
    >
      <div className="chatbot-header">
        <span>Chatbot</span>
        <div
          className="chatbot-close"
          onClick={onClose}
          aria-label="Close chat"
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>
      <div className="chatbot-messages">
        {messages.length === 0 ? (
          <div className="message-wrapper bot" key="placeholder">
            <FontAwesomeIcon icon={faRobot} className="message-icon" />
            <div className="message-bubble">
              Ask me about Ababu, projects, resume, or stats.
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`message-wrapper ${
                message.role === "user" ? "user" : "bot"
              }`}
            >
              {message.role === "bot" && (
                <FontAwesomeIcon icon={faRobot} className="message-icon" />
              )}
              <div className="message-bubble">{message.content}</div>
              {message.role === "user" && (
                <FontAwesomeIcon icon={faUser} className="message-icon" />
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatbotInput
        input={input}
        handleInputChange={handleInputChange}
        handleSend={handleSend}
      />
    </div>
  );
};

ChatWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChatWindow;
