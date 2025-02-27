import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const ChatbotButton = ({ toggleChat }) => {
  return (
    <button className="chatbot-button" onClick={toggleChat}>
      <FontAwesomeIcon icon={faComment} />
    </button>
  );
};

export default ChatbotButton;
