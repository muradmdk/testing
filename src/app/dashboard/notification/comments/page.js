"use client";
import Image from "next/image";
import React from "react";
import "@/app/styles/dashboard/notification/notification.css";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";
import "@/app/styles/Feeds/feeds.css"
function Comments() {
  const commentArray = [
    {
      id: 1,
      commentAvatar: Avatar,
      commentBy: "Lily Bennett",
      comment:
        "Best track i have ever found, recomended.Best track i have ever found, recomended.",
      commentTime: "2 hours ago",
    },
    {
      id: 2,
      commentAvatar: Avatar,
      commentBy: "Marcus Liu",
      comment:
        "Track 6 has been on repeat all day! The bassline is addictive, and those lyrics really hit home.",
      commentTime: "30 minutes ago",
    },
  ];

  return (
    <>
      <div className="notfication-wrapper">
        <div className="text-end">
          <CDropdown>
            <CDropdownToggle color="secondary">
              All Notifications
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">All Notifications</CDropdownItem>
              <CDropdownItem href="#">Comments</CDropdownItem>
              <CDropdownItem href="#">Repost</CDropdownItem>
              <CDropdownItem href="#">Subscribe</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
        <div className="notification-card-wrapper mt-4">
          <div className="notification-card-title mb-5">
            <h3 className="fw-600 font-lato">Comments</h3>
          </div>
          <div className="notification-comment-list-wrapper">
            <div className="comment-list mt-3" style={{maxHeight:"100%"}}>
              <ul>
                {commentArray?.length > 0 ? (
                  commentArray.map((comment, index) => (
                    <li key={index} className="single-comment mb-3">
                      <div className="single-comment-placeholder">
                        <div className="single-comment-avatar">
                          <Image
                            src={comment.commentAvatar}
                            alt=""
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="single-avatar-desc">
                          <label htmlFor="">{comment.commentBy}</label>
                          <span>{comment.commentTime}</span>
                        </div>
                      </div>
                      <p className="mb-0 comment mt-1">{comment.comment}</p>
                      <div className="text-end">
                        <button className="fw-600 font-lato fs-16" style={{background:'transparent',border:'none',padding:'0px'}}>Reply</button>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="no-feed-wrapper text-center">
                    <p className="mb-0">No Comment Available</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
