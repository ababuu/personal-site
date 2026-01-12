import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons/faCircleXmark";
import { faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
      content: trimmedInput
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    const botMessageId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const botMessagePlaceholder = {
      id: botMessageId,
      role: "bot",
      content: ""
    };
    setMessages((prevMessages) => [...prevMessages, botMessagePlaceholder]);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedInput })
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let streamedContent = "";

      const readStream = async () => {
        const { done, value } = await reader.read();
        if (done) {
          return;
        }

        streamedContent += decoder.decode(value, { stream: true });
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === botMessageId ? { ...msg, content: streamedContent } : msg
          )
        );

        await readStream();
      };

      await readStream();
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                content: "Sorry, I couldn't get a response right now."
              }
            : msg
        )
      );
    }
  };

  // Helper function to render message content to satisfy Airbnb 'no-nested-ternary'
  const renderMessageContent = (message) => {
    if (message.role === "user") {
      return message.content;
    }

    if (message.content === "") {
      return (
        <div className="typing-indicator">
          <span />
          <span />
          <span />
        </div>
      );
    }

    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {message.content}
      </ReactMarkdown>
    );
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
          onKeyDown={(e) => e.key === "Enter" && onClose()}
          role="button"
          tabIndex={0}
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
              Hi! I'm your AI assistant. Ask me about my projects, resume,
              education, or anything else about my work!
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
              <div className="message-bubble">
                {renderMessageContent(message)}
              </div>
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
  onClose: PropTypes.func.isRequired
};

export default ChatWindow;
