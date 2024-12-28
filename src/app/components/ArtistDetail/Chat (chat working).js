import Image from "next/image";
import React, { useState } from "react";
// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";
import check from "@/app/assets/feed/check.png";

import emoji from "@/app/assets/feed/smiley.svg";
import mention from "@/app/assets/feed/mention.svg";
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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
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
            <div className="emoji-wrapper text-center">
              <button type="button">
                <Image src={emoji} width={16} height={16} alt="emoji" />
              </button>
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
            {/* <div className="include-wrapper text-center">
              <Image src={mention} width={16} height={16} alt="mention" />
            </div> */}
            <div className="send-wrapper">
              <button type="button" onClick={handleSendMessage}>
                <Image src={sendMsg} width={16} height={16} alt="sendMsg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
