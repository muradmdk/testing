"use client";
import { CRow, CCol, CModal, CModalBody, CButton } from "@coreui/react";
import SidebarLeft from "@/app/components/Home/SidebarLeft/SidebarLeft";
import "@/app/styles/dashboard/HomeDashboard/HomeDashboard.css";
import FeedIcon from "@/app/assets/dashboard/feed-add-icon.png";
import Image from "next/image";
import "@/app/styles/dashboard/DashboardDefault/modal.css";
import closeIcon from "@/app/assets/dashboard/cross.svg";
import FeedAvatar from "@/app/assets/dashboard/feed-Avatar.png";
import VideoIcon from "@/app/assets/dashboard/video-upload.svg";
import ImageIcon from "@/app/assets/dashboard/image-upload.svg";
import MusicIcon from "@/app/assets/dashboard/music-upload.svg";
import uploadBoxIcon from "@/app/assets/dashboard/upload-box.svg";
import VideoSrc from "@/app/assets/sampleVideo.mp4";
import { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";

import mentionInputStyle from "./mentionInputStyle";

import dynamic from "next/dynamic";
// Dynamically import Plyr with SSR disabled
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";

// Thumbnails
import Thumbnail1 from "@/app/assets/feed/feed-1.png";
import Thumbnail2 from "@/app/assets/feed/feed-2.png";

// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";

// Album Thumbnail
import albumThumbnail from "@/app/assets/feed/albumThumbnail.png";

// Feed List
import FeedList from "@/app/dashboardComponents/dashboardFeedList/FeedList";

// Sample Music
import SampleMusic from "@/app/assets/sampleMusic.mp3";
import SampleMusic2 from "@/app/assets/sampleMusic2.mp3";
import SampleMusic3 from "@/app/assets/sampleMusic2.mp3";

export default function SettingsDashHome() {
  const [visible, setVisible] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showVideoUpload, setShowVideoUpload] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [text, setText] = useState("");

  const handleImageUploadToggle = () => {
    setShowImageUpload(true);
    setShowVideoUpload(false);
  };

  const handleVideoUploadToggle = () => {
    setShowVideoUpload(true); 
    setShowImageUpload(false); 
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "video/mp4") {
      setVideoPreview(URL.createObjectURL(file));
    } else {
      alert("Only .mp4 files are allowed");
    }
  };
  const removeVideo = () => {
    setVideoPreview(null);
  };
  const videoOptions = {
    type: "video",
    sources: [
      {
        src: videoPreview,
        type: "video/mp4",
      },
    ],
  };
  const playerOptions = {
    controls: ["play", "progress", "current-time", "mute", "volume"],
    fullscreen: { enabled: false },
    settings: { enabled: false },
  };
  // Sample users list for mentions
  const users = [
    { id: "john", display: "John Doe" },
    { id: "jane", display: "Jane Smith" },
    { id: "hassan", display: "Hassan Ali" },
    { id: "michael", display: "Michael Johnson" },
    { id: "sara", display: "Sara Lee" },
  ];
  // Sample hashtags list
  const hashtags = [
    { id: "react", display: "#React" },
    { id: "nextjs", display: "#NextJS" },
    { id: "javascript", display: "#JavaScript" },
    { id: "frontend", display: "#Frontend" },
    { id: "webdev", display: "#WebDev" },
  ];
  // Handle text change in the MentionsInput
  const handleChange = (event, newValue) => {
    setText(newValue);
  };

  const HomeFeedArray = [
    {
      id: 1,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic,
      feedType: "audio",
      totalLikes: "274K",
      totolComments: "53",
      totalShare: "45",
      albumName: "Northern Attitude",
      albumBy: "Ahmed Hassan",
      albumThumbnail: albumThumbnail,
      feedPostDate: "30 Sep at 3:30 PM",
      userProfile: {
        userAvatar: Avatar,
        userName: "hassan",
      },
      comments: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentBy: "Lily Bennett",
          comment:
            "This mixtape is incredible! The transitions between tracks are so smooth, it feels like a single journey.",
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
        {
          id: 3,
          commentAvatar: Avatar,
          commentBy: "Zara Patel",
          comment:
            "Loving the new sound! It's fresh and different from their usual style, but it totally works.",
          commentTime: "1 day ago",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentBy: "Daniel Green",
          comment:
            "This album is giving me serious summer vibes. Perfect soundtrack for road trips!",
          commentTime: "3 hours ago",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentBy: "Ava Collins",
          comment:
            "The way the melody builds in the chorus of track 3 is just magical. Instant favorite.",
          commentTime: "2 days ago",
        },
        {
          id: 6,
          commentAvatar: Avatar,
          commentBy: "Elijah Carter",
          comment:
            "Honestly, this might be their best work yet. The production is so clean, and every song feels like a hit.",
          commentTime: "1 hour ago",
        },
      ],
    },
    {
      id: 2,
      trackThumbnail: Thumbnail2,
      trackSrc: VideoSrc,
      feedType: "video",
      totalLikes: "174K",
      totolComments: "99",
      albumName: "Value Mix",
      totalShare: "90",
      albumBy: "Murad Mansha",
      albumThumbnail: albumThumbnail,
      feedPostDate: "30 Sep at 3:30 PM",
      userProfile: {
        userAvatar: Avatar,
        userName: "hassan",
      },
      comments: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentBy: "Nina Roberts",
          comment:
            "I wasn't sure what to expect, but this album totally blew me away. It's on repeat all weekend!",
          commentTime: "5 hours ago",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentBy: "Oliver Park",
          comment:
            "The guitar solo in track 8 gave me chills. You can feel the emotion in every note.",
          commentTime: "45 minutes ago",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentBy: "Maya Jenkins",
          comment:
            "Finally an album where I love every song! There's so much soul in this one.",
          commentTime: "4 days ago",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentBy: "Jake Moreno",
          comment:
            "Such a unique sound! They really pushed their boundaries with this release, and it paid off big time.",
          commentTime: "3 hours ago",
        },
      ],
    },
    {
      id: 3,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic2,
      feedType: "audio",
      totalLikes: "274K",
      totolComments: "53",
      totalShare: "45",
      albumName: "Northern Attitude",
      albumBy: "Ahmed Hassan",
      albumThumbnail: albumThumbnail,
      feedPostDate: "30 Sep at 3:30 PM",
      userProfile: {
        userAvatar: Avatar,
        userName: "hassan",
      },
      comments: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentBy: "Lily Bennett",
          comment:
            "This mixtape is incredible! The transitions between tracks are so smooth, it feels like a single journey.",
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
        {
          id: 3,
          commentAvatar: Avatar,
          commentBy: "Zara Patel",
          comment:
            "Loving the new sound! It's fresh and different from their usual style, but it totally works.",
          commentTime: "1 day ago",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentBy: "Daniel Green",
          comment:
            "This album is giving me serious summer vibes. Perfect soundtrack for road trips!",
          commentTime: "3 hours ago",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentBy: "Ava Collins",
          comment:
            "The way the melody builds in the chorus of track 3 is just magical. Instant favorite.",
          commentTime: "2 days ago",
        },
        {
          id: 6,
          commentAvatar: Avatar,
          commentBy: "Elijah Carter",
          comment:
            "Honestly, this might be their best work yet. The production is so clean, and every song feels like a hit.",
          commentTime: "1 hour ago",
        },
      ],
    },
    {
      id: 4,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic,
      feedType: "audio",
      totalLikes: "274K",
      totolComments: "53",
      totalShare: "45",
      albumName: "Northern Attitude",
      albumBy: "Ahmed Hassan",
      albumThumbnail: albumThumbnail,
      feedPostDate: "30 Sep at 3:30 PM",
      userProfile: {
        userAvatar: Avatar,
        userName: "hassan",
      },
      comments: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentBy: "Lily Bennett",
          comment:
            "This mixtape is incredible! The transitions between tracks are so smooth, it feels like a single journey.",
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
        {
          id: 3,
          commentAvatar: Avatar,
          commentBy: "Zara Patel",
          comment:
            "Loving the new sound! It's fresh and different from their usual style, but it totally works.",
          commentTime: "1 day ago",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentBy: "Daniel Green",
          comment:
            "This album is giving me serious summer vibes. Perfect soundtrack for road trips!",
          commentTime: "3 hours ago",
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentBy: "Ava Collins",
          comment:
            "The way the melody builds in the chorus of track 3 is just magical. Instant favorite.",
          commentTime: "2 days ago",
        },
        {
          id: 6,
          commentAvatar: Avatar,
          commentBy: "Elijah Carter",
          comment:
            "Honestly, this might be their best work yet. The production is so clean, and every song feels like a hit.",
          commentTime: "1 hour ago",
        },
      ],
    },
    {
      id: 5,
      trackThumbnail: Thumbnail2,
      trackSrc: "https://files.vidstack.io/sprite-fight/720p.mp4",
      feedType: "video",
      totalLikes: "174K",
      totolComments: "99",
      albumName: "Value Mix",
      totalShare: "90",
      albumBy: "Murad Mansha",
      albumThumbnail: albumThumbnail,
      feedPostDate: "30 Sep at 3:30 PM",
      userProfile: {
        userAvatar: Avatar,
        userName: "hassan",
      },
      comments: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentBy: "Nina Roberts",
          comment:
            "I wasn't sure what to expect, but this album totally blew me away. It's on repeat all weekend!",
          commentTime: "5 hours ago",
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentBy: "Oliver Park",
          comment:
            "The guitar solo in track 8 gave me chills. You can feel the emotion in every note.",
          commentTime: "45 minutes ago",
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentBy: "Maya Jenkins",
          comment:
            "Finally an album where I love every song! There's so much soul in this one.",
          commentTime: "4 days ago",
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentBy: "Jake Moreno",
          comment:
            "Such a unique sound! They really pushed their boundaries with this release, and it paid off big time.",
          commentTime: "3 hours ago",
        },
      ],
    },
  ];

  return (
    <>
      <CRow className="gx-2 gx-lg-4">
        <CCol lg={3}>
          <div className="sidebar-wrapper sticky-sidebar dashboard-sidebar">
            <SidebarLeft dashBoarddropdown={true} />
          </div>
        </CCol>
        <CCol lg={9} className="order-3 order-lg-2 mt-2 mt-lg-0">
          <CRow className="justify-content-start mb-4">
            <CCol lg={8}>
              <div className="create-feed-wrapper">
                <div className="create-feed-icon">
                  <Image
                    src={FeedIcon}
                    width={64}
                    height={64}
                    alt="feed-icon"
                  />
                </div>
                <div className="create-feed-action ps-2">
                  <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    className="text-start"
                  >
                    What is in your mind, Hassan?
                  </button>
                </div>
              </div>
            </CCol>
          </CRow>
          <CRow className="justify-content-start">
            <CCol lg={8}>
              <>
                {HomeFeedArray.length > 0 ? (
                  HomeFeedArray.map((feed) => (
                    <FeedList key={feed.id} feedData={feed} />
                  ))
                ) : (
                  <div className="no-feed-wrapper text-center">
                    <p className="mb-0">No Feed Available</p>
                  </div>
                )}
              </>
            </CCol>
          </CRow>
        </CCol>
      </CRow>

      <CModal
        visible={visible}
        onClose={() => {
          setVisible(false);
          setText("");
          setImagePreview(null);
          setVideoPreview(null);
          setShowImageUpload(false);
          setShowVideoUpload(false);
        }}
        aria-labelledby="LiveDemoExampleLabel"
        className="modified-modal"
        size="lg"
      >
        <CModalBody>
          <div className="model-header-wrapper text-center position-relative mt-2">
            <h3>Create Your Feed</h3>
            <button type="button" onClick={() => setVisible(false)}>
              <Image src={closeIcon} alt="close-icon" width={24} height={24} />
            </button>
          </div>
          <div className="modal-feed-form-wrapper">
            <div className="modal-feed-avatar-placeholder">
              <div className="model-feed-avatar">
                <Image
                  src={FeedAvatar}
                  width={50}
                  height={50}
                  alt="feed-avatar"
                />
              </div>
              <div className="model-feed-level-select ps-2">
                <label htmlFor="" className="d-block">
                  Hassan
                </label>
                <select name="" id="">
                  <option value="" disabled>
                    Subscription
                  </option>
                  <option value="">Level 1</option>
                  <option value="">Level 2</option>
                  <option value="">Level 3</option>
                </select>
              </div>
            </div>
            <div className="model-feed-input mt-4">
              <MentionsInput
                value={text}
                onChange={handleChange}
                placeholder="What is in your mind, Hassan?"
                style={mentionInputStyle}
              >
                <Mention
                  trigger="@"
                  data={users}
                  style={{ backgroundColor: "lightblue" }}
                  a11ySuggestionsListLabel={"Suggested mentions"}
                  renderSuggestion={(
                    suggestion,
                    search,
                    highlightedDisplay
                  ) => (
                    <div className="mention-suggestion">
                      <strong>{highlightedDisplay}</strong>
                    </div>
                  )}
                />
                <Mention
                  trigger="#"
                  data={hashtags}
                  renderSuggestion={(
                    suggestion,
                    search,
                    highlightedDisplay
                  ) => (
                    <div className="mention-suggestion">
                      <strong>{highlightedDisplay}</strong>
                    </div>
                  )}
                />
              </MentionsInput>
            </div>

            {showImageUpload && (
              <div className="feed-picture-upload-wrapper mt-3">
                <CCol lg={12} className="mb-4">
                  <label
                    htmlFor="coverImg"
                    className="event-cover-label d-block"
                  >
                    {imagePreview ? (
                      <div className="upload-box-wrapper img-preview">
                        <Image
                          src={imagePreview}
                          width={100}
                          height={100}
                          alt="cover preview"
                        />
                      </div>
                    ) : (
                      <div className="upload-box-wrapper">
                        <div className="upload-box-content-wrapper">
                          <span className="upload-box-icon-wrapper">
                            <Image
                              src={uploadBoxIcon}
                              width={20}
                              height={20}
                              alt="upload-box-icon"
                            ></Image>
                          </span>
                          <p className=" mt-2 mb-0">Add Images</p>
                          <label htmlFor="">or drag and drop</label>
                        </div>
                      </div>
                    )}
                  </label>
                  <input
                    name="coverImg"
                    type="file"
                    id="coverImg"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </CCol>
              </div>
            )}

            {showVideoUpload && (
              <div className="feed-video-upload-wrapper mt-3 position-relative">
                {!videoPreview ? (
                  <label
                    htmlFor="videoUpload"
                    className="event-cover-label d-block"
                  >
                    <div className="upload-box-wrapper">
                      <div className="upload-box-content-wrapper">
                        <span className="upload-box-icon-wrapper">
                          <Image
                            src={uploadBoxIcon}
                            width={20}
                            height={20}
                            alt="upload-box-icon"
                          />
                        </span>
                        <p className="mt-2 mb-0">Add Videos</p>
                        <label htmlFor="">or drag and drop</label>
                      </div>
                    </div>
                    <input
                      name="videoUpload"
                      type="file"
                      id="videoUpload"
                      accept="video/mp4"
                      hidden
                      onChange={handleVideoChange}
                    />
                  </label>
                ) : (
                  <div className="video-preview-wrapper">
                    <Plyr source={videoOptions} options={playerOptions} />
                    <button onClick={removeVideo} className="remove-video-btn">
                      Remove Video
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="feed-action-btn-wrapper mt-4">
              <div className="feed-action-btn-placeholder">
                <div className="feed-action-btn-label">
                  <label htmlFor="">Add to your post</label>
                </div>
                <div className="feed-action-btns">
                  <button
                    type="button"
                    className="me-2"
                    onClick={handleImageUploadToggle}
                  >
                    <Image
                      src={ImageIcon}
                      width={30}
                      height={30}
                      alt="feed-icon"
                    />
                  </button>
                  <button type="button" className="me-2" onClick={handleVideoUploadToggle}>
                    <Image
                      src={VideoIcon}
                      width={30}
                      height={30}
                      alt="feed-icon"
                    />
                  </button>
                  <button type="button" onClick={handleVideoUploadToggle}>
                    <Image
                      src={MusicIcon}
                      width={30}
                      height={30}
                      alt="feed-icon"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="submit-model-feed mt-3">
              <button type="submit">Post</button>
            </div>
          </div>
        </CModalBody>
      </CModal>
    </>
  );
}
