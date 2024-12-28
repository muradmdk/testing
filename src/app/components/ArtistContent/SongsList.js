import React, { useEffect, useState } from "react";
import {
  CCol,
  CRow,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
} from "@coreui/react";
import mixtapeIcon from "@/app/assets/sidebarIcons/mixtape.svg";
import playsongIcon from "@/app/assets/sidebarIcons/playsong.svg";
import albumIcon from "@/app/assets/sidebarIcons/album.svg";
import artistIcon from "@/app/assets/sidebarIcons/artist.svg";
import shareIcon from "@/app/assets/sidebarIcons/share.svg";
import Link from "next/link";
import ShareModal from "@/app/components/SharingModal/ShareModal";
import Image from "next/image";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultAudioLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentFeed,
  clearCurrentFeed,
  selectCurrentFeed,
} from "@/app/redux/mediaSlice";

import "@/app/styles/UI/player.css";
import play from "@/app/assets/feed/play-icon.png";
import { togglePlayPause } from "@/app/redux/audioPlayerSlice";

export default function ArtistSingleSong({ albumId, showDot, tracks }) {
  const [shareModalVisible, setShareModalVisible] = useState(false);

  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);
  const dispatch = useDispatch();
  const currentFeed = useSelector(selectCurrentFeed);

  const handlePlayClick = (id, type, src) => {
    dispatch(togglePlayPause(false));
    dispatch(
      setCurrentFeed({
        id: id,
        type: type,
        src: src,
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(clearCurrentFeed());
    };
  }, [dispatch]);
  return (
    <>
      {tracks?.length > 0 ? (
        tracks.map((track, index) => (
          <li className="mb-2" key={track.id}>
            <div className="single-artist-song-wrapper">
              <div className="song-number-wrapper">
                <label>{index + 1}</label>
              </div>
              <div className="song-content-wrapper">
                <CRow className="align-items-center h-100">
                  <CCol lg={10} xs={10} >
                    <CRow className="align-items-center">
                      <CCol lg={5} xs={9} className="order-0 mb-2 mb-lg-0">
                        <div className="song-desc-wrapper">
                          <div className="song-desc-placeholder">
                            <div className="song-desc-img">
                              <Image
                                src={track.trackThumbnail}
                                width={54}
                                height={54}
                                alt="track-image"
                              ></Image>
                            </div>
                            <div className="song-desc-info ps-2">
                              <h4>{track.trackTitle}</h4>
                              <label htmlFor="">{track.trackArtist}</label>
                            </div>
                          </div>
                        </div>
                      </CCol>
                      <CCol lg={5} xs={12}  className="order-lg-1 order-2">
                        <div>
                          {currentFeed?.id !== `${albumId}_${track.id}` && (
                            <>
                              <div className="sample-player-btn ">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handlePlayClick(
                                      `${albumId}_${track.id}`,
                                      track?.trackType,
                                      track?.trackSrc
                                    )
                                  }
                                >
                                  <Image
                                    src={play}
                                    width={26}
                                    height={26}
                                    alt="play-icon"
                                  />
                                  <span className="ms-2">Play Demo</span>
                                </button>
                              </div>
                            </>
                          )}

                          {currentFeed?.id === `${albumId}_${track.id}` && (
                            <>
                              <div className="sample-player-wrapper only-hide-text">
                                <MediaPlayer
                                  title="Audio Feed"
                                  src={currentFeed.src}
                                  autoPlay
                                >
                                  <MediaProvider />
                                  <DefaultAudioLayout
                                    icons={defaultLayoutIcons}
                                  />
                                </MediaPlayer>
                              </div>
                            </>
                          )}
                        </div>
                      </CCol>

                      {showDot == false ? (
                        <CCol lg={2} xs={3} className="order-lg-2 order-1">
                          <div className="track-time text-end pe-3">
                            <label>{track.trackLength}</label>
                          </div>
                        </CCol>
                      ) : (
                        <CCol lg={2} xs={3} className="order-lg-1">
                          <div className="track-time text-end">
                            <label>{track.trackLength}</label>
                          </div>
                        </CCol>
                      )}
                    </CRow>
                  </CCol>
                  <CCol lg={2} xs={2}>
                    {showDot !== false && (
                      <div className="track-options">
                        <div className="single-artist-layout-menu text-end pe-3">
                          <div className="custom-dropdown-menu">
                            <CDropdown popper={true}>
                              <CDropdownToggle>
                                <span>
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M7.5 3.75C8.27665 3.75 8.90625 3.1204 8.90625 2.34375C8.90625 1.5671 8.27665 0.9375 7.5 0.9375C6.72335 0.9375 6.09375 1.5671 6.09375 2.34375C6.09375 3.1204 6.72335 3.75 7.5 3.75Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M7.5 8.90625C8.27665 8.90625 8.90625 8.27665 8.90625 7.5C8.90625 6.72335 6.72335 6.09375 7.5 6.09375C6.72335 6.09375 6.09375 6.72335 6.09375 7.5C6.09375 8.27665 6.72335 8.90625 7.5 8.90625Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M7.5 14.0625C8.27665 14.0625 8.90625 13.4329 8.90625 12.6562C8.90625 11.8796 8.27665 11.25 7.5 11.25C6.72335 11.25 6.09375 11.8796 6.09375 12.6562C6.09375 13.4329 6.72335 14.0625 7.5 14.0625Z"
                                      fill="white"
                                    />
                                  </svg>
                                </span>
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <button
                                  type="button"
                                  className="dropdown-item d-flex align-items-center"
                                >
                                  <Image
                                    src={playsongIcon}
                                    width={15}
                                    height={15}
                                    alt="icon"
                                    className="me-2"
                                  />
                                  <span className="fw-400 fs-16 text-white">
                                    Play Song
                                  </span>
                                </button>
                                <button
                                  type="button"
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
                                    Add Mixtape
                                  </span>
                                </button>
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
                                <Link
                                  href="#"
                                  className="d-flex align-items-center dropdown-item"
                                >
                                  <Image
                                    src={artistIcon}
                                    width={15}
                                    height={15}
                                    alt="icon"
                                    className="me-2"
                                  />
                                  <span className="fw-400 fs-16 text-white">
                                    Go to Artist
                                  </span>
                                </Link>
                                <button
                                  type="button"
                                  className="d-flex align-items-center dropdown-item"
                                  onClick={openShareModal}
                                >
                                  <Image
                                    src={shareIcon}
                                    width={15}
                                    height={15}
                                    alt="icon"
                                    className="me-2"
                                  />
                                  <span className="fw-400 fs-16 text-white">
                                    Share
                                  </span>
                                </button>
                              </CDropdownMenu>
                            </CDropdown>
                          </div>
                        </div>
                      </div>
                    )}
                  </CCol>
                </CRow>
              </div>
            </div>
          </li>
        ))
      ) : (
        <div className="no-feed-wrapper text-center">
          <p className="mb-0">Nothing To Play</p>
        </div>
      )}
      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}
