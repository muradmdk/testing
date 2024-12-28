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
} from "@coreui/react";
import banner from "../../assets/feed/feed-2.png";
import Image from "next/image";
import "@/app/styles/artist/artist-detail.css";
import packageImg from "@/app/assets/feed/package.png";

import profileAvatar from "@/app/assets/feed/profile.png";
// UI

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

import check from "@/app/assets/feed/check.png";

import emoji from "@/app/assets/feed/smiley.svg";
import mention from "@/app/assets/feed/mention.svg";
import sendMsg from "@/app/assets/feed/paper-airplane.svg"

export default function ArtistDetail() {
  const [activeKey, setActiveKey] = useState(1);
  const [visible, setVisible] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const handleSubscribeClick = () => {
    setVisible(false);
    setIsNewModalOpen(true);
  };

  const HomeFeedArray = [
    {
      id: 1,
      trackThumbnail: Thumbnail1,
      trackSrc: SampleMusic,
      totalLikes: "274K",
      totolComments: "53",
      totalShare: "45",
      albumName: "Northern Attitude",
      albumBy: "Ahmed Hassan",
      albumThumbnail: albumThumbnail,
      comments: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentBy: "Lily Bennett",
          comment: "This mixtape is incredible! The transitions between tracks are so smooth, it feels like a single journey.",
          commentTime: "2 hours ago"
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentBy: "Marcus Liu",
          comment: "Track 6 has been on repeat all day! The bassline is addictive, and those lyrics really hit home.",
          commentTime: "30 minutes ago"
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentBy: "Zara Patel",
          comment: "Loving the new sound! It's fresh and different from their usual style, but it totally works.",
          commentTime: "1 day ago"
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentBy: "Daniel Green",
          comment: "This album is giving me serious summer vibes. Perfect soundtrack for road trips!",
          commentTime: "3 hours ago"
        },
        {
          id: 5,
          commentAvatar: Avatar,
          commentBy: "Ava Collins",
          comment: "The way the melody builds in the chorus of track 3 is just magical. Instant favorite.",
          commentTime: "2 days ago"
        },
        {
          id: 6,
          commentAvatar: Avatar,
          commentBy: "Elijah Carter",
          comment: "Honestly, this might be their best work yet. The production is so clean, and every song feels like a hit.",
          commentTime: "1 hour ago"
        },
      ]
    },
    {
      id: 2,
      trackThumbnail: Thumbnail2,
      trackSrc: SampleMusic2,
      totalLikes: "174K",
      totolComments: "99",
      albumName: "Value Mix",
      totalShare: "90",
      albumBy: "Murad Mansha",
      albumThumbnail: albumThumbnail,
      comments: [
        {
          id: 1,
          commentAvatar: Avatar,
          commentBy: "Nina Roberts",
          comment: "I wasn't sure what to expect, but this album totally blew me away. It's on repeat all weekend!",
          commentTime: "5 hours ago"
        },
        {
          id: 2,
          commentAvatar: Avatar,
          commentBy: "Oliver Park",
          comment: "The guitar solo in track 8 gave me chills. You can feel the emotion in every note.",
          commentTime: "45 minutes ago"
        },
        {
          id: 3,
          commentAvatar: Avatar,
          commentBy: "Maya Jenkins",
          comment: "Finally an album where I love every song! There's so much soul in this one.",
          commentTime: "4 days ago"
        },
        {
          id: 4,
          commentAvatar: Avatar,
          commentBy: "Jake Moreno",
          comment: "Such a unique sound! They really pushed their boundaries with this release, and it paid off big time.",
          commentTime: "3 hours ago"
        }
      ]
    }
  ];

  return (
    <>
      <section className="artist-detail-wrapper">
        <CContainer>
          <CRow>
            <CCol lg={12}>
              <div className="ad-banner-wrapper">
                <Image src={banner} alt="banner" width={100} height={350} />
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs={6}>
              <div className="mt-4">
                <ProfileInfo
                  avatar={profileAvatar}
                  profileName={"Northern Attitude"}
                  subDetail={"Ahmed hassan"}
                />
              </div>
            </CCol>
            <CCol lg={6}>
              <div className="mt-4 text-end">share</div>
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
                    <div className="single-subscription-card position-relative mt-4">
                      <CRow className="gx-2">
                        <CCol lg={3}>
                          <div className="subscription-desc">
                            <h4>Level 1</h4>
                            <p className="mb-0">1 Months</p>
                          </div>
                        </CCol>
                        <CCol lg={3}>
                          <div className="subscription-desc">
                            <h4>Save 33%</h4>
                            <p className="mb-0">$0.5</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-desc">
                            <h4>Albums</h4>
                            <p className="mb-0">5</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-desc">
                            <h4>Songs</h4>
                            <p className="mb-0">55</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-modal mt-1">
                            <button
                              type="button"
                              onClick={() => setVisible(!visible)}
                            >
                              View Details
                            </button>
                          </div>
                        </CCol>
                      </CRow>
                      <div className="popular-tag">
                        <Image src={tag} width={125} height={20} alt="tag" />
                      </div>
                    </div>
                    <div className="single-subscription-card position-relative mt-4">
                      <CRow className="gx-2">
                        <CCol lg={3}>
                          <div className="subscription-desc">
                            <h4>Level 2</h4>
                            <p className="mb-0">1 Months</p>
                          </div>
                        </CCol>
                        <CCol lg={3}>
                          <div className="subscription-desc">
                            <h4>Save 33%</h4>
                            <p className="mb-0">$0.5</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-desc">
                            <h4>Albums</h4>
                            <p className="mb-0">5</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-desc">
                            <h4>Songs</h4>
                            <p className="mb-0">55</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-modal mt-1">
                            <button type="button">View Details</button>
                          </div>
                        </CCol>
                      </CRow>
                      <div className="popular-tag">
                        <Image src={tag} width={125} height={20} alt="tag" />
                      </div>
                    </div>
                    <div className="single-subscription-card position-relative mt-4">
                      <CRow className="gx-2">
                        <CCol lg={3}>
                          <div className="subscription-desc">
                            <h4>Level 3</h4>
                            <p className="mb-0">1 Months</p>
                          </div>
                        </CCol>
                        <CCol lg={3}>
                          <div className="subscription-desc">
                            <h4>Save 33%</h4>
                            <p className="mb-0">$0.5</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-desc">
                            <h4>Albums</h4>
                            <p className="mb-0">5</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-desc">
                            <h4>Songs</h4>
                            <p className="mb-0">55</p>
                          </div>
                        </CCol>
                        <CCol lg={2}>
                          <div className="subscription-modal mt-1">
                            <button type="button">View Details</button>
                          </div>
                        </CCol>
                      </CRow>
                      <div className="popular-tag">
                        <Image src={tag} width={125} height={20} alt="tag" />
                      </div>
                    </div>
                  </div>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 2}>
                  <div className="subscription-wrapper mt-5">
                    <div className="subscription-header">
                      <CRow>
                        <CCol lg={4}>
                          <div className="subscription-label">
                            <label>Album Name</label>
                          </div>
                        </CCol>
                        <CCol lg={3}>
                          <div className="subscription-label">
                            <label>Relase Date</label>
                          </div>
                        </CCol>
                        <CCol lg={3}>
                          <div className="subscription-label">
                            <label>Songs</label>
                          </div>
                        </CCol>
                      </CRow>
                    </div>
                  </div>

                  <ArtistContent />
                  <ArtistContent />
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 3}>
                  <div className="mt-4">

                    {HomeFeedArray.length > 0 ? (
                      HomeFeedArray.map((feed) => (
                        <FeedList key={feed.id} feedData={feed} />
                      ))
                    ) : (
                      <div className='no-feed-wrapper text-center'>
                        <p className='mb-0'>No feed available</p>
                      </div>
                    )}

                  </div>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 4}>
                  <div className="mt-4 chat-placeholder-wrapper">
                    <div className="chat-placeholder">
                      <div className="chat-body">
                        <div className="chat-content">
                          <ul>
                            <li className="sender mb-3">
                              <div className="sender-content-wrapper">
                                <div className="sender-avatar">
                                  <Image src={Avatar} width={32} height={32} alt="avatar"></Image>
                                  <span className="online-status"></span>
                                </div>
                                <div className="sender-msg ms-3">
                                  <label htmlFor="" className="d-block">Janet</label>
                                  <p>On for 12:30 PM then ?</p>
                                  <span className="d-block">12:04 PM</span>
                                </div>
                              </div>
                            </li>
                            <li className="sender mb-3">
                              <div className="sender-content-wrapper reciever-wrapper">
                                <div className="sender-msg me-0">
                                  <p>Agreed</p>
                                  <div className="text-end">
                                    <Image src={check} width={16} height={8} alt="check" />
                                  </div>

                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-footer">
                        <div className="emoji-wrapper text-center">
                          <Image src={emoji} width={16} height={16}  alt="emoji"/>
                        </div>
                        <div className="chat-input-wrapper">
                          <input type="text" className="w-100" placeholder="Start typing..." />
                        </div>
                        <div className="include-wrapper text-center">
                          <Image src={mention} width={16} height={16} alt="mention" />
                        </div>
                        <div className="send-wrapper">
                        <Image src={sendMsg} width={16} height={16} alt="sendMsg"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </CTabPane>
                <CTabPane role="tabpanel" visible={activeKey === 5}>
                  <SubscribedList />
                </CTabPane>
              </CTabContent>
            </CCol>
          </CRow>
        </CContainer>
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
            <CCol lg={6}>
              <div className="level-title">
                <label htmlFor="">Level 1</label>
              </div>
            </CCol>
            <CCol lg={6}>
              <div className="close-modal text-end">
                <button type="button" onClick={() => setVisible(false)}>
                  <Image src={close} width={30} height={30} alt="close"></Image>
                </button>
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg={4}>
              <div className="subscription-label">
                <label>Album Name</label>
              </div>
            </CCol>
            <CCol lg={3}>
              <div className="subscription-label">
                <label>Relase Date</label>
              </div>
            </CCol>
            <CCol lg={3}>
              <div className="subscription-label">
                <label>Songs</label>
              </div>
            </CCol>
          </CRow>
          <ArtistContent />
          <ArtistContent />

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
              <div className="level-title">
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
            <CCol lg={10}>
              <div className="model-input d-flex justify-content-between align-items-center card-input shadow">
                <input
                  type="radio"
                  placeholder="Enter Visa Card Number"
                  pattern="[0-9]{16}"
                  maxLength="16"
                />
                <label htmlFor="" className="fs-18 font-poppins fw-500">
                  **** **** **** 5678
                </label>
                <Image
                  src="/assets/visa.png"
                  width={55}
                  height={55}
                  alt="icon"
                />
              </div>
              <div className="mt-4 d-flex justify-content-end new-card-wrapper">
                <Link href="" className="ml-2 font-poppins">
                  Add New Card
                </Link>
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
    </>
  );
}
