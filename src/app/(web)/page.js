"use client";
import React from 'react';
// Thumbnails
import Thumbnail1 from "@/app/assets/feed/feed-1.png";
import Thumbnail2 from "@/app/assets/feed/feed-2.png";

// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";

// Album Thumbnail
import albumThumbnail from "@/app/assets/feed/albumThumbnail.png";

// Feed List
import FeedList from '@/app/components/HomeFeed/FeedList';

// Sample Music
import SampleMusic from "@/app/assets/sampleMusic.mp3";
import SampleMusic2 from "@/app/assets/sampleMusic2.mp3";
import SampleMusic3 from "@/app/assets/sampleMusic2.mp3";
import VideoSrc from "@/app/assets/sampleVideo.mp4"

export default function HomePage() {
  const HomeFeedArray = [
    {
      id: 1,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic,
      feedType:"audio",
      totalLikes: "274K",
      trackTitle:"Naruto Alone",
      trackLength:"00:41",
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

    },
    {
      id: 2,
      trackThumbnail: Thumbnail2,
      trackSrc: VideoSrc,
      feedType:"video",
      totalLikes: "174K",
      trackTitle:"Naruto Alone",
      trackLength:"00:41",
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
    },
    {
      id: 3,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic2,
      feedType:"audio",
      totalLikes: "274K",
      totolComments: "53",
      trackTitle:"Naruto Alone",
      trackLength:"00:41",
      totalShare: "45",
      albumName: "Northern Attitude",
      albumBy: "Ahmed Hassan",
      albumThumbnail: albumThumbnail,
      feedPostDate:"30 Sep at 3:30 PM",
      userProfile:{
        userAvatar:Avatar,
        userName:"hassan",
      },
    },
    {
      id: 4,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic,
      feedType:"audio",
      totalLikes: "274K",
      totolComments: "53",
      totalShare: "45",
      trackTitle:"Naruto Alone",
      trackLength:"00:41",
      albumName: "Northern Attitude",
      albumBy: "Ahmed Hassan",
      albumThumbnail: albumThumbnail,
      feedPostDate:"30 Sep at 3:30 PM",
      userProfile:{
        userAvatar:Avatar,
        userName:"hassan",
      },
    },
    {
      id: 5,
      trackThumbnail: Thumbnail2,
      trackSrc: "https://files.vidstack.io/sprite-fight/720p.mp4",
      feedType:"video",
      trackTitle:"demon Salyer",
      trackLength:"03:41",
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
    },
  ];
  return (
    <>
      {HomeFeedArray.length > 0 ? (
        HomeFeedArray.map((feed) => (
          <FeedList key={feed.id} feedData={feed} FeedLocation={"home"} />
        ))
      ) : (
        <div className='no-feed-wrapper text-center'>
          <p className='mb-0'>No Feed Available</p>
        </div>
      )}
    </>
  );
}
