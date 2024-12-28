"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTrackList, loadTrack } from "@/app/redux/audioPlayerSlice";
import { Reorder, useDragControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ShareModal from "../../SharingModal/ShareModal";

import mixtapeIcon from "@/app/assets/sidebarIcons/mixtape.svg";
import playsongIcon from "@/app/assets/sidebarIcons/playsong.svg";
import albumIcon from "@/app/assets/sidebarIcons/album.svg";
import artistIcon from "@/app/assets/sidebarIcons/artist.svg";
import shareIcon from "@/app/assets/sidebarIcons/share.svg";

import "@/app/styles/UI/dropdownMenu.css";
import { CDropdown, CDropdownMenu, CDropdownToggle } from "@coreui/react";

function QueueList({ list, dropdownCheck }) {
  const [items, setItems] = useState(list);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const dispatch = useDispatch();
  const currentPlayingTrackId = useSelector(
    (state) => state.audioPlayer.currentTrackId
  ); // Track ID from Redux

  const containerRef = useRef(null);

  useEffect(() => {
    dispatch(setTrackList(items));
  }, [items, dispatch]);

  useEffect(() => {
    if (currentPlayingTrackId && containerRef.current) {
      const trackElement = document.getElementById(
        `track-${currentPlayingTrackId}`
      );
      if (trackElement) {
        const container = containerRef.current;

        // Calculate the position of the track relative to the container
        const trackPosition = trackElement.offsetTop - container.offsetTop;

        // Scroll so that the track is centered within the container
        container.scrollTo({
          top:
            trackPosition -
            container.clientHeight / 2 +
            trackElement.clientHeight / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentPlayingTrackId]);

  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);

  const playTrack = (index) => {
    dispatch(loadTrack(index));
  };

  return (
    <>
      <div
        className="side-layout-body"
        style={{ flex: "1 1 auto", overflowY: "auto" }}
        ref={containerRef}
      >
        <div className="queue-list-wrapper w-100">
          <Reorder.Group axis="y" onReorder={setItems} values={items}>
            {items.map((item, index) => (
              <TrackItem
                key={item.id || index}
                item={item}
                index={index}
                isPlaying={currentPlayingTrackId === item.id}
                playTrack={playTrack}
                openShareModal={openShareModal}
                dropdownCheck={dropdownCheck}
              />
            ))}
          </Reorder.Group>
        </div>
      </div>
      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}

function TrackItem({
  item,
  index,
  isPlaying,
  playTrack,
  openShareModal,
  dropdownCheck,
}) {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      id={`track-${item.id || index}`}
      layoutScroll
      dragListener={true}
      dragControls={dragControls}
    >
      <div
        className="single-artist-wrapper mb-2"
        style={{ userSelect: "none" }}
      >
        <div className="single-artist-layout">
          <div className="list-mover">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              onPointerDown={(event) => dragControls.start(event)}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4023 14.6484C13.7695 14.6484 14.8828 13.5352 14.8828 12.168C14.8828 10.8008 13.7695 9.6875 12.4023 9.6875C11.0352 9.6875 9.92188 10.8008 9.92188 12.168C9.92188 13.5352 11.0352 14.6484 12.4023 14.6484ZM12.4023 10.8594C13.125 10.8594 13.7109 11.4453 13.7109 12.168C13.7109 12.8906 13.125 13.4766 12.4023 13.4766C11.6797 13.4766 11.0938 12.8906 11.0938 12.168C11.0938 11.4453 11.6797 10.8594 12.4023 10.8594Z"
                fill="#4A5069"
              />
              <path
                d="M18.8671 17.4609C18.8671 17.3828 18.8475 17.3047 18.828 17.2461C18.7304 17.0312 18.535 16.875 18.2811 16.875L6.60145 16.7969C6.36708 16.7969 6.15224 16.9336 6.05458 17.1484C5.95692 17.3633 6.01552 17.6172 6.17177 17.793L12.0507 23.6914C12.285 23.9258 12.6561 23.9258 12.871 23.6914L18.6718 17.8906C18.8085 17.7734 18.8671 17.6172 18.8671 17.4609ZM16.8749 18.0469L12.4608 22.4414L8.0077 17.9883L16.8749 18.0469Z"
                fill="#4A5069"
              />
              <path
                d="M6.17194 7.03107C5.99616 7.20685 5.9571 7.46075 6.05476 7.6756C6.15241 7.89044 6.36726 8.04669 6.60163 8.02716L18.2813 7.94904C18.5157 7.94904 18.7305 7.81232 18.8282 7.57794C18.8673 7.49982 18.8673 7.42169 18.8673 7.3631C18.8673 7.20685 18.8087 7.07013 18.6915 6.95294L12.8907 1.15216C12.6563 0.917787 12.2852 0.917787 12.0704 1.15216L6.17194 7.03107ZM16.8751 6.79669L8.00788 6.83575L12.461 2.38263L16.8751 6.79669Z"
                fill="#4A5069"
              />
            </svg>
          </div>
          <div className="single-artist-layout-content">
            <div
              className={`single-artist-placeholder ${
                isPlaying ? "currently-playing" : ""
              }`}
            >
              <div className="single-artist-no">
                <p className="mb-0">{index + 1}</p>
              </div>
              <div
                className="single-artist-avatar"
                onClick={() => playTrack(index)}
              >
                <Image
                  src={item.artistAvatar}
                  width={55}
                  height={55}
                  alt="artist"
                />
              </div>
              <div className="single-artist-avatar-content">
                <div style={{display:"inline-grid"}}>
                  <h4 className="mb-1">{item.trackName}</h4>
                </div>

                <span className="d-block">{item.artistName}</span>
              </div>
              <DropdownMenu
                dropdownCheck={dropdownCheck}
                playTrack={() => playTrack(index)}
                openShareModal={openShareModal}
              />
            </div>
          </div>
        </div>
      </div>
    </Reorder.Item>
  );
}

function DropdownMenu({ dropdownCheck, playTrack, openShareModal }) {
  return (
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
            onClick={playTrack}
            className="dropdown-item d-flex align-items-center"
          >
            <Image
              src={playsongIcon}
              width={15}
              height={15}
              alt="icon"
              className="me-2"
            />
            <span className="fw-400 fs-16 text-white">Play Song</span>
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
            <span className="fw-400 fs-16 text-white">Add Mixtape</span>
          </button>
          <Link href="#" className="d-flex align-items-center dropdown-item">
            <Image
              src={albumIcon}
              width={15}
              height={15}
              alt="icon"
              className="me-2"
            />
            <span className="fw-400 fs-16 text-white">Go to Album</span>
          </Link>
          <Link href="#" className="d-flex align-items-center dropdown-item">
            <Image
              src={artistIcon}
              width={15}
              height={15}
              alt="icon"
              className="me-2"
            />
            <span className="fw-400 fs-16 text-white">Go to Artist</span>
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
            <span className="fw-400 fs-16 text-white">Share</span>
          </button>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
}

export default QueueList;
