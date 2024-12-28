import React, { useState } from "react";
import "@/app/styles/UI/comment.css";
import avatar1 from "@/app/assets/avatar/avatar-1.jpg";
import avatar2 from "@/app/assets/avatar/avatar-2.jpg";
import avatar3 from "@/app/assets/avatar/avatar-3.jpg";
import avatar4 from "@/app/assets/avatar/avatar-4.jpg";
import avatar5 from "@/app/assets/avatar/avatar-5.jpg";
import avatar6 from "@/app/assets/avatar/avatar-6.jpg";
import avatar7 from "@/app/assets/avatar/avatar-7.jpg";
import avatar8 from "@/app/assets/avatar/avatar-8.jpg";
import avatar9 from "@/app/assets/avatar/avatar-9.jpg";
import avatar10 from "@/app/assets/avatar/avatar-10.jpg";
import avatar12 from "@/app/assets/avatar/avatar-12.jpg";
import Image from "next/image";
import sendMsg from "@/app/assets/feed/paper-airplane.svg";
import Link from "next/link";
import { CCollapse } from "@coreui/react";

export default function Comment() {
  const currentUser = "CurrentUser";
  const [visible, setVisible] = useState(false);
  const [visibleReplyInputs, setVisibleReplyInputs] = useState([]);
  const [focusedCommentId, setFocusedCommentId] = useState(null);
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "This is the first comment",
      user: "User1",
      avatar: avatar1,
      subChild: [
        {
          id: 11,
          text: "This is a reply to the first comment",
          user: "User2",
          avatar: avatar2,
          grandChild: [
            {
              id: 111,
              text: "This is a reply to the reply",
              user: "User3",
              avatar: avatar3,
            },
          ],
        },
        {
          id: 12,
          text: "This is another reply to the first comment",
          user: "User2",
          avatar: avatar2,
          grandChild: [],
        },
      ],
    },
    {
      id: 2,
      text: "This is another top-level comment",
      user: "User4",
      avatar: avatar4,
      subChild: [],
    },
    {
      id: 3,
      text: "This is a comment by User5",
      user: "User5",
      avatar: avatar5,
      subChild: [
        {
          id: 31,
          text: "This is a reply by User6 to User5's comment",
          user: "User6",
          avatar: avatar6,
          grandChild: [],
        },
      ],
    },
    {
      id: 4,
      text: "This is a top-level comment by User7",
      user: "User7",
      avatar: avatar7,
      subChild: [],
    },
    {
      id: 5,
      text: "User8 commenting on the post",
      user: "User8",
      avatar: avatar8,
      subChild: [
        {
          id: 51,
          text: "Reply by User9 to User8's comment",
          user: "User9",
          avatar: avatar9,
          grandChild: [
            {
              id: 511,
              text: "Further reply by User10 to User9",
              user: "User10",
              avatar: avatar10,
            },
            {
              id: 512,
              text: "Another reply by User10 to User9",
              user: "User10",
              avatar: avatar12,
            },
          ],
        },
      ],
    },
  ]);

  const toggleReplyInput = (id) => {
    setVisibleReplyInputs((prev) =>
      prev.includes(id)
        ? prev.filter((inputId) => inputId !== id)
        : [...prev, id]
    );
  };

  const addReply = (parentId, replyText, user, avatar, mentionUser) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === parentId) {
          const newReply = {
            id: Math.max(0, ...comment.subChild.map((child) => child.id)) + 1,
            text: replyText,
            user: user,
            avatar: avatar,
            mentionUser: mentionUser,
            grandChild: [],
          };
          return {
            ...comment,
            subChild: [...comment.subChild, newReply],
          };
        } else {
          return {
            ...comment,
            subChild: comment.subChild.map((child) => {
              if (child.id === parentId) {
                if (!child.grandChild) {
                  child.grandChild = [];
                }
                const newReply = {
                  id: Math.max(0, ...child.grandChild.map((gc) => gc.id)) + 1,
                  text: replyText,
                  user: user,
                  avatar: avatar,
                  mentionUser: mentionUser,
                };
                return {
                  ...child,
                  grandChild: [...child.grandChild, newReply],
                };
              }
              return child;
            }),
          };
        }
      });
    });
  };

  const addSubChildReply = (
    commentId,
    replyText,
    user,
    avatar,
    mentionUser
  ) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          const newSubChild = {
            id: Math.max(0, ...comment.subChild.map((child) => child.id)) + 1,
            text: replyText,
            user: user,
            avatar: avatar,
            mentionUser: mentionUser,
            grandChild: [],
          };
          return {
            ...comment,
            subChild: [...comment.subChild, newSubChild],
          };
        }
        return comment;
      });
    });
  };

  const addNewComment = (replyText, user, avatar) => {
    setComments((prevComments) => {
      const newComment = {
        id: Math.max(0, ...prevComments.map((comment) => comment.id)) + 1,
        text: replyText,
        user: user,
        avatar: avatar,
        subChild: [],
      };
      setVisible(true);
      return [newComment, ...prevComments];
    });
  };

  return (
    <div>
      <div className="post-search-wrapper position-relative mb-2">
        <input
          type="text"
          className="post-input"
          placeholder="Write Your Comments"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              addNewComment(e.target.value, currentUser, avatar1);
              e.target.value = "";
            }
          }}
        />
        <div className="reply-btn-wrapper">
          <button
            type="button"
            onClick={() => {
              const inputElement = document.querySelector(".post-input");
              if (inputElement && inputElement.value.trim() !== "") {
                addNewComment(inputElement.value, currentUser, avatar1);
                inputElement.value = "";
              }
            }}
          >
            <Image src={sendMsg} width={16} height={16} alt="Send" />
          </button>
        </div>
      </div>

      {comments.length > 0 && (
        <>
          <button className="toggle-comment-btn" onClick={() => setVisible(!visible)}>
            {
              visible ? "Hide All Comments" : "View All Comments"
            }
          </button>
          <CCollapse visible={visible}>
            <ul className="comment-list comment-list-wrapper">
              {comments.map((comment) => (
                <li key={comment.id} className="sigle-comment-card mb-2">
                  <div className="position-relative">
                    <div className="sigle-comment-box-wrapper">
                      <div className="single-comment-box-avatar">
                        <Image
                          src={comment.avatar}
                          width={36}
                          height={36}
                          alt="Avatar"
                        />
                      </div>
                      <div className="single-comment-box-desc ps-1">
                        <div className="single-comment-box-placeholder">
                          <div className="d-flex">
                            <h6>{comment.user}</h6>
                            <span className="mb-0 ms-2">6 hours ago</span>
                          </div>
                          <p className="mb-0">{comment.text}</p>
                        </div>

                        <div className="comment-action-wrapper">
                          <div className="comment-timestamp">
                            <span>6d</span>
                          </div>
                          <div className="comment-like ms-1">
                            <button type="button">
                              Like - <span>3</span>
                            </button>
                          </div>
                          {comment.user !== currentUser && (
                            <div className="comment-reply ms-2">
                              <button
                                type="button"
                                onClick={() => toggleReplyInput(comment.id)}
                              >
                                reply
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {comment.subChild && comment.subChild.length > 0 && (
                      <div className="position-relative">
                        {comment.subChild.map((child) => (
                          <div key={child.id}>
                            <div className="child-comment-box-placeholder position-relative">
                              <div className="sigle-comment-box-wrapper child-comment-box mt-2">
                                <div className="single-comment-box-avatar">
                                  <Image
                                    src={child.avatar}
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                  />
                                </div>
                                <div className="single-comment-box-desc ps-1">
                                  <div className="single-comment-box-placeholder">
                                    <div className="d-flex">
                                      <h6>{child.user}</h6>
                                      <span className="mb-0 ms-2">
                                        6 hours ago
                                      </span>
                                    </div>
                                    <p className="mb-0">
                                      <Link
                                        href="#"
                                        className="mention-user me-1"
                                      >
                                        @{child.mentionUser || comment.user}
                                      </Link>
                                      {child.text}
                                    </p>
                                  </div>

                                  <div className="comment-action-wrapper">
                                    <div className="comment-timestamp">
                                      <span>6d</span>
                                    </div>
                                    <div className="comment-like ms-1">
                                      <button type="button">
                                        Like - <span>3</span>
                                      </button>
                                    </div>
                                    {child.user !== currentUser && (
                                      <div className="comment-reply ms-2">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            toggleReplyInput(child.id)
                                          }
                                        >
                                          reply
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                  {visibleReplyInputs.includes(child.id) && (
                                    <div className="inline-reply-input position-relative mt-1 mb-1">
                                      <input
                                        type="text"
                                        className="post-input"
                                        style={{ paddingLeft: "20px" }}
                                        placeholder={`Reply to @${child.user}`}
                                        onFocus={() =>
                                          setFocusedCommentId(child.id)
                                        }
                                        onBlur={() => setFocusedCommentId(null)}
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                            addReply(
                                              child.id,
                                              e.target.value,
                                              currentUser,
                                              avatar1,
                                              child.user
                                            );
                                            e.target.value = "";
                                            toggleReplyInput(child.id);
                                          }
                                        }}
                                      />
                                      <div className="reply-btn-wrapper">
                                        <button type="button">
                                          <Image
                                            src={sendMsg}
                                            width={16}
                                            height={16}
                                            alt="Send"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div
                                className={`child-line-connector-horizontal ${
                                  focusedCommentId === child.id
                                    ? "focus-is-on-ch"
                                    : ""
                                }`}
                              >
                                <span></span>
                              </div>
                            </div>
                            {child.grandChild &&
                              child.grandChild.length > 0 && (
                                <div>
                                  {child.grandChild.map((grandchild) => (
                                    <div
                                      key={grandchild.id}
                                      className="grandchild-comment-box position-relative"
                                    >
                                      <div className="sigle-comment-box-wrapper mt-2">
                                        <div className="single-comment-box-avatar">
                                          <Image
                                            src={grandchild.avatar}
                                            width={36}
                                            height={36}
                                            alt="Avatar"
                                          />
                                        </div>
                                        <div className="single-comment-box-desc ps-1">
                                          <div className="single-comment-box-placeholder">
                                            <div className="d-flex">
                                              <h6>{grandchild.user}</h6>
                                              <span className="mb-0 ms-2">
                                                6 hours ago
                                              </span>
                                            </div>
                                            <p className="mb-0">
                                              <Link
                                                href="#"
                                                className="mention-user me-1"
                                              >
                                                @
                                                {grandchild.mentionUser ||
                                                  child.user}
                                              </Link>
                                              {grandchild.text}
                                            </p>
                                          </div>

                                          <div className="comment-action-wrapper">
                                            <div className="comment-timestamp">
                                              <span>6d</span>
                                            </div>
                                            <div className="comment-like ms-1">
                                              <button type="button">
                                                Like - <span>3</span>
                                              </button>
                                            </div>
                                            {grandchild.user !==
                                              currentUser && (
                                              <div className="comment-reply ms-2">
                                                <button
                                                  type="button"
                                                  onClick={() =>
                                                    toggleReplyInput(
                                                      grandchild.id
                                                    )
                                                  }
                                                >
                                                  reply
                                                </button>
                                              </div>
                                            )}
                                          </div>
                                          {visibleReplyInputs.includes(
                                            grandchild.id
                                          ) && (
                                            <div className="inline-reply-input position-relative mt-1 mb-1">
                                              <input
                                                type="text"
                                                className="post-input"
                                                style={{ paddingLeft: "20px" }}
                                                placeholder={`Reply to @${grandchild.user}`}
                                                onFocus={() =>
                                                  setFocusedCommentId(
                                                    grandchild.id
                                                  )
                                                }
                                                onBlur={() =>
                                                  setFocusedCommentId(null)
                                                }
                                                onKeyDown={(e) => {
                                                  if (e.key === "Enter") {
                                                    addReply(
                                                      child.id,
                                                      e.target.value,
                                                      currentUser,
                                                      avatar1,
                                                      grandchild.user
                                                    );
                                                    e.target.value = "";
                                                    toggleReplyInput(
                                                      grandchild.id
                                                    );
                                                  }
                                                }}
                                              />
                                              <div className="reply-btn-wrapper">
                                                <button type="button">
                                                  <Image
                                                    src={sendMsg}
                                                    width={16}
                                                    height={16}
                                                    alt="Send"
                                                  />
                                                </button>
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div
                                        className={`grandchild-line-connector-horizontal ${
                                          focusedCommentId === grandchild.id
                                            ? "focus-is-on-gs"
                                            : ""
                                        }`}
                                      >
                                        <span></span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                        <div className="child-line-connector-vertival">
                          <span></span>
                        </div>
                      </div>
                    )}
                    {comment.user !== currentUser && (
                      <div className="child-reply-inout-wrapper mt-3">
                        <input
                          type="text"
                          className="post-input"
                          placeholder={`Reply to @${comment.user}`}
                          style={{ paddingLeft: "20px" }}
                          onFocus={() => setFocusedCommentId(comment.id)}
                          onBlur={() => setFocusedCommentId(null)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              addSubChildReply(
                                comment.id,
                                e.target.value,
                                currentUser,
                                avatar1,
                                comment.user
                              );
                              e.target.value = "";
                            }
                          }}
                        />
                        <div className="reply-btn-wrapper">
                          <button type="button">
                            <Image
                              src={sendMsg}
                              width={16}
                              height={16}
                              alt="Send"
                            />
                          </button>
                        </div>
                      </div>
                    )}
                    <div
                      className={`main-coment-line-connector ${
                        focusedCommentId === comment.id ? "focus-is-on" : ""
                      }`}
                    >
                      <span></span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CCollapse>
        </>
      )}
    </div>
  );
}
