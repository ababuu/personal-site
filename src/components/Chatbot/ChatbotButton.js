import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const ChatbotButton = ({ toggleChat }) => (
  <button
    className="chatbot-button"
    onClick={toggleChat}
    aria-label="Open chatbot"
    type="button"
  >
    <FontAwesomeIcon icon={faComment} />
  </button>
);

ChatbotButton.propTypes = {
  toggleChat: PropTypes.func.isRequired,
};

export default ChatbotButton;
