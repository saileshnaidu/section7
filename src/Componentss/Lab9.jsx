import React, { useState, useEffect, useRef } from 'react';
import "./Lab9.css";
import EmojiPicker from 'emoji-picker-react';

function Lab9() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [nickname, setNickname] = useState('Guest');
  const [ipAddress, setIpAddress] = useState('Fetching...');
  const messagesEndRef = useRef(null);

  const API_URL = 'https://67cfa7d6823da0212a82ea48.mockapi.io/myapi/users';

  // Fetch messages from API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error('Error fetching messages:', err));
  }, []);

  // Fetch public IP address
  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress('Unknown'));
  }, []);

  // Send text or image message
  const sendMessage = (type, content) => {
    if (content.trim() !== '') {
      const newMessage = {
        name: `${nickname} (${ipAddress})`,
        type,
        content,
      };

      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessage),
      })
        .then((res) => res.json())
        .then((data) => {
          setMessages((prevMessages) => [...prevMessages, data]);
          if (type === 'text') setInput('');
          if (type === 'image') setImageUrl('');
        })
        .catch((err) => console.error('Error sending message:', err));
    }
  };

  // Delete non-empty messages from API
  const deleteNonEmptyMessages = async () => {
    try {
      const response = await fetch(API_URL);
      const allMessages = await response.json();

      const messagesToDelete = allMessages.filter(msg => msg.content !== "");

      await Promise.all(
        messagesToDelete.map(msg =>
          fetch(`${API_URL}/${msg.id}, { method: 'DELETE' }`)
        )
      );

      setMessages(messages.filter(msg => msg.content === ""));
      alert('Deleted all non-empty messages!');
    } catch (error) {
      console.error('Error deleting messages:', error);
    }
  };

  // Handle Enter key for sending messages
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage('text', input);
  };

  // Handle emoji selection
  const handleEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbox-page">
      <center>
        <h2 className="chatbox-heading">Section-7 Chat Box - SSCB</h2>

        {/* Nickname Input */}
        <div className="nickname-container">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
            className="nickname-input"
          />
        </div>
        <div className="chatbox-wrapper">
          {/* Chat Messages */}
          <div className="chatbox-container">
            <div className="chatbox-messages">
              {messages.map((msg, index) => (
                <div key={index} className="chatbox-message">
                 
                  {msg.content && msg.content.toString().trim() !== "" && (
                    <div>
                      <strong>{msg.name}:</strong>
                      {msg.type === 'text' && <span> {msg.content}</span>}
                      {msg.type === 'image' && (
                        <div>
                          <img src={msg.content} alt="Shared" className="chatbox-img" width="150px" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            {/* Input Section */}
            <div className="chatbox-input-container">
              <table width="100%" border="0">
                <tbody>

                  <tr>
                    <td>
                      <input
                        type="text"
                        className="chatbox-input"
                        placeholder="Paste image URL..."
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        style={{ width: '90%' }}
                      />
                    </td>
                    <td colSpan="2">
                      <button onClick={() => sendMessage('image', imageUrl)}>Send Image</button>
                    </td>
                  </tr>
                  <tr nowrap>
                    <td nowrap>
                      <input
                        type="text"
                        className="chatbox-input"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={{ width: '90%' }}
                      />
                    </td>
                    <td>
                      <button className="emoji-btn" onClick={() => setShowEmojiPicker((prev) => !prev)}>
                        😊
                      </button>
                    </td>
                    <td>
                      <button onClick={() => sendMessage('text', input)}>Send</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Delete Messages Button */}
            <button className="delete-btn" onClick={deleteNonEmptyMessages}>Delete chats for all</button>
          </div>

          {/* Emoji Picker on the Right Side */}
          {showEmojiPicker && (
            <div className="emoji-picker-box">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default Lab9;