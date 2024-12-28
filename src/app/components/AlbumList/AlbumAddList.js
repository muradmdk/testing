import { CButton, CCol, CRow } from "@coreui/react";
import Image from "next/image";
import React, { useState } from "react";
import "@/app/styles/mixtape/mixtape.css";

function AlbumAddList(props) {
  const [showAll, setShowAll] = useState(false);
  const initialVisibleItems = 4;
  const visibleItems = showAll ? props.list : props.list.slice(0, initialVisibleItems);


  const handleToggleView = () => setShowAll(prevShowAll => !prevShowAll);

  return (
    <>
      <div className="queue-list-wrapper album-list-wrapper">
        <CRow className="align-items-center gx-1">
          <CCol xs={4}>
            <p className="fs-20 fw-600 lh-38 page-title font-lato ps-3">
              Track Name{" "}
            </p>
          </CCol>
          <CCol xs={4} className="ps-2 d-flex justify-content-center">
            <p className="fs-20 fw-600 lh-38 page-title font-lato">Album</p>
          </CCol>
          <CCol xs={4} className="d-flex justify-content-end">
            <p className="fs-20 fw-600 lh-38 page-title font-lato pe-3">Add</p>
          </CCol>
        </CRow> 

        <ul className="ps-3">
          {visibleItems.map((artist, index) => (
            <li key={index} className="mb-3">
              <CRow className="align-items-center gx-1 single-ablum-list">
                <CCol xs={4}>
                  <div className="artist-avatar d-flex align-items-center">
                    <Image
                      src={artist.queueIcon}
                      width={55}
                      height={55}
                      alt="artist"
                    />
                    <p className="ps-3 fs-16 fw-400 lh-16 mb-1 font-lato track-name">
                      {artist.queueTitle}
                    </p>
                  </div>
                </CCol>
                <CCol xs={4} className="ps-2">
                  <div className="queue-list-disc d-flex justify-content-center">
                    <span className="fs-16 fw-400 lh-16 font-lato track-name">
                      {artist.artistName}
                    </span>
                  </div>
                </CCol>

                <CCol
                  xs={4}
                  className="d-flex justify-content-end add-album-btn"
                >
                  <CButton>
                    <Image
                      src="/assets/albumlist/plus.svg"
                      width={25}
                      height={25}
                      alt="artist"
                    />
                  </CButton>
                </CCol>
              </CRow>
            </li>
          ))}
        </ul>

        <CRow className="justify-content-end pb-3">
          <CCol lg={4} className="d-flex justify-content-end align-items-center">
            <CButton
              type="button"
              color="primary"
              className="w-100 view-btn"
              onClick={handleToggleView}
            >
              <Image
                src="/assets/albumlist/plusicon.svg"
                width={15}
                height={15}
                alt="icon"
              />
              <span className="ps-2">
                {showAll ? "View Less" : "View All"}
              </span>
            </CButton>
          </CCol>
        </CRow>
      </div>
    </>
  );
}

export default AlbumAddList;
