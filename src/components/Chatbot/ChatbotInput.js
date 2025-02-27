import React from "react";

const ChatbotInput = ({ input, handleInputChange, handleSend }) => {
  return (
    <div className="chatbot-input">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatbotInput;
