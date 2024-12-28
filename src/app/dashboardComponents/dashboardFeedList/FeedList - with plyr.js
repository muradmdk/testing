// Reset Default
"use client";
import React, { useState, useEffect } from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import Image from "next/image";
import play from "../../assets/feed/play-icon.png";
import "@/app/styles/Feeds/feeds.css";
import ShareModal from "@/app/components/SharingModal/ShareModal";
import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { playTrack, pauseTrack, setTrack } from "@/app/redux/audioSlice";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function FeedList({ feedData }) {
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);

  const dispatch = useAppDispatch();
  const { currentTrackId, currentTrackSrc, currentTrackType, isPlaying } =
    useAppSelector((state) => state.audio);
  const [isVisible, setIsVisible] = useState(false);

  const handleLoadTrack = (trackId, trackSrc, type) => {
    dispatch(setTrack({ id: trackId, src: trackSrc, type: type }));
  };

  useEffect(() => {
    setIsVisible(currentTrackId === feedData.id);
  }, [currentTrackId, feedData.id]);

  const playerStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };
  const handleVideoClick = () => {
    alert("Video clicked!");
  };

  return (
    <>
      <CRow className="mb-4">
        <CCol lg={12}>
          <div className="singleFeed-card">
            <div className="single-feed-poster-avatar mb-3">
              <div className="poster-avatar-wrapper">
                <Image
                  src={feedData?.userProfile?.userAvatar}
                  width={60}
                  height={60}
                  alt="poster-avatar"
                />
              </div>
              <div className="poster-avatar-info ps-2">
                <h4 className="mb-0">{feedData?.userProfile?.userName}</h4>
                <p className="mb-0">{feedData?.feedPostDate}</p>
              </div>
            </div>
            {feedData.feedType == "audio" ? (
  <>
    <div className="singleFeed-header position-relative">
      <Image
        src={feedData?.trackThumbnail}
        width={100}
        height={100}
        alt="feed-img"
        className="feed-img"
      />
      <div>
        {currentTrackId !== feedData.id && (
          <div
            className="header-audio-control"
            onClick={() =>
              handleLoadTrack(feedData.id, feedData.trackSrc, feedData.dde)
            }
          >
            <button type="button">
              <Image src={play} width={34} height={34} alt="play-icon" />
            </button>
          </div>
        )}
        <div className="feed-player">
          <div className="player-visibility" style={playerStyle}>
            <AudioPlayer
              src={currentTrackId === feedData.id ? currentTrackSrc : ""}
              autoPlay={isPlaying && currentTrackId === feedData.id}
              onPlay={() => dispatch(playTrack())}
              onPause={() => dispatch(pauseTrack())}
              showJumpControls={false}
              customAdditionalControls={[]}
              layout="horizontal-reverse"
            />
          </div>
        </div>
      </div>
    </div>
  </>
) : (
  <div className="singleFeed-header position-relative">
    <div className="feed-video-wrapper" onClick={handleVideoClick}>
    <Plyr
  source={{
    type: "video",
    sources: [
      {
        src: feedData?.trackSrc,
        type: "video/mp4", // Adjust this type if you have different formats
      },
    ],
  }}
  options={{
    autoplay: isPlaying && currentTrackId === feedData.id,
    controls: ["play", "progress", "mute", "volume", "fullscreen"],
  }}
  onClick={() => {
    alert("Video clicked!");
  }}
/>

      {currentTrackId !== feedData.id && (
        <div
          className="header-video-control"
          onClick={() =>
            handleLoadTrack(feedData.id, feedData.trackSrc, "video")
          }
        >
          <button type="button">
            <Image src={play} width={34} height={34} alt="play-icon" />
          </button>
        </div>
      )}
    </div>
  </div>
)}

            
          </div>
        </CCol>
      </CRow>

      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}