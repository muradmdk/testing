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
function Reports() {
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
            <h3 className="fw-600 font-lato">Reports</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
