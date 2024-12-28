"use client";
import React, { useState } from "react";
import {
  CContainer,
  CCol,
  CRow,
  CCollapse,
  CCard,
  CCardBody,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@/app/styles/artist/artistContent.css";
import TrackImg from "@/app/assets/feed/demo-img.png";
import Image from "next/image";
import minusImg from "@/app/assets/feed/minus.png";
import plusImg from "@/app/assets/feed/plus.png";

import mixtapeIcon from "@/app/assets/sidebarIcons/mixtape.svg";
import playsongIcon from "@/app/assets/sidebarIcons/playsong.svg";
import albumIcon from "@/app/assets/sidebarIcons/album.svg";
import artistIcon from "@/app/assets/sidebarIcons/artist.svg";
import shareIcon from "@/app/assets/sidebarIcons/share.svg";
import ShareModal from "@/app/components/SharingModal/ShareModal";
import "@/app/styles/UI/dropdownMenu.css";
import Link from "next/link";
import ArtistSingleSong from "./SongsList";

export default function ArtistContent({ showDot, album }) {
  const [visible, setVisible] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);

  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);

  return (
    <>
      <button
        className="groupSong-list-btn w-100 p-0 mt-2"
        onClick={() => setVisible(!visible)}
      >
        <CRow className="align-items-center">
          <CCol lg={10} xs={10}>
            <CRow className="align-items-center">
              <CCol lg={4} xs={12} className="mb-2 mb-lg-0">
                <div className="track-info">
                  <div className="track-img">
                    <Image
                      src={album.AlbumInfo.albumThumbnail}
                      width={54}
                      height={54}
                      alt="track-img"
                    ></Image>
                  </div>
                  <div className="track-desc ps-lg-3 ps-2 ">
                    <div className="responsive-title d-lg-none d-block">
                      <h5 className="mb-0">Album Name</h5>
                    </div>
                    <label htmlFor="">{album.AlbumInfo.albumTitle}</label>
                  </div>
                </div>
              </CCol>
              <CCol lg={4} xs={6}>
                <div className="text-start ad-info ps-2 ps-lg-0">
                  <div className="responsive-title d-lg-none d-block">
                    <h5 className="mb-0">Relase Date</h5>
                  </div>
                  <label htmlFor="">{album.AlbumInfo.albumReleaseData}</label>
                </div>
              </CCol>
              <CCol lg={4} xs={6}>
                <div className="text-start ad-info">
                  <div className="responsive-title d-lg-none d-block">
                    <h5 className="mb-0">Songs</h5>
                  </div>
                  <label htmlFor="">{album.AlbumInfo.totalSongs}</label>
                </div>
              </CCol>
            </CRow>
          </CCol>
          <CCol lg={2} xs={2}>
            <div className="text-end pe-3">
              {visible ? (
                <Image src={minusImg} width={16} height={16} alt="minus-icon" />
              ) : (
                <Image src={plusImg} width={16} height={16} alt="plus-icon" />
              )}
            </div>
          </CCol>
        </CRow>
      </button>
      <CCollapse visible={visible}>
        <div className="artist-song-list artist-song-list-content mt-3">
          <ul>
            <ArtistSingleSong
              albumId={album.id}
              showDot={showDot}
              tracks={album.AlbumSongs}
            />
          </ul>
        </div>
      </CCollapse>
      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}
