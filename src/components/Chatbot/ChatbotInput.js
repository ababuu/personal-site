import React from "react";
import PropTypes from "prop-types";

const ChatbotInput = ({ input, handleInputChange, handleSend }) => (
  <div className="chatbot-input">
    <textarea
      rows="2"
      value={input}
      onChange={handleInputChange}
      placeholder="Type your message..."
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleSend();
        }
      }}
    />
    <button type="button" onClick={handleSend} className="button small">
      Send
    </button>
  </div>
);

ChatbotInput.propTypes = {
  input: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
};

export default ChatbotInput;
