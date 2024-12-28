"use client";
import { CRow, CCol } from "@coreui/react";
import "@/app/styles/dashboard/HomeDashboard/HomeDashboard.css";
import "@/app/styles/dashboard/message/message.css";
import { useState } from "react";
import seachIcon from "@/app/assets/dashboard/search.svg";
import Image from "next/image";
import "@/app/styles/default/default.css";
import "@/app/styles/dashboard/sidebar/sidebar.css";

import Avatar from "@/app/assets/feed/demo-img.png";
import SendIcon from "@/app/assets/dashboard/send.svg";
import attachIcon from "@/app/assets/dashboard/attach-file.svg";

export default function Message() {
  const availableChatsArray = [
    {
      id: 1,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "2",
      },
      chatStatus: "active",
      lastMsg: "Chat Request",
      chatTitle: "John Doe", // Added chatTitle
    },
    {
      id: 2,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "1",
      },
      chatStatus: "offline",
      lastMsg: "r u available?",
      chatTitle: "Sarah Lee", // Added chatTitle
    },
    {
      id: 3,
      chatAvatar: Avatar,
      unreadMsgs: null,
      chatStatus: "idle",
      lastMsg: "ok",
      chatTitle: "David Brown", // Added chatTitle
    },
    {
      id: 4,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "0",
      },
      chatStatus: "active",
      lastMsg: "Hey, hows it going?",
      chatTitle: "Alice Smith", // Added chatTitle
    },
    {
      id: 5,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "5",
      },
      chatStatus: "active",
      lastMsg: "Are you free later?",
      chatTitle: "Tom Hanks", // Added chatTitle
    },
    {
      id: 6,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "3",
      },
      chatStatus: "offline",
      lastMsg: "Can we talk?",
      chatTitle: "Jessica Green", // Added chatTitle
    },
    {
      id: 7,
      chatAvatar: Avatar,
      unreadMsgs: null,
      chatStatus: "active",
      lastMsg: "Sending you the details now.",
      chatTitle: "Mark Johnson", // Added chatTitle
    },
    {
      id: 8,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "4",
      },
      chatStatus: "offline",
      lastMsg: "I'll call you tomorrow.",
      chatTitle: "Emily Davis", // Added chatTitle
    },
    {
      id: 9,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "0",
      },
      chatStatus: "active",
      lastMsg: "Thanks for your help!",
      chatTitle: "Chris Martin", // Added chatTitle
    },
    {
      id: 10,
      chatAvatar: Avatar,
      unreadMsgs: {
        unreadMsgCount: "13",
      },
      chatStatus: "active",
      lastMsg: "Urgent! Please respond ASAP.",
      chatTitle: "Katie Taylor", // Added chatTitle
    },
  ];

  return (
    <>
      <CRow className="gx-2 gx-lg-4">
        <CCol lg={4}>
          <div className="sidebar-wrapper sticky-sidebar dashboard-sidebar message-sidebar">
            <div className="message-content-wrapper">
              <div className="message-content-header">
                <h4 className="mb-3">Messages</h4>
                <div className="message-search-wrapper position-relative">
                  <input type="search" placeholder="Popular Chat" />
                  <div className="message-search-btn">
                    <button type="button">
                      <Image
                        src={seachIcon}
                        width={24}
                        height={24}
                        alt="search-icon"
                      ></Image>
                    </button>
                  </div>
                </div>
              </div>
              <div className="message-content-body">
                <ul>
                  {availableChatsArray.map((chat) => (
                    <li key={chat.id}>
                      <div className="chat-info">
                        <div className="chat-info-avatar-wrapper">
                          <Image
                            src={chat.chatAvatar}
                            width={40}
                            height={40}
                            alt="chat-avatar"
                          />
                          {chat.chatStatus === "active" && (
                            <span className="status-dot status-active"></span>
                          )}
                          {chat.chatStatus === "offline" && (
                            <span className="status-dot status-offline"></span>
                          )}
                          {chat.chatStatus === "idle" && (
                            <span className="status-dot status-idle"></span>
                          )}
                        </div>
                        <div className="chat-info-desc ps-2">
                          <h3>{chat.chatTitle}</h3>
                          <p className="last-msg mb-0">{chat.lastMsg}</p>
                        </div>
                        <div className="chat-msg-count">
                          {chat.unreadMsgs &&
                            chat.unreadMsgs.unreadMsgCount > 0 && (
                              <span className="unread-msg-count">
                                {parseInt(chat.unreadMsgs.unreadMsgCount) > 10
                                  ? "10+"
                                  : chat.unreadMsgs.unreadMsgCount}
                              </span>
                            )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CCol>
        <CCol lg={8}>
          <div className="sidebar-wrapper sticky-sidebar dashboard-sidebar message-sidebar">
            <div className="chat-placeholder-wrapper">
              <div className="chat-header-wrapper">
                <div className="chat-header-placeholder">
                  <div className="chat-header-avatar">
                    <Image
                      src={Avatar}
                      width={60}
                      height={60}
                      alt="active-chat-avatar"
                    ></Image>
                  </div>
                  <div className="chat-header-avatar-desc ps-2">
                    <h4>Support admin</h4>
                  </div>
                </div>
              </div>
              <div className="chat-body-wrapper">
                <div className="chat-body-placeholder">
                  <div className="chat-list-wrapper">
                    <ul>
                      <li>
                        <div className="single-chat-box-wrapper">
                          <div className="single-chat-box-avatar dot-avatar">
                            <span></span>
                          </div>
                          <div className="single-chat-box-msg ms-3">
                            <div className="chat-msg-box">
                              <p className="mb-0">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="pe-3">
                        <div className="single-chat-box-wrapper justify-content-start flex-row-reverse">
                          <div className="single-chat-box-avatar ">
                            <Image src={Avatar} width={40} height={40} alt="active-chat-avatar"></Image>
                          </div>
                          <div className="single-chat-box-msg me-3">
                            <div className="chat-msg-box">
                              <p className="mb-0 sender-chat-box">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2 text-end">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-chat-box-wrapper">
                          <div className="single-chat-box-avatar dot-avatar">
                            <span></span>
                          </div>
                          <div className="single-chat-box-msg ms-3">
                            <div className="chat-msg-box">
                              <p className="mb-0">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="pe-3">
                        <div className="single-chat-box-wrapper justify-content-start flex-row-reverse">
                          <div className="single-chat-box-avatar ">
                            <Image src={Avatar} width={40} height={40} alt="active-chat-avatar"></Image>
                          </div>
                          <div className="single-chat-box-msg me-3">
                            <div className="chat-msg-box">
                              <p className="mb-0 sender-chat-box">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2 text-end">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-chat-box-wrapper">
                          <div className="single-chat-box-avatar dot-avatar">
                            <span></span>
                          </div>
                          <div className="single-chat-box-msg ms-3">
                            <div className="chat-msg-box">
                              <p className="mb-0">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="pe-3">
                        <div className="single-chat-box-wrapper justify-content-start flex-row-reverse">
                          <div className="single-chat-box-avatar ">
                            <Image src={Avatar} width={40} height={40} alt="active-chat-avatar"></Image>
                          </div>
                          <div className="single-chat-box-msg me-3">
                            <div className="chat-msg-box">
                              <p className="mb-0 sender-chat-box">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2 text-end">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-chat-box-wrapper">
                          <div className="single-chat-box-avatar dot-avatar">
                            <span></span>
                          </div>
                          <div className="single-chat-box-msg ms-3">
                            <div className="chat-msg-box">
                              <p className="mb-0">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="pe-3">
                        <div className="single-chat-box-wrapper justify-content-start flex-row-reverse">
                          <div className="single-chat-box-avatar ">
                            <Image src={Avatar} width={40} height={40} alt="active-chat-avatar"></Image>
                          </div>
                          <div className="single-chat-box-msg me-3">
                            <div className="chat-msg-box">
                              <p className="mb-0 sender-chat-box">
                                Lorem Ipsum has been the industrys standard
                                dummy text ever since the 1500s,
                              </p>
                            </div>
                            <div className="chat-time mt-2 text-end">
                              <label>08:00 Pm</label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chat-footer-wrapper">
                <div className="chat-footer-content-wrapper position-relative">
                  <input type="text" placeholder="Type Your Message Here" />
                  <div className="send-msg-action">
                    <ul>
                      <li>
                        <button type="button">
                          <Image
                            src={SendIcon}
                            width={24}
                            height={24}
                            alt="send-icon"
                          ></Image>
                        </button>
                      </li>
                      <li>
                        <button type="button">
                          <Image
                            src={attachIcon}
                            width={24}
                            height={24}
                            alt="send-icon"
                          ></Image>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CCol>
      </CRow>
    </>
  );
}
