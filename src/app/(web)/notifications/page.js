import React from "react";
import avatar1 from "@/app/assets/avatar/avatar-1.jpg";
import avatar2 from "@/app/assets/avatar/avatar-2.jpg";
import avatar3 from "@/app/assets/avatar/avatar-3.jpg";
import { CRow, CCol } from "@coreui/react";
import "@/app/styles/home/notification.css";
import Image from "next/image";

export default function Notification() {
    const notificationArray = [
        {
          id: 1,
          avatar: avatar1,
          name: "Emily Smith",
          timestamp: "2 hours ago",
          desc: "Just discovered this playlist, it's amazing!",
        },
        {
          id: 2,
          avatar: avatar2,
          name: "Michael Johnson",
          timestamp: "15 minutes ago",
          desc: "The beats in this track are out of this world. 🔥",
        },
        {
          id: 3,
          avatar: avatar3,
          name: "Sophia Williams",
          timestamp: "1 day ago",
          desc: "Can't stop listening to this masterpiece. Highly recommend!",
        },
        {
          id: 4,
          avatar: avatar1,
          name: "James Brown",
          timestamp: "3 days ago",
          desc: "This is exactly the vibe I was looking for! Thanks for sharing.",
        },
        {
          id: 5,
          avatar: avatar2,
          name: "Olivia Johnson",
          timestamp: "10 minutes ago",
          desc: "This track has been on repeat all day. So good!",
        },
        {
          id: 6,
          avatar: avatar3,
          name: "William Garcia",
          timestamp: "5 hours ago",
          desc: "Wow, what a gem! Can't believe I hadn't heard this before.",
        },
        {
          id: 7,
          avatar: avatar1,
          name: "Mia Martinez",
          timestamp: "20 minutes ago",
          desc: "Chill vibes all the way. Perfect for my weekend.",
        },
        {
          id: 8,
          avatar: avatar2,
          name: "Ethan Davis",
          timestamp: "12 hours ago",
          desc: "Loving the energy in this track. It keeps me going!",
        },
        {
          id: 9,
          avatar: avatar3,
          name: "Charlotte Lee",
          timestamp: "7 days ago",
          desc: "What a throwback! Brings back so many memories.",
        },
        {
          id: 10,
          avatar: avatar1,
          name: "Benjamin Wilson",
          timestamp: "30 seconds ago",
          desc: "Just stumbled on this, and I already love it!",
        },
    ];
    

  return (
    <section className="home-notification-wrapper">
      <CRow className="h-100">
        <CCol lg={12} className="h-100">
          <div className="home-notification-placeholder">
            <div className="home-notification-header">
              <h4>Notification</h4>
            </div>
            <div className="home-notification-body mt-3">
              <ul>
                {notificationArray.length > 0 ? (
                  notificationArray.map((notification) => (
                    <li key={notification.id}>
                      <div className="single-notify-wrapper">
                        <div className="single-notify-avatar">
                          <Image
                            src={notification.avatar}
                            width={50}
                            height={50}
                            alt={`${notification.name}-avatar`}
                          />
                        </div>
                        <div className="single-notify-desc">
                          <div className="single-notify-desc-header">
                            <h5>{notification.name}</h5>
                            <span className="ms-2">{notification.timestamp}</span>
                          </div>
                          <p className="mb-0">{notification.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="text-center no-notification">
                    <p className="mb-0">No Notification Available</p>
                  </div>
                )}
              </ul>
            </div>
            <div className="home-notification-footer pt-1">
              <div className="home-notification-content">
                <button type="button">Prev</button>
                <button type="button" className="ms-2">Next</button>
              </div>
            </div>
          </div>
        </CCol>
      </CRow>
    </section>
  );
}
