"use client";

import React, { useState } from "react";
import { CRow, CCol, CButton } from "@coreui/react";
import Image from "next/image";

import albumTumbnail from "@/app/assets/feed/demo-img.png";
import "@/app/styles/mixtape/mixtape.css";
import EmptyMixtapeMessage from "@/app/components/EmptyMixtape/EmptyMixtapeMessage";
import trackTumbnail from "@/app/assets/feed/demo-img.png";
import dynamic from 'next/dynamic';
const AlbumChart = dynamic(() => import('@/app/components/MixtapeChart/Chart'), { ssr: false });

import plus from "@/app/assets/feed/plus.png";
import minus from "@/app/assets/feed/minus.png";
import Link from "next/link";

export default function MixtapePage() {
  const mixtape = {
    id: 1,
    thumbnail: albumTumbnail,
    title: "Retro English Song",
    totalSub: "47",
    totalSong: "42",
    totalHours: "2",
    totalMinuts: "15",
    tag: "Music Lover",
    desc: "On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. ",
    availableBalance: "20",
    mixtapeSongs: [
      {
        id: 1,
        TrackName: "Sorfcore",
        releaseDate: "Nov 4, 2023",
        albumName: "Anthony",
        album: "Hard to Imagine",
        trackThumbnail: trackTumbnail,
      },

      {
        id: 2,
        TrackName: "Skyfall Beats",
        releaseDate: "Oct 26, 2023",
        albumName: "Anthony",
        album: "Hard to Imagine",
        trackThumbnail: trackTumbnail,
      },
      {
        id: 3,
        TrackName: "Greedy",
        releaseDate: "Dec 30, 2023",
        albumName: "Anthony",
        album: "Greedy",
        trackThumbnail: trackTumbnail,
      },
      {
        id: 4,
        TrackName: "Lovin On me",
        releaseDate: "Dec 30, 2023",
        albumName: "Anthony",
        album: "Lovin On Me",
        trackThumbnail: trackTumbnail,
      },
      {
        id: 5,
        TrackName: "Dancin On Night",
        releaseDate: "May 27, 2023",
        albumName: "Anthony",
        album: "Dance The Night",
        trackThumbnail: trackTumbnail,
      },
      {
        id: 6,
        TrackName: "Greedy",
        releaseDate: "Dec 30, 2023",
        albumName: "Anthony",
        album: "Greedy",
        trackThumbnail: trackTumbnail,
      },
      {
        id: 7,
        TrackName: "Lovin On me",
        releaseDate: "Dec 30, 2023",
        albumName: "Anthony",
        album: "Lovin On Me",
        trackThumbnail: trackTumbnail,
      },
      {
        id: 8,
        TrackName: "Dancin On Night",
        releaseDate: "May 27, 2023",
        albumName: "Anthony",
        album: "Dance The Night",
        trackThumbnail: trackTumbnail,
      },
    ],
  };

  const isMixtapeSongsEmpty = mixtape.mixtapeSongs.length === 0;
  // const isMixtapeSongsEmpty = mixtape.mixtapeSongs.length != 0;
  const [showAll, setShowAll] = useState(false);

  const initialVisibleSongs = 4;
  const visibleSongs = showAll
    ? mixtape.mixtapeSongs
    : mixtape.mixtapeSongs.slice(0, initialVisibleSongs);

  const handleToggleView = () => setShowAll((prevShowAll) => !prevShowAll);

  return (
    <>
      {isMixtapeSongsEmpty ? (
        <EmptyMixtapeMessage />
      ) : (
        <section className="single-mixtape-wrapper">
          <CRow>
            {/* <CRow className="justify-content-end">
              <CCol lg={5}>
                <div
                  className="empty-mixtape-message text-end"
                  style={{ alignItems: "flex-end" }}
                >
                  <Link href={"mixtape/create-mixtape"}>
                    Create Your Mixtape
                  </Link>
                </div>
              </CCol>
            </CRow> */}
            <CCol lg={12}>
              <div className="mixtape-content">
                <div className="mixtape-header-placeholder">
                  <div className="mixtape-thumbnail">
                    <Image
                      src={albumTumbnail}
                      width={145}
                      height={118}
                      alt="thumbnail"
                    />
                    <label className="d-inline-block mt-2">Music Lover</label>
                  </div>
                  <div className="mixtape-desc ps-lg-3 ps-0">
                    <h4>{mixtape.title}</h4>
                    <label className="d-block">
                      {mixtape.totalSub} Subscribers
                    </label>
                    <span>{mixtape.totalSong} Songs</span>,{" "}
                    <span>{mixtape.totalHours} Hours</span>,{" "}
                    <span>{mixtape.totalMinuts} Minutes</span>
                    <div className="mt-2">
                    <Link
                  href={`/dashboard/settings/mixtape/1`}
                  className="newSub-link"
                >
                  Subscribe
                </Link>
                    </div>
                    
                  </div>
                  
                </div>
                <div className="mixtape-about mt-4 mb-4">
                  <h4>About</h4>
                  <p>{mixtape.desc}</p>
                </div>
                <div className="album-chart-wrapper mb-4">
                  <CRow>
                    <CCol lg={12}>
                      <div className="chart-placeholder">
                        <div className="chart-balance-wrapper">
                          <div className="chart-label">
                            <label htmlFor="">Available Balance</label>
                          </div>
                          <div className="chart-balance">
                            <h4 className="mb-0">$19.00</h4>
                          </div>
                        </div>
                        <AlbumChart></AlbumChart>
                      </div>
                    </CCol>
                  </CRow>
                </div>
                <div className="track-list-wrapper">
                  <div className="track-list-header d-none d-lg-block">
                    <CRow className="mb-3 gx-1">
                      <CCol xs={4}>
                        <div className="header-title fs-20 fw-600 lh-38 page-title font-lato">
                          <span>Track Name</span>
                        </div>
                      </CCol>
                      <CCol xs={3}>
                        <div className="header-title fs-20 fw-600 lh-38 page-title font-lato">
                          <span>Release Date</span>
                        </div>
                      </CCol>
                      <CCol xs={2}>
                        <div className="header-title fs-20 fw-600 lh-38 page-title font-lato">
                          <span>Artist Name</span>
                        </div>
                      </CCol>
                      <CCol xs={3}>
                        <div className="header-title fs-20 fw-600 lh-38 page-title font-lato text-start pe-2">
                          <span>Album</span>
                        </div>
                      </CCol>
                    </CRow>
                  </div>
                  <ul>
                    {visibleSongs.map((song, index) => (
                      <li key={index}>
                        <div className="single-ablum-list">
                          <CRow className="align-items-start align-items-lg-center gx-1">
                            <CCol lg={4} xs={12} className="mb-2 mb-lg-0">
                              <div className="track-thumbnail">
                                <div className="d-flex align-items-center">
                                  <div className="track-img">
                                    <Image
                                      src={song.trackThumbnail}
                                      width={52}
                                      height={52}
                                      alt="track thumbnail"
                                    />
                                  </div>
                                  <div className="track-info-wrapper">
                                    <span className="ps-3">Track Name</span>
                                    <label className="ps-3">
                                      {song.TrackName}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </CCol>
                            <CCol lg={3} xs={4}>
                              <div className="track-info-wrapper">
                                <span>Release Date</span>
                                <label>{song.releaseDate}</label>
                              </div>
                            </CCol>
                            <CCol lg={2} xs={4}>
                              <div className="track-info-wrapper">
                                <span>Artist Name</span>
                                <label>{song.albumName}</label>
                              </div>
                            </CCol>
                            <CCol lg={3} xs={4} >
                              <div className="track-info-wrapper text-start text-lg-start pe-lg-2">
                                <span>Album</span>
                                <label>{song.album}</label>
                              </div>
                            </CCol>
                          </CRow>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <CRow className="justify-content-end">
                  <CCol
                    lg={4}
                    className="d-flex justify-content-end align-items-center"
                  >
                    {showAll ? (
                      <div className="toggle-btn-group">
                        <button type="button" onClick={handleToggleView}>
                          <Image
                            src={minus}
                            height={16}
                            width={16}
                            alt="plus-img"
                          />{" "}
                          <span className="ps-2">View Less</span>
                        </button>
                      </div>
                    ) : (
                      <div className="toggle-btn-group">
                        <button type="button" onClick={handleToggleView}>
                          <Image
                            src={plus}
                            height={16}
                            width={16}
                            alt="plus-img"
                          />{" "}
                          <span className="ps-2">View More</span>
                        </button>
                      </div>
                    )}
                  </CCol>
                </CRow>
              </div>
            </CCol>
          </CRow>
        </section>
      )}
    </>
  );
}
