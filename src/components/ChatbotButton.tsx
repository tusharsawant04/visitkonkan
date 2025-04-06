'use client';

import React, { useState, useEffect } from 'react';
import './ChatbotButton.css';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(true);
    }
  }, [isOpen]);

  return (
    <div className="chatbot-wrapper">
      <button 
        className={`chat-button ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        <span className="chat-button-icon">
          {isOpen ? '✕' : '💬'}
        </span>
        <span className="chat-button-text">
          {isOpen ? 'Close Chat' : 'Need Help?'}
        </span>
      </button>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Visit Konkan Assistant</h3>
            <button className="close-chat" onClick={toggleChat}>✕</button>
          </div>
          {iframeLoaded && (
            <iframe
              src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/23/15/20250323155902-2IJR6WVR.json"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Chatbot"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;