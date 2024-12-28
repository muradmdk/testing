"use client";
import React, { useState, useEffect } from "react";
import { CRow, CCol } from "@coreui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFeed, clearCurrentFeed, selectCurrentFeed } from "@/app/redux/mediaSlice"; // Import the action here
import ShareModal from "@/app/components/SharingModal/ShareModal";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
  DefaultAudioLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import play from "../../assets/feed/play-icon.png";

export default function FeedList({ feedData }) {
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);
  const dispatch = useDispatch();
  const currentFeed = useSelector(selectCurrentFeed);

  // Handle feed play button click
  const handlePlayClick = () => {
    // Set the current feed in Redux store (this could be an audio or video)
    dispatch(setCurrentFeed({
      id: feedData.id,
      type: feedData.feedType,
      src: feedData.feedType === "audio" ? feedData.trackSrc : feedData.trackSrc,
      
    }));
  };

  useEffect(() => {
    // Clear the current feed when the component unmounts
    return () => {
      dispatch(clearCurrentFeed()); // This clears the current feed when the component unmounts
    };
  }, [dispatch]);

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

            {/* Show play button */}
            <button className="play-button" onClick={handlePlayClick}>
              <Image src={play} alt="Play" width={30} height={30} />
            </button>

            {/* Play the current feed */}
            {currentFeed?.id === feedData.id && (
              <>
                {currentFeed.type === "audio" ? (
                  <MediaPlayer title="Audio Feed" src={currentFeed.src}>
                    <MediaProvider />
                    <DefaultAudioLayout icons={defaultLayoutIcons} />
                  </MediaPlayer>
                ) : (
                  <MediaPlayer
                    title="Video Feed"
                    src={currentFeed.src}
                    poster={feedData.trackThumbnail.src}
                  >
                    <MediaProvider>
                      <Poster className="vds-poster" />
                    </MediaProvider>
                    <DefaultVideoLayout
                      thumbnails={false}
                      icons={defaultLayoutIcons}
                    />
                  </MediaPlayer>
                )}
              </>
            )}
          </div>
        </CCol>
      </CRow>

      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}
