"use client";
import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
} from "@coreui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentFeed,
  clearCurrentFeed,
  selectCurrentFeed,
} from "@/app/redux/mediaSlice";
import ShareModal from "@/app/components/SharingModal/ShareModal";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
  DefaultAudioLayout,
} from "@vidstack/react/player/layouts/default";
import { togglePlayPause } from "@/app/redux/audioPlayerSlice";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@/app/styles/Feeds/feeds.css";
import "@/app/styles/UI/dropdownMenu.css";

import play from "@/app/assets/feed/play-icon.png";
import like from "@/app/assets/feed/like.png";
import comment from "@/app/assets/feed/comments.png";
import share from "@/app/assets/feed/share.png";
import "@/app/styles/Feeds/feeds.css";

import mixtapeIcon from "@/app/assets/sidebarIcons/mixtape.svg";
import albumIcon from "@/app/assets/sidebarIcons/album.svg";
// import FeedPlayer from "@/app/components/HomeFeed/FeedPlayer";
import "@/app/styles/UI/dropdownMenu.css";
import Link from "next/link";
import Comment from "@/app/components/Comments/Comment.js";

export default function FeedList({ feedData, FeedLocation }) {
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);
  const dispatch = useDispatch();
  const currentFeed = useSelector(selectCurrentFeed);
  const [activeFeedType, setActiveFeedType] = useState("");

  const handlePlayClick = () => {
    dispatch(
      setCurrentFeed({
        id: feedData.id,
        type: feedData.feedType,
        src: feedData.trackSrc,
      })
    );
    dispatch(
      togglePlayPause(false) // Assuming you want playback to start
    );
    setActiveFeedType(feedData.feedType);
  };

  useEffect(() => {
    return () => {
      dispatch(clearCurrentFeed());
      setActiveFeedType("");
    };
  }, [dispatch]);
  return (
    <>
      <CRow className="mb-4">
        <CCol lg={12}>
          <div className="singleFeed-card">
            <div className="singleFeed-header position-relative ">
              {activeFeedType === "audio" ? (
                <Image
                  src={feedData?.trackThumbnail}
                  width={100}
                  height={100}
                  alt="feed-img"
                  className="feed-img"
                  style={{ opacity: 1 }}
                />
              ) : (
                <Image
                  src={feedData?.trackThumbnail}
                  width={100}
                  height={100}
                  alt="feed-img"
                  className="feed-img"
                  style={{
                    opacity:
                      currentFeed?.type === "video" &&
                      currentFeed?.id == feedData.id
                        ? 0
                        : 1,
                  }}
                />
              )}
              {currentFeed?.id != feedData.id && (
                <>
                  <div className="header-audio-control">
                    <button type="button" onClick={handlePlayClick}>
                      <Image
                        src={play}
                        width={34}
                        height={34}
                        alt="play-icon"
                      />
                    </button>
                  </div>
                  <div className="track-info-before-play">
                    <div className="track-info-label">
                      <label htmlFor="">{feedData?.trackTitle}</label>
                    </div>
                    <div className="track-info-label">
                      <label htmlFor="">{feedData?.trackLength}</label>
                    </div>
                  </div>
                </>
              )}
              {currentFeed?.id === feedData.id && (
                <>
                  {currentFeed.type === "audio" ? (
                    <div className="player-position">
                      <MediaPlayer
                        title={feedData.trackTitle}
                        src={currentFeed.src}
                        autoPlay
                      >
                        <MediaProvider />
                        <DefaultAudioLayout
                          icons={defaultLayoutIcons}
                          colorScheme="dark"
                        />
                      </MediaPlayer>
                    </div>
                  ) : (
                    <div className="video-player-position">
                      <MediaPlayer
                        title={feedData.trackTitle}
                        src={currentFeed.src}
                        poster={feedData.trackThumbnail.src}
                        autoPlay
                        playsInline
                      >
                        <MediaProvider>
                          <Poster className="vds-poster" />
                        </MediaProvider>
                        <DefaultVideoLayout
                          thumbnails={false}
                          icons={defaultLayoutIcons}
                          colorScheme="dark"
                        />
                      </MediaPlayer>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="singleFeed-content-wrapper mt-2">
              <div className="single-actions">
                <ul>
                  <li>
                    <div className="action-wrapper">
                      <button type="button">
                        <Image src={like} width={24} height={24} alt=""></Image>{" "}
                        <span>{feedData.totalLikes}</span>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="action-wrapper">
                      <button type="button">
                        <Image
                          src={comment}
                          width={24}
                          height={24}
                          alt=""
                        ></Image>{" "}
                        <span>{feedData.totolComments}</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="single-share-dropdown text-end">
                <div className="single-share-placeholder">
                  <div className="action-wrapper">
                    <button type="button" onClick={openShareModal}>
                      <Image src={share} width={24} height={24} alt=""></Image>{" "}
                      <span>Share</span>
                    </button>
                  </div>
                  {FeedLocation == "home" && (
                    <div className="action-dropdown ms-2 me-2">
                      <div className="custom-dropdown-menu">
                        <CDropdown popper={true}>
                          <CDropdownToggle>
                            <span>
                              <svg
                                width="6"
                                height="21"
                                viewBox="0 0 6 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.8125 5.625C4.3658 5.625 5.625 4.3658 5.625 2.8125C5.625 1.2592 4.3658 0 2.8125 0C1.2592 0 0 1.2592 0 2.8125C0 4.3658 1.2592 5.625 2.8125 5.625Z"
                                  fill="#2D334B"
                                />
                                <path
                                  d="M2.8125 13.25C4.3658 13.25 5.625 11.9908 5.625 10.4375C5.625 8.8842 4.3658 7.625 2.8125 7.625C1.2592 7.625 0 8.8842 0 10.4375C0 11.9908 1.2592 13.25 2.8125 13.25Z"
                                  fill="#2D334B"
                                />
                                <path
                                  d="M2.8125 20.875C4.3658 20.875 5.625 19.6158 5.625 18.0625C5.625 16.5092 4.3658 15.25 2.8125 15.25C1.2592 15.25 0 16.5092 0 18.0625C0 19.6158 1.2592 20.875 2.8125 20.875Z"
                                  fill="#2D334B"
                                />
                              </svg>
                            </span>
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <Link
                              href="/mixtape/create-mixtape"
                              className="d-flex align-items-center dropdown-item"
                            >
                              <Image
                                src={mixtapeIcon}
                                width={15}
                                height={15}
                                alt="icon"
                                className="me-2"
                              />
                              <span className="fw-400 fs-16 text-white">
                                Create Mixtape
                              </span>
                            </Link>
                            <Link
                              href="#"
                              className="d-flex align-items-center dropdown-item"
                            >
                              <Image
                                src={albumIcon}
                                width={15}
                                height={15}
                                alt="icon"
                                className="me-2"
                              />
                              <span className="fw-400 fs-16 text-white">
                                Go to Album
                              </span>
                            </Link>
                          </CDropdownMenu>
                        </CDropdown>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="feed-comments-wrapper">
              <div className="comment-header-wrapper pt-2 pb-2 mt-3">
                <div className="comment-main-avatar">
                  <Image
                    src={feedData.albumThumbnail}
                    width={56}
                    height={56}
                    alt="album-img"
                  ></Image>
                </div>
                <div className="comment-main-info ps-2">
                  <label className="d-block">{feedData.albumName}</label>
                  <p className="mb-0">{feedData.albumBy}</p>
                </div>
              </div>
              <div className="mt-3">
                <Comment></Comment>
              </div>
            </div>
          </div>
        </CCol>
      </CRow>

      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}
