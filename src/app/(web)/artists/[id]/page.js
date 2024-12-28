"use client";
import React, { useState } from "react";
import {
  CContainer,
  CCol,
  CRow,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CModal,
  CModalBody,
  CFormSwitch,
} from "@coreui/react";
import banner from "@/app/assets/feed/feed-2.png";
import Image from "next/image";
import "@/app/styles/artist/artist-detail.css";
import packageImg from "@/app/assets/feed/package.png";

import profileAvatar from "@/app/assets/feed/profile.png";
// UI
import shareIcon from "@/app/assets/artist-share.svg";
import ProfileInfo from "@/app/components/UI/ProfileInfo";
import Link from "next/link";
import tag from "@/app/assets/feed/tag.png";
import FeedList from "@/app/components/HomeFeed/FeedList";
import SubscribedList from "@/app/components/ArtistDetail/SubscribedList";

import ArtistContent from "@/app/components/ArtistContent/page";
import close from "@/app/assets/feed/close.png";

// Thumbnails
import Thumbnail1 from "@/app/assets/feed/feed-1.png";
import Thumbnail2 from "@/app/assets/feed/feed-2.png";

// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";

// Album Thumbnail
import albumThumbnail from "@/app/assets/feed/albumThumbnail.png";

// Sample Music
import SampleMusic from "@/app/assets/sampleMusic.mp3";
import SampleMusic2 from "@/app/assets/sampleMusic2.mp3";

import NewCardIcon from "@/app/assets/newCard.png";

import cardSVG from "@/app/assets/card.svg";
import cvcSVG from "@/app/assets/cvc-svg.svg";
import calendarSVG from "@/app/assets/calendar.svg";
import { useMask } from "@react-input/mask";

import ShareModal from "@/app/components/SharingModal/ShareModal";

// Chat Component

import Chat from "@/app/components/ArtistDetail/Chat";

// Package Card
import PackageCard from "@/app/components/ArtistDetail/PackageCard";
import TrackImg from "@/app/assets/feed/demo-img.png";
import VideoSrc from "@/app/assets/sampleVideo.mp4"
export default function SingleArtist() {
  const [activeKey, setActiveKey] = useState(1);
  const [visible, setVisible] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);

  const handleExpiryChange = (e) => {
    const value = e.target.value;
    let [month, year] = value.split("/");

    // Set month bounds (01-12)
    if (month) {
      const monthNum = Math.min(Math.max(parseInt(month, 10) || 1, 1), 12); // Ensure month stays between 01 and 12
      month = monthNum < 10 ? `0${monthNum}` : `${monthNum}`; // Pad with 0 if less than 10
    }

    setExpiryDate(`${month || ""}${year ? "/" + year : ""}`);
  };

  const handleSubscribeClick = () => {
    setVisible(false);
    setIsNewModalOpen(true);
  };

  const handleAddNewCard = () => {
    setVisible(false);
    setIsNewModalOpen(false);
    setIsNewCardModalOpen(true);
  };

  const HomeFeedArray = [
    {
      id: 1,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic,
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
      id: 2,
      trackThumbnail: Thumbnail2,
      trackSrc: VideoSrc,
      feedType:"video",
      totalLikes: "174K",
      totolComments: "99",
      trackTitle:"Naruto Alone",
      trackLength:"00:41",
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

  const cardnumber = useMask({
    mask: "0000 0000 0000 0000",
    replacement: { 0: /\d/ },
  });

  const cardDate = useMask({
    mask: "00/00",
    replacement: { 0: /\d/ },
  });
  const cardCVC = useMask({
    mask: "000",
    replacement: { 0: /\d/ },
  });

  const PackageArray = [
    {
      id: 1,
      packageLevel: "Level 1",
      packageDiscount: "0.5",
      packageAlbum: "5",
      packageSongs: "55",
      isPopular: true,
    },
    {
      id: 2,
      packageLevel: "Level 2",
      packageDiscount: "5.0",
      packageAlbum: "3",
      packageSongs: "100",
      isPopular: false,
    },
    {
      id: 3,
      packageLevel: "Level 3",
      packageDiscount: "25",
      packageAlbum: "90",
      packageSongs: "20",
      isPopular: true,
    },
  ];

  const artistAlbumArray = [
    {
      id: 1,
      AlbumInfo: {
        albumThumbnail: TrackImg,
        albumTitle:"Hard Rock",
        albumReleaseData: "Nov 4, 2023",
        totalSongs: "12",
      },
      AlbumSongs: [
        {
          id: 1,
          trackThumbnail: TrackImg,
          trackTitle:"Without Me",
          trackArtist:"Eminem",
          trackLength:"4:50",
          trackSrc: SampleMusic,
          trackType:"audio",
        },
        {
          id: 2,
          trackThumbnail: TrackImg,
          trackTitle:"Lose Yourself",
          trackArtist:"Eminem",
          trackLength:"5:20",
          trackSrc: SampleMusic2,
          trackType: "audio",
        },
        {
          id: 3,
          trackThumbnail: TrackImg,
          trackTitle: "Stan",
          trackArtist: "Eminem",
          trackLength: "6:10",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
      ],
    },
    {
      id: 2,
      AlbumInfo: {
        albumThumbnail: TrackImg,
        albumTitle: "Pop Vibes",
        albumReleaseData: "Oct 1, 2022",
        totalSongs: "10",
      },
      AlbumSongs: [
        {
          id: 1,
          trackThumbnail: TrackImg,
          trackTitle: "Blinding Lights",
          trackArtist: "The Weeknd",
          trackLength: "3:20",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 2,
          trackThumbnail: TrackImg,
          trackTitle: "Save Your Tears",
          trackArtist: "The Weeknd",
          trackLength: "3:35",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 3,
          trackThumbnail: TrackImg,
          trackTitle: "Peaches",
          trackArtist: "Justin Bieber",
          trackLength: "3:30",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
      ],
    },
    {
      id: 3,
      AlbumInfo: {
        albumThumbnail: TrackImg,
        albumTitle: "Classical Music",
        albumReleaseData: "Jan 15, 2020",
        totalSongs: "8",
      },
      AlbumSongs: [
        {
          id: 1,
          trackThumbnail: TrackImg,
          trackTitle: "Clair de Lune",
          trackArtist: "Claude Debussy",
          trackLength: "5:30",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 2,
          trackThumbnail: TrackImg,
          trackTitle: "Für Elise",
          trackArtist: "Ludwig van Beethoven",
          trackLength: "3:00",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 3,
          trackThumbnail: TrackImg,
          trackTitle: "Nocturne in E-flat Major",
          trackArtist: "Frédéric Chopin",
          trackLength: "4:40",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
      ],
    },
    {
      id: 4,
      AlbumInfo: {
        albumThumbnail: TrackImg,
        albumTitle: "Jazz Essentials",
        albumReleaseData: "May 20, 2018",
        totalSongs: "15",
      },
      AlbumSongs: [
        {
          id: 1,
          trackThumbnail: TrackImg,
          trackTitle: "Take Five",
          trackArtist: "Dave Brubeck",
          trackLength: "5:24",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 2,
          trackThumbnail: TrackImg,
          trackTitle: "So What",
          trackArtist: "Miles Davis",
          trackLength: "9:22",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 3,
          trackThumbnail: TrackImg,
          trackTitle: "Autumn Leaves",
          trackArtist: "Bill Evans",
          trackLength: "6:30",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
      ],
    },
    {
      id: 5,
      AlbumInfo: {
        albumThumbnail: TrackImg,
        albumTitle: "Electronic Beats",
        albumReleaseData: "Feb 22, 2021",
        totalSongs: "11",
      },
      AlbumSongs: [
        {
          id: 1,
          trackThumbnail: TrackImg,
          trackTitle: "Strobe",
          trackArtist: "Deadmau5",
          trackLength: "10:23",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 2,
          trackThumbnail: TrackImg,
          trackTitle: "Go!",
          trackArtist: "The Chemical Brothers",
          trackLength: "6:20",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
        {
          id: 3,
          trackThumbnail: TrackImg,
          trackTitle: "Wake Me Up",
          trackArtist: "Avicii",
          trackLength: "4:07",
          trackSrc: SampleMusic,
          trackType: "audio",
        },
      ],
    },
  ];

  return (
    <>
      <section className="artist-detail-wrapper">
          <CRow>
            <CCol lg={12}>
              <div className="artist-banner-wrapper">
                <Image src={banner} alt="banner" width={100} height={350} />
              </div>
            </CCol>
          </CRow>
          <CRow className="align-items-center">
            <CCol xs={8}>
              <div className="mt-4">
                <ProfileInfo
                  avatar={profileAvatar}
                  profileName={"Northern Attitude"}
                  subDetail={"Ahmed hassan"}
                  subs={"21K"}
                />
              </div>
            </CCol>
            <CCol xs={4}>
              <div className="artist-share-wrapper text-end mt-2">
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-end dropdown-item"
                  onClick={openShareModal}
                >
                  <Image
                    src={shareIcon}
                    width={24}
                    height={24}
                    alt="icon"
                    className="me-2"
                  />
                  <span>Share</span>
                </button>
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg={12}>
              <div className="profile-nav-list mt-4">
                <CNav variant="pills" role="tablist">
                  <CNavItem>
                    <CNavLink
                      href="#!"
                      active={activeKey === 1}
                      onClick={() => setActiveKey(1)}
                    >
                      subscription
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      href="#!"
                      active={activeKey === 2}
                      onClick={() => setActiveKey(2)}
                    >
                      Content
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      href="#!"
                      active={activeKey === 3}
                      onClick={() => setActiveKey(3)}
                    >
                      Feed
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      href="#!"
                      active={activeKey === 4}
                      onClick={() => setActiveKey(4)}
                    >
                      Chat
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      href="#!"
                      active={activeKey === 5}
                      onClick={() => setActiveKey(5)}
                    >
                      Subscribed
                    </CNavLink>
                  </CNavItem>
                </CNav>
              </div>
            </CCol>
            <CCol lg={12}>
              <div className="profile-desc mt-4">
                <p className="mb-0">
                  On our website, you can access an amazing collection of
                  popular and new songs. Stream your favorite tracks in high
                  quality and enjoy without interruptions.{" "}
                </p>
              </div>
            </CCol>
            <CCol lg={12}>
              <CTabContent>
                <CTabPane role="tabpanel" visible={activeKey === 1}>
                  <div className="subscription-cards mt-4">
                    <div className="title-wrapper">
                      <Image
                        src={packageImg}
                        width={26}
                        height={26}
                        alt="icon"
                      />
                      <label htmlFor="" className="ps-2">
                        Packages
                      </label>
                    </div>
                    {PackageArray.map((pkg) => (
                      <PackageCard
                        key={pkg.id}
                        index={pkg.id}
                        packageLevel={pkg.packageLevel}
                        packageDiscount={pkg.packageDiscount}
                        packageAlbum={pkg.packageAlbum}
                        packageSongs={pkg.packageSongs}
                        isPopular={pkg.isPopular}
                        setVisible={setVisible}
                      />
                    ))}
                  </div>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 2}>
                  <div className="subscription-wrapper mt-5 d-none d-lg-block">
                    <div className="subscription-header">
                      <CRow>
                        <CCol xs={4}>
                          <div className="subscription-label">
                            <label>Album Name</label>
                          </div>
                        </CCol>
                        <CCol xs={4}>
                          <div className="subscription-label">
                            <label>Relase Date</label>
                          </div>
                        </CCol>
                        <CCol xs={2}>
                          <div className="subscription-label">
                            <label>Songs</label>
                          </div>
                        </CCol>
                      </CRow>
                    </div>
                  </div>

                  <div className="mt-lg-0 mt-3">
                    {artistAlbumArray.length > 0 ? (
                      artistAlbumArray.map((album) => (
                        <ArtistContent
                          key={album.id}
                          showDot={true}
                          album={album}
                        />
                      ))
                    ) : (
                      <div className="no-feed-wrapper text-center">
                        <p className="mb-0">No Content available</p>
                      </div>
                    )}
                  </div>

                  <CRow className="justify-content-center mt-4">
                    <CCol lg={6}>
                      <div className="artist-sub-btn">
                        <button type="button" onClick={() => setActiveKey(1)}>
                          Subscribe Now
                        </button>
                      </div>
                    </CCol>
                  </CRow>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 3}>
                  <div className="mt-4">
                    {HomeFeedArray.length > 0 ? (
                      HomeFeedArray.map((feed) => (
                        <FeedList key={feed.id} feedData={feed} />
                      ))
                    ) : (
                      <div className="no-feed-wrapper text-center">
                        <p className="mb-0">No feed available</p>
                      </div>
                    )}
                  </div>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 4}>
                  <Chat></Chat>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 5}>
                  <SubscribedList />
                </CTabPane>
              </CTabContent>
            </CCol>
          </CRow>

      </section>
      <CModal
        visible={visible}
        alignment="center"
        size="lg"
        scrollable
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalBody>
          <CRow className="mb-2">
            <CCol lg={6} xs={10}>
              <div className="level-title">
                <label htmlFor="">Level 1</label>
              </div>
            </CCol>
            <CCol lg={6} xs={2}>
              <div className="close-modal text-end">
                <button type="button" onClick={() => setVisible(false)}>
                  <Image src={close} width={30} height={30} alt="close"></Image>
                </button>
              </div>
            </CCol>
          </CRow>

          <div className="d-lg-block d-none">
          <CRow>
            <CCol lg={4}>
              <div className="subscription-label">
                <label>Album Name</label>
              </div>
            </CCol>
            <CCol lg={4}>
              <div className="subscription-label">
                <label>Relase Date</label>
              </div>
            </CCol>
            <CCol lg={2}>
              <div className="subscription-label">
                <label>Songs</label>
              </div>
            </CCol>
          </CRow>
          </div>
          

          <div>
            {artistAlbumArray.length > 0 ? (
              artistAlbumArray.map((album) => (
                <ArtistContent key={album.id} showDot={false} album={album} />
              ))
            ) : (
              <div className="no-feed-wrapper text-center">
                <p className="mb-0">No Content available</p>
              </div>
            )}
          </div>

          <CRow className="justify-content-center mt-4">
            <CCol lg={6}>
              <div className="model-input">
                <input type="number" placeholder="Enter Price" min={0} />
                <label htmlFor="">Minimum price is 2$</label>

                <button
                  type="button"
                  className="mt-3"
                  onClick={handleSubscribeClick}
                >
                  Subscribe Now
                </button>
              </div>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>

      <CModal
        visible={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        alignment="center"
        size="md"
        scrollable
        aria-labelledby="LiveDemoExampleLabel"
        className="card-modal"
      >
        <CModalBody className="p-4">
          <CRow className="mb-4">
            <CCol lg={6}>
              <div className="level-title mt-2">
                <label htmlFor="">Pay Now</label>
              </div>
            </CCol>
            <CCol lg={6}>
              <div className="close-modal text-end">
                <button type="button" onClick={() => setIsNewModalOpen(false)}>
                  <Image src={close} width={30} height={30} alt="close"></Image>
                </button>
              </div>
            </CCol>
          </CRow>
          <CRow className="justify-content-center mt-4 ">
            <CCol lg={12}>
              <div className="model-input d-flex justify-content-between align-items-center card-input shadow">
                <input
                  type="radio"
                  placeholder="Enter Visa Card Number"
                  pattern="[0-9]{16}"
                  maxLength="16"
                />
                <label htmlFor="" className="fs-18 font-lato fw-500">
                  **** **** **** 5678
                </label>
                <Image
                  src="/assets/visa.png"
                  width={55}
                  height={55}
                  alt="icon"
                />
              </div>
              <div className="mt-4 text-end">
                <button
                  type="button"
                  onClick={() => handleAddNewCard()}
                  className="ml-2 new-card-caller font-lato"
                >
                  Add New Card
                </button>
              </div>
              <div className="mt-4 mb-4 check-input d-flex align-items-center">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="ml-2 ps-2 pb-1">
                  Redeem Points From Mixtape Earning
                </label>
              </div>
              <div className="model-input">
                <button type="button" className="mt-3">
                  Pay Now
                </button>
              </div>
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>

      <CModal
        visible={isNewCardModalOpen}
        onClose={() => setIsNewCardModalOpen(false)}
        alignment="center"
        size="lg"
        scrollable
        aria-labelledby="LiveDemoExampleLabel"
        className="card-modal"
      >
        <CModalBody className="p-0 position-relative">
          <div className="close-modal text-end">
            <button type="button" onClick={() => setIsNewCardModalOpen(false)}>
              <Image src={close} width={30} height={30} alt="close"></Image>
            </button>
          </div>
          <div className="addNewCard-compoent-wrapper">
            <div className="addNewCard-Header-wrapper">
              <div className="addNewCard-header-placeholder">
                <div className="icon-wrapper">
                  <Image
                    src={NewCardIcon}
                    width={75}
                    height={75}
                    alt="modal-icon"
                  />
                </div>
                <div className="addNewCard-header-content ps-4">
                  <h4>Add new card</h4>
                  <p>
                    Your card information is secured with advanced encryption
                    technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="addNewCard-body-wrapper">
              <CRow>
                <CCol lg={12} className="mb-3">
                  <div className="card-inputs-wrapper">
                    <label htmlFor="" className="d-block">
                      Card Number
                    </label>
                    <div className="input-positionholder position-relative">
                      <input
                        type="text"
                        ref={cardnumber}
                        placeholder="0000 0000 0000 0000"
                      />
                      <Image
                        src={cardSVG}
                        width={24}
                        height={24}
                        alt="cards-icon"
                      />
                    </div>
                  </div>
                </CCol>
                <CCol lg={6} className="mb-3">
                  <div className="card-inputs-wrapper">
                    <label htmlFor="" className="d-block">
                      Expiry Date
                    </label>
                    <div className="input-positionholder position-relative">
                      <input
                        ref={cardDate}
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        className="expiry-date-input"
                        id="expiry-date"
                      />
                      <Image
                        src={calendarSVG}
                        width={24}
                        height={24}
                        alt="cards-icon"
                      />
                    </div>
                  </div>
                </CCol>
                <CCol lg={6} className="mb-3">
                  <div className="card-inputs-wrapper">
                    <label htmlFor="" className="d-block">
                      CVV
                    </label>
                    <div className="input-positionholder position-relative">
                      <input ref={cardCVC} type="text" placeholder="***" />
                      <Image
                        src={cvcSVG}
                        width={24}
                        height={24}
                        alt="cards-icon"
                      />
                    </div>
                  </div>
                </CCol>
                <CCol lg={12} className="mb-3">
                  <div className="card-inputs-wrapper">
                    <label htmlFor="" className="d-block">
                      Card Holder Name
                    </label>
                    <div className="input-positionholder">
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                </CCol>
                <CCol lg={12}>
                  <div className="save-card">
                    <CFormSwitch
                      label="Save My Card"
                      id="formSwitchCheckChecked"
                    />
                  </div>
                </CCol>
              </CRow>
              <CRow className="justify-content-center mt-3">
                <CCol lg={6}>
                  <div className="model-submit-btn">
                    <button type="button" className="w-100">
                      Add New Card
                    </button>
                  </div>
                </CCol>
              </CRow>
            </div>
          </div>
        </CModalBody>
      </CModal>
      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}
