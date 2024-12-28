"use client";
import { CCol, CNav, CNavItem, CNavLink, CRow, CTabContent, CTabPane } from '@coreui/react';
import React, { useState } from 'react';
import Feed from './Feed';
import Albums from './Albums';
import VideoSrc from "@/app/assets/sampleVideo.mp4"

// Thumbnails
import Thumbnail1 from "@/app/assets/feed/feed-1.png";
import Thumbnail2 from "@/app/assets/feed/feed-2.png";

// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";

// Album Thumbnail
import albumThumbnail from "@/app/assets/feed/albumThumbnail.png";

// Feed List
import FeedList from '@/app/dashboardComponents/dashboardFeedList/FeedList';

// Sample Music
import SampleMusic from "@/app/assets/sampleMusic.mp3";

function ProfileTabs() {

    const [activeKey, setActiveKey] = useState(1);

    const HomeFeedArray = [
      {
        id: 1,
        trackThumbnail: Thumbnail1,
        trackSrc: SampleMusic,
        feedType:"audio",
        totalLikes: "274K",
        totolComments: "53",
        totalShare: "45",
        albumName: "Northern Attitude",
        albumBy: "Ahmed Hassan",
        albumThumbnail: albumThumbnail,
        feedPostDate:"30 Sep at 3:30 PM",
        userProfile:{
          userAvatar:Avatar,
          userName:"hassan",
        },
        comments: [
          {
            id: 1,
            commentAvatar: Avatar,
            commentBy: "Lily Bennett",
            comment: "This mixtape is incredible! The transitions between tracks are so smooth, it feels like a single journey.",
            commentTime: "2 hours ago"
          },
          {
            id: 2,
            commentAvatar: Avatar,
            commentBy: "Marcus Liu",
            comment: "Track 6 has been on repeat all day! The bassline is addictive, and those lyrics really hit home.",
            commentTime: "30 minutes ago"
          },
          {
            id: 3,
            commentAvatar: Avatar,
            commentBy: "Zara Patel",
            comment: "Loving the new sound! It's fresh and different from their usual style, but it totally works.",
            commentTime: "1 day ago"
          },
          {
            id: 4,
            commentAvatar: Avatar,
            commentBy: "Daniel Green",
            comment: "This album is giving me serious summer vibes. Perfect soundtrack for road trips!",
            commentTime: "3 hours ago"
          },
          {
            id: 5,
            commentAvatar: Avatar,
            commentBy: "Ava Collins",
            comment: "The way the melody builds in the chorus of track 3 is just magical. Instant favorite.",
            commentTime: "2 days ago"
          },
          {
            id: 6,
            commentAvatar: Avatar,
            commentBy: "Elijah Carter",
            comment: "Honestly, this might be their best work yet. The production is so clean, and every song feels like a hit.",
            commentTime: "1 hour ago"
          },
        ]
      },
      {
        id: 2,
        trackThumbnail: Thumbnail2,
        trackSrc: VideoSrc,
        feedType:"video",
        totalLikes: "174K",
        totolComments: "99",
        albumName: "Value Mix",
        totalShare: "90",
        albumBy: "Murad Mansha",
        albumThumbnail: albumThumbnail,
        feedPostDate:"30 Sep at 3:30 PM",
        userProfile:{
          userAvatar:Avatar,
          userName:"hassan",
        },
        comments: [
          {
            id: 1,
            commentAvatar: Avatar,
            commentBy: "Nina Roberts",
            comment: "I wasn't sure what to expect, but this album totally blew me away. It's on repeat all weekend!",
            commentTime: "5 hours ago"
          },
          {
            id: 2,
            commentAvatar: Avatar,
            commentBy: "Oliver Park",
            comment: "The guitar solo in track 8 gave me chills. You can feel the emotion in every note.",
            commentTime: "45 minutes ago"
          },
          {
            id: 3,
            commentAvatar: Avatar,
            commentBy: "Maya Jenkins",
            comment: "Finally an album where I love every song! There's so much soul in this one.",
            commentTime: "4 days ago"
          },
          {
            id: 4,
            commentAvatar: Avatar,
            commentBy: "Jake Moreno",
            comment: "Such a unique sound! They really pushed their boundaries with this release, and it paid off big time.",
            commentTime: "3 hours ago"
          }
        ]
      },
    ];

    return (
        <>
         <CRow >
            <CCol lg={12}>
              <div className='profile-nav-list mt-4'>
                <CNav variant="pills" role="tablist">
                  <CNavItem>
                    <CNavLink
                      href="#!"
                      active={activeKey === 1}
                      onClick={() => setActiveKey(1)}
                    >
                      Albums
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      href="#!"
                      active={activeKey === 2}
                      onClick={() => setActiveKey(2)}
                    >
                      Feeds
                    </CNavLink>
                  </CNavItem>
                </CNav>
              </div>
            </CCol>
            <CCol lg={12} className='mt-4'>
              <CTabContent>
                <CTabPane role="tabpanel" visible={activeKey === 1}>
                  <Albums/>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 2}>
                {HomeFeedArray.length > 0 ? (
                  HomeFeedArray.map((feed) => (
                    <FeedList key={feed.id} feedData={feed} />
                  ))
                ) : (
                  <div className='no-feed-wrapper text-center'>
                    <p className='mb-0'>No Feed Available</p>
                  </div>
                )}
                </CTabPane>
              </CTabContent>
            </CCol>
          </CRow>
        </>
    )
}

export default ProfileTabs;