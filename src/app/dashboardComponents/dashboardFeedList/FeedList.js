"use client";
import React, { useState, useEffect } from "react";
import { CContainer, CRow, CCol, CCollapse, CCard, CCardBody, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFeed, clearCurrentFeed, selectCurrentFeed } from "@/app/redux/mediaSlice";
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
import "@/app/styles/Feeds/feeds.css";
import "@/app/styles/UI/dropdownMenu.css";

import play from "@/app/assets/feed/play-icon.png";
import like from "@/app/assets/feed/like.png"
import comment from "@/app/assets/feed/comments.png"
import share from "@/app/assets/feed/share.png";
import mixtapeIcon from '@/app/assets/sidebarIcons/mixtape.svg';
import albumIcon from '@/app/assets/sidebarIcons/album.svg';
import editIcon from "@/app/assets/dashboard/edit.svg"
import trashIcon from "@/app/assets/dashboard/trash.svg"
import Link from "next/link";


export default function FeedList({ feedData }) {
  const [visible, setVisible] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);
  const dispatch = useDispatch();
  const currentFeed = useSelector(selectCurrentFeed);
  const [activeFeedType, setActiveFeedType] = useState("");

  const handlePlayClick = () => {
    dispatch(setCurrentFeed({
      id: feedData.id,
      type: feedData.feedType,
      src: feedData.trackSrc
    }));
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

          <div className='singleFeed-card'>
            <div className='single-feed-poster-avatar mb-3'>
              <div className='poster-avatar-wrapper'>
                <Image src={feedData?.userProfile?.userAvatar} width={60} height={60} alt='poster-avatar' />
              </div>
              <div className='poster-avatar-info ps-2'>
                <h4 className='mb-0'>{feedData?.userProfile?.userName}</h4>
                <p className='mb-0'>{feedData?.feedPostDate}</p>
              </div>
            </div>
            <div className='singleFeed-header position-relative '>
              {
                activeFeedType === "audio" ? (
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
                      opacity: currentFeed?.type === "video" && currentFeed?.id == feedData.id ? 0 : 1,
                    }}
                  />
                )
              }
              {
                currentFeed?.id != feedData.id && (
                  <div className='header-audio-control'>
                    <button type='button' onClick={handlePlayClick}>
                      <Image src={play} width={34} height={34} alt='play-icon' />
                    </button>
                  </div>
                )
              }
              {currentFeed?.id === feedData.id && (
                <>
                  {currentFeed.type === "audio" ? (
                    <div className="player-position">
                      <MediaPlayer
                        title="Audio Feed"
                        src={currentFeed.src}
                        autoPlay
                      >
                        <MediaProvider />
                        <DefaultAudioLayout icons={defaultLayoutIcons}  colorScheme="dark"/>
                      </MediaPlayer>
                    </div>

                  ) : (
                    <div className="video-player-position">
                      <MediaPlayer
                        title="Video Feed"
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
            <div className='singleFeed-content-wrapper mt-2'>
              <div className='single-actions'>
                <ul>
                  <li>
                    <div className='action-wrapper'>
                      <button type='button'><Image src={like} width={24} height={24} alt=''></Image> <span>{feedData.totalLikes}</span></button>
                    </div>
                  </li>
                  <li>
                    <div className='action-wrapper'>
                      <button type='button' onClick={() => setVisible(!visible)}><Image src={comment} width={24} height={24} alt=''></Image> <span>{feedData.totolComments}</span></button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='single-share-dropdown text-end'>
                <div className='single-share-placeholder'>
                  <div className='action-wrapper'>
                    <button type='button' onClick={openShareModal} ><Image src={share} width={24} height={24} alt=''></Image> <span>Share</span></button>
                  </div>
                  <div className='action-dropdown ms-2 me-2'>
                    <div className='custom-dropdown-menu'>
                      <CDropdown popper={true}>
                        <CDropdownToggle>
                          <span>
                            <svg width="6" height="21" viewBox="0 0 6 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.8125 5.625C4.3658 5.625 5.625 4.3658 5.625 2.8125C5.625 1.2592 4.3658 0 2.8125 0C1.2592 0 0 1.2592 0 2.8125C0 4.3658 1.2592 5.625 2.8125 5.625Z" fill="#2D334B" />
                              <path d="M2.8125 13.25C4.3658 13.25 5.625 11.9908 5.625 10.4375C5.625 8.8842 4.3658 7.625 2.8125 7.625C1.2592 7.625 0 8.8842 0 10.4375C0 11.9908 1.2592 13.25 2.8125 13.25Z" fill="#2D334B" />
                              <path d="M2.8125 20.875C4.3658 20.875 5.625 19.6158 5.625 18.0625C5.625 16.5092 4.3658 15.25 2.8125 15.25C1.2592 15.25 0 16.5092 0 18.0625C0 19.6158 1.2592 20.875 2.8125 20.875Z" fill="#2D334B" />
                            </svg>
                          </span>
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <Link href="/mixtape/create-mixtape" className='d-flex align-items-center dropdown-item'>
                            <Image src={editIcon} width={15} height={15} alt='icon' className='me-2' />
                            <span className='fw-400 fs-16 text-white'>Edit</span>
                          </Link>
                          <Link href="#" className='d-flex align-items-center dropdown-item'>
                            <Image src={trashIcon} width={15} height={15} alt='icon' className='me-2' />
                            <span className='fw-400 fs-16 text-white'>Delete</span>
                          </Link>
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='feed-comments-wrapper'>
              <CCollapse visible={visible}>
                <div className='comment-header-wrapper pt-2 pb-2 mt-3'>
                  <div className='comment-main-avatar'>
                    <Image src={feedData.albumThumbnail} width={56} height={56} alt='album-img'></Image>
                  </div>
                  <div className='comment-main-info ps-2'>
                    <label className='d-block'>{feedData.albumName}</label>
                    <p className='mb-0'>{feedData.albumBy}</p>
                  </div>
                </div>
                <div className='comment-list mt-3'>
                  <ul>
                    {feedData?.comments.length > 0 ? (
                      feedData?.comments.map((comment, index) => (
                        <li key={index} className='single-comment mb-3'>
                          <div className='single-comment-placeholder'>
                            <div className='single-comment-avatar'>
                              <Image src={comment.commentAvatar} alt="" width={34} height={34} />
                            </div>
                            <div className='single-avatar-desc'>
                              <label htmlFor="">{comment.commentBy}</label><span>{comment.commentTime}</span>
                            </div>
                          </div>
                          <p className='mb-0 comment mt-1'>{comment.comment}</p>
                        </li>
                      ))
                    ) : (
                      <div className='no-feed-wrapper text-center'>
                        <p className='mb-0'>No Comment Available</p>
                      </div>
                    )}
                  </ul>
                </div>
              </CCollapse>
            </div>
          </div>



          {/* <div className="singleFeed-card">
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

            <button className="play-button" onClick={handlePlayClick}>
              <Image src={play} alt="Play" width={30} height={30} />
            </button>
            <div className='singleFeed-header position-relative'>
              <Image src={feedData?.trackThumbnail} width={100} height={100} alt='feed-img' className='feed-img'></Image>
              {currentFeed?.id === feedData.id && (
                <>
                  {currentFeed.type === "audio" ? (
                    <div className="player-position" style={{ position: "absolute", bottom: "0px", left: "0px", width: "100%" }}>
                      <MediaPlayer
                        title="Audio Feed"
                        src={currentFeed.src}
                        autoPlay
                      >
                        <MediaProvider />
                        <DefaultAudioLayout icons={defaultLayoutIcons} />
                      </MediaPlayer>
                    </div>

                  ) : (
                    <MediaPlayer
                      title="Video Feed"
                      src={currentFeed.src}
                      poster={feedData.trackThumbnail.src}
                      autoPlay
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
          </div> */}
        </CCol>
      </CRow>

      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}
