"use client";
import React, { useState, useEffect } from "react";
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
} from "@coreui/react";
import Link from "next/link";
import logoutIcon from "@/app/assets/log-out.svg";
import Image from "next/image";
import QueueList from "../QueueList/QueueList";
import "@/app/styles/sideBars/left.css";

// artist
import artist1 from "@/app/assets/artist/06.png";
import artist2 from "@/app/assets/artist/07.png";
import artist3 from "@/app/assets/artist/08.png";
import artist4 from "@/app/assets/artist/09.png";
import artist5 from "@/app/assets/artist/10.png";
import artist6 from "@/app/assets/artist/11.png";
import artist7 from "@/app/assets/artist/12.png";
import artist8 from "@/app/assets/artist/13.png";
import artist9 from "@/app/assets/artist/14.png";
import artist10 from "@/app/assets/artist/15.png";
import artist11 from "@/app/assets/artist/16.png";
import artist12 from "@/app/assets/artist/17.png";

// Sample Music
import SampleMusic from "@/app/assets/sampleMusic.mp3";
import SampleMusic2 from "@/app/assets/sampleMusic2.mp3";

// Thumbnails
import Thumbnail1 from "@/app/assets/feed/feed-1.png";
import Thumbnail2 from "@/app/assets/feed/feed-2.png";

// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";
import { logout } from "@/app/redux/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // For routing
function SidebarLeft({ dashBoarddropdown }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  // const [queueList, setQueueList] = useState([]);

  // useEffect(() => {
  //     const fetchQueueList = async () => {
  //         const res = await fetch("/data/queueList.json");
  //         const data = await res.json();
  //         setQueueList(data);
  //     };

  //     fetchQueueList();
  // }, [])
  const handleLogout = () => {
    localStorage.removeItem('currentTrackState');
    dispatch(logout());
    router.push("/login");
  };

  const QueueListArray = [
    {
      id: 1,
      trackName: "The Cruelest Summer New Edition ",
      artistName: "Taylor Swift",
      artistAvatar: artist1,
      trackSrc: SampleMusic,
      AlbumInfo: {
        albumThumbnail: Thumbnail1,
        albumName: "Skyfall Beats",
        albumArtist: "Ahmed Hassan",
      },
      TrackInfo: {
        totalLike: "218K",
      },
      trackDesc:
        "On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Jane Doe",
          CommentTime: "6 hours ago",
          comment: "Best track I have ever found, recommended.",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "John Smith",
          CommentTime: "1 day ago",
          comment: "This song is a masterpiece!",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Emily Johnson",
          CommentTime: "2 days ago",
          comment: "Can't stop listening to this on repeat!",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Michael Brown",
          CommentTime: "3 days ago",
          comment: "The lyrics and beat are so addictive.",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Sophia White",
          CommentTime: "5 days ago",
          comment: "Taylor Swift's best track yet!",
        },
      ],
    },
    {
      id: 2,
      trackName: "Blinding Lights",
      artistName: "The Weeknd",
      artistAvatar: artist2,
      trackSrc: SampleMusic2,
      AlbumInfo: {
        albumThumbnail: Thumbnail2,
        albumName: "After Hours",
        albumArtist: "The Weeknd",
      },
      TrackInfo: {
        totalLike: "500K",
      },
      trackDesc:
        "Experience The Weeknd’s iconic sound with this track. High energy and unforgettable melodies await.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Alex Grey",
          CommentTime: "2 hours ago",
          comment: "The beat in this song is unreal!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Chris Blue",
          CommentTime: "1 day ago",
          comment: "This song takes me to another world!",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Taylor Green",
          CommentTime: "3 days ago",
          comment: "An instant classic!",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Jordan Black",
          CommentTime: "4 days ago",
          comment: "One of my all-time favorites.",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Sam White",
          CommentTime: "1 week ago",
          comment: "Played this at my party, and it was a hit!",
        },
      ],
    },
    {
      id: 3,
      trackName: "Levitating",
      artistName: "Dua Lipa",
      artistAvatar: artist3,
      trackSrc: SampleMusic,
      AlbumInfo: {
        albumThumbnail: Thumbnail1,
        albumName: "Future Nostalgia",
        albumArtist: "Dua Lipa",
      },
      TrackInfo: {
        totalLike: "320K",
      },
      trackDesc:
        "A fun, upbeat song that’ll keep you dancing. Dua Lipa at her best!",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Sam Carter",
          CommentTime: "1 hour ago",
          comment: "Love the energy in this track!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Eva White",
          CommentTime: "12 hours ago",
          comment: "Can't help but dance to this!",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Luke Red",
          CommentTime: "3 days ago",
          comment: "Future Nostalgia rocks!",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Emma Yellow",
          CommentTime: "4 days ago",
          comment: "Dua Lipa never disappoints.",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Sarah Black",
          CommentTime: "6 days ago",
          comment: "Perfect song to boost my mood!",
        },
      ],
    },
    {
      id: 4,
      trackName: "Shape of You",
      artistName: "Ed Sheeran",
      artistAvatar: artist4,
      trackSrc: SampleMusic2,
      AlbumInfo: {
        albumThumbnail: Thumbnail2,
        albumName: "Divide",
        albumArtist: "Ed Sheeran",
      },
      TrackInfo: {
        totalLike: "1M",
      },
      trackDesc:
        "Ed Sheeran’s most popular track with a catchy beat and unforgettable lyrics.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Olivia Green",
          CommentTime: "3 hours ago",
          comment: "Can listen to this all day!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Mason Grey",
          CommentTime: "5 hours ago",
          comment: "Amazing track by Ed!",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Sophia Blue",
          CommentTime: "1 day ago",
          comment: "This song never gets old.",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Noah Black",
          CommentTime: "2 days ago",
          comment: "Loved this since day one.",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Ava White",
          CommentTime: "1 week ago",
          comment: "Still trending after so long!",
        },
      ],
    },
    {
      id: 5,
      trackName: "Bad Guy",
      artistName: "Billie Eilish",
      artistAvatar: artist5,
      trackSrc: SampleMusic,
      AlbumInfo: {
        albumThumbnail: Thumbnail1,
        albumName: "When We All Fall Asleep, Where Do We Go?",
        albumArtist: "Billie Eilish",
      },
      TrackInfo: {
        totalLike: "800K",
      },
      trackDesc:
        "A bold track that pushes boundaries with Billie’s unique style.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Mike Brown",
          CommentTime: "2 hours ago",
          comment: "Billie is the queen of style!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Clara Red",
          CommentTime: "8 hours ago",
          comment: "This track is iconic!",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Finn Black",
          CommentTime: "1 day ago",
          comment: "Unmatched creativity.",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Tina White",
          CommentTime: "3 days ago",
          comment: "I’m a huge Billie fan!",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Leo Green",
          CommentTime: "6 days ago",
          comment: "This beat is something else!",
        },
      ],
    },
    {
      id: 6,
      trackName: "Blow Your Mind",
      artistName: "Dua Lipa",
      artistAvatar: artist6,
      trackSrc: SampleMusic2,
      AlbumInfo: {
        albumThumbnail: Thumbnail2,
        albumName: "Future Nostalgia",
        albumArtist: "Dua Lipa",
      },
      TrackInfo: {
        totalLike: "210K",
      },
      trackDesc: "An energetic and fun song that’s great for any mood.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Nina Grey",
          CommentTime: "30 minutes ago",
          comment: "Dua's best yet!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Eli Black",
          CommentTime: "5 hours ago",
          comment: "Feel-good music at its best.",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Liam White",
          CommentTime: "2 days ago",
          comment: "On repeat since I heard it.",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Maya Blue",
          CommentTime: "3 days ago",
          comment: "Perfectly uplifting!",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Logan Yellow",
          CommentTime: "1 week ago",
          comment: "Absolutely love this.",
        },
      ],
    },
    {
      id: 7,
      trackName: "Circles",
      artistName: "Post Malone",
      artistAvatar: artist7,
      trackSrc: SampleMusic,
      AlbumInfo: {
        albumThumbnail: Thumbnail1,
        albumName: "Hollywood's Bleeding",
        albumArtist: "Post Malone",
      },
      TrackInfo: {
        totalLike: "950K",
      },
      trackDesc:
        "A smooth and catchy song by Post Malone with a laid-back vibe.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Ella Red",
          CommentTime: "10 hours ago",
          comment: "This song is so chill!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Liam Green",
          CommentTime: "1 day ago",
          comment: "One of my favorites from Post!",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Ava White",
          CommentTime: "3 days ago",
          comment: "Can listen to this all day!",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Noah Black",
          CommentTime: "4 days ago",
          comment: "Never gets old!",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Mia Grey",
          CommentTime: "6 days ago",
          comment: "Perfect vibe for any mood.",
        },
      ],
    },
    {
      id: 8,
      trackName: "Memories",
      artistName: "Maroon 5",
      artistAvatar: artist8,
      trackSrc: SampleMusic2,
      AlbumInfo: {
        albumThumbnail: Thumbnail2,
        albumName: "Jordi",
        albumArtist: "Maroon 5",
      },
      TrackInfo: {
        totalLike: "720K",
      },
      trackDesc: "A nostalgic and heartwarming song by Maroon 5.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Oliver Grey",
          CommentTime: "5 minutes ago",
          comment: "This song brings back so many memories!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Lily Red",
          CommentTime: "4 hours ago",
          comment: "Beautiful lyrics.",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Jack White",
          CommentTime: "1 day ago",
          comment: "Maroon 5 never disappoints.",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Sophia Black",
          CommentTime: "3 days ago",
          comment: "Such a calming song.",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Lucas Green",
          CommentTime: "5 days ago",
          comment: "One of their best!",
        },
      ],
    },
    {
      id: 9,
      trackName: "Don't Start Now",
      artistName: "Dua Lipa",
      artistAvatar: artist9,
      trackSrc: SampleMusic,
      AlbumInfo: {
        albumThumbnail: Thumbnail1,
        albumName: "Future Nostalgia",
        albumArtist: "Dua Lipa",
      },
      TrackInfo: {
        totalLike: "980K",
      },
      trackDesc:
        "An empowering and upbeat song by Dua Lipa that gets you dancing.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Ella Grey",
          CommentTime: "2 hours ago",
          comment: "This song is pure energy!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "James Brown",
          CommentTime: "5 hours ago",
          comment: "Dua’s vocals are amazing.",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Sophie Blue",
          CommentTime: "1 day ago",
          comment: "Love the message behind this track!",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Ryan White",
          CommentTime: "2 days ago",
          comment: "Instantly lifts my mood.",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Anna Black",
          CommentTime: "1 week ago",
          comment: "On repeat every day!",
        },
      ],
    },
    {
      id: 10,
      trackName: "Señorita",
      artistName: "Shawn Mendes",
      artistAvatar: artist10,
      trackSrc: SampleMusic2,
      AlbumInfo: {
        albumThumbnail: Thumbnail2,
        albumName: "Señorita - Single",
        albumArtist: "Shawn Mendes & Camila Cabello",
      },
      TrackInfo: {
        totalLike: "1.2M",
      },
      trackDesc: "A romantic duet with sultry vocals and catchy rhythms.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Emma Grey",
          CommentTime: "30 minutes ago",
          comment: "Such a beautiful duet!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Oliver Black",
          CommentTime: "2 hours ago",
          comment: "Perfect song for summer vibes.",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Sophia White",
          CommentTime: "1 day ago",
          comment: "Their chemistry is amazing.",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Mason Red",
          CommentTime: "3 days ago",
          comment: "I’m obsessed with this song!",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Luna Green",
          CommentTime: "5 days ago",
          comment: "Can’t stop listening!",
        },
      ],
    },
    {
      id: 11,
      trackName: "Lovely",
      artistName: "Billie Eilish & Khalid",
      artistAvatar: artist11,
      trackSrc: SampleMusic,
      AlbumInfo: {
        albumThumbnail: Thumbnail1,
        albumName: "Lovely - Single",
        albumArtist: "Billie Eilish & Khalid",
      },
      TrackInfo: {
        totalLike: "1.1M",
      },
      trackDesc:
        "A hauntingly beautiful song that resonates deeply with its listeners.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Eva Grey",
          CommentTime: "1 hour ago",
          comment: "This song gives me chills!",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Lucas Brown",
          CommentTime: "4 hours ago",
          comment: "Such a deep and emotional song.",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Mia Blue",
          CommentTime: "2 days ago",
          comment: "Their voices blend so perfectly.",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Henry Green",
          CommentTime: "4 days ago",
          comment: "This song is lovely indeed!",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Sophia White",
          CommentTime: "6 days ago",
          comment: "Can feel every word.",
        },
      ],
    },
    {
      id: 12,
      trackName: "Someone You Loved",
      artistName: "Lewis Capaldi",
      artistAvatar: artist12,
      trackSrc: SampleMusic2,
      AlbumInfo: {
        albumThumbnail: Thumbnail2,
        albumName: "Divinely Uninspired to a Hellish Extent",
        albumArtist: "Lewis Capaldi",
      },
      TrackInfo: {
        totalLike: "900K",
      },
      trackDesc:
        "A soulful ballad that connects with listeners on a personal level.",
      TrackComment: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentName: "Olivia Red",
          CommentTime: "10 minutes ago",
          comment: "This song hits hard.",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentName: "Noah White",
          CommentTime: "6 hours ago",
          comment: "Lewis’s voice is unmatched.",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentName: "Ava Black",
          CommentTime: "1 day ago",
          comment: "Love the emotion in his voice.",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentName: "Sophia Grey",
          CommentTime: "3 days ago",
          comment: "Beautiful lyrics.",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentName: "Liam Brown",
          CommentTime: "1 week ago",
          comment: "This song is timeless.",
        },
      ],
    },
  ];
  return (
    <>
      <CButton
        className="d-lg-none w-100 profile-sidebar-toggler"
        onClick={() => setVisible(true)}
      >
        Songs Queue
      </CButton>
      <COffcanvas
        responsive="lg"
        expand="lg"
        placement="start"
        visible={visible}
        onHide={() => setVisible(false)}
        backdrop={false}
        className="list-offcanvas h-100"
      >
        <COffcanvasHeader className="justify-content-end">
          <CCloseButton
            className="text-reset"
            onClick={() => setVisible(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody className="d-flex flex-column p-0 h-100">
          <div className="d-flex flex-column h-100">
            <div className="side-layout-header d-none d-lg-block">
              <h2>Queue</h2>
            </div>

            {QueueListArray && QueueListArray.length > 0 ? (
              <>
                {/* <div
                  className="side-layout-body"
                  style={{ flex: "1 1 auto", overflowY: "auto" }}
                > */}
                  {/* <div className="queue-list w-100"> */}
                    <QueueList
                      list={QueueListArray}
                      dropdownCheck={dashBoarddropdown}
                    />
                  {/* </div> */}
                {/* </div> */}
              </>
            ) : (
              <>
                <div
                  className="side-layout-body"
                  style={{ flex: "1 1 auto", overflowY: "auto" }}
                >
                  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <div
                      className="text-center h-100"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="fs-18 fw-400 font-lato lh-21">
                        No List found
                      </span>
                      <p className="fs-24 fw-400 font-lato lh-28 mb-0">
                        Please subscribe to artists
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* </div> */}
            <div className="side-layout-footer">
              <div className="logout-link-wrapper">
                <Image
                  src={logoutIcon}
                  width={16}
                  height={16}
                  alt="icon"
                  className="me-2"
                />
                <button onClick={handleLogout} type="button">Logout</button>
              </div>
            </div>
          </div>
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
}

export default SidebarLeft;
