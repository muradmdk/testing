import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Import Emoji Picker (using dynamic import to avoid SSR issues)
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

// Avatar and Icons
import Avatar from "@/app/assets/feed/demo-img.png";
import check from "@/app/assets/feed/check.png";
import emojiIcon from "@/app/assets/feed/smiley.svg";
import sendMsg from "@/app/assets/feed/paper-airplane.svg";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Janet",
      content: "On for 12:30 PM then ?",
      time: "12:04 PM",
      type: "sender",
    },
    {
      id: 2,
      sender: "You",
      content: "Agreed",
      type: "reply",
    },
    {
      id: 3,
      sender: "Janet",
      content: "On for 12:30 PM then ?",
      time: "12:04 PM",
      type: "sender",
    },
    {
      id: 4,
      sender: "You",
      content: "What",
      type: "reply",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        content: inputValue,
        type: "reply",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  // Handle key press (Enter to send)
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Handle emoji picker toggle
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // Handle emoji selection
  const handleEmojiClick = (emojiObject, event) => {
    setInputValue((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(false); // Close picker after selection
  };

  return (
    <>
      <div className="mt-4 chat-placeholder-wrapper">
        <div className="chat-placeholder">
          <div className="chat-body">
            <div className="chat-content">
              <ul>
                {messages.map((message) => (
                  <li
                    key={message.id}
                    className={`sender mb-3 ${
                      message.type === "reply" ? "reply" : ""
                    }`}
                  >
                    <div
                      className={`sender-content-wrapper ${
                        message.type === "reply" ? "reciever-wrapper" : ""
                      }`}
                    >
                      {message.type !== "reply" && (
                        <div className="sender-avatar">
                          <Image
                            src={Avatar}
                            width={32}
                            height={32}
                            alt="avatar"
                          ></Image>
                          <span className="online-status"></span>
                        </div>
                      )}
                      <div
                        className={`sender-msg ${
                          message.type === "reply"
                            ? "me-2 reply-before"
                            : "ms-3"
                        }`}
                      >
                        {message.type !== "reply" && (
                          <label htmlFor="" className="d-block">
                            {message.sender}
                          </label>
                        )}
                        <p>{message.content}</p>
                        {message.type !== "reply" && (
                          <span className="d-block">{message.time}</span>
                        )}
                        {message.type === "reply" && (
                          <div className="text-end">
                            <Image
                              src={check}
                              width={16}
                              height={8}
                              alt="check"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="chat-footer">
            <div className="emoji-wrapper text-center position-relative">
              <button type="button" onClick={toggleEmojiPicker} className="chat-btns">
                <Image src={emojiIcon} width={16} height={16} alt="emoji" />
              </button>
              {showEmojiPicker && (
                <div className="emoji-picker">
                  <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    height={350}
                    width={300}
                    theme="dark"
                  />
                </div>
              )}
            </div>

            <div className="chat-input-wrapper">
              <input
                type="text"
                className="w-100"
                placeholder="Start typing..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
            </div>

            <div className="send-wrapper text-center">
              <button type="button" onClick={handleSendMessage} className="chat-btns">
                <Image src={sendMsg} width={16} height={16} alt="sendMsg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .emoji-picker {
          position: absolute;
          bottom: 60px;
          left: 10px;
          z-index: 10;
        }
      `}</style>
    </>
  );
}
