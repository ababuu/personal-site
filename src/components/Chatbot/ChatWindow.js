import React, { useState } from "react";
import ChatbotInput from "./ChatbotInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: "bot", content: data.reply };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }

    setInput(""); // Clear input after sending
  };

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <span>Chatbot</span>
        <button onClick={() => {}}>X</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === "user" ? "user" : "bot"}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <ChatbotInput
        input={input}
        handleInputChange={handleInputChange}
        handleSend={handleSend}
      />
    </div>
  );
};

export default ChatWindow;
