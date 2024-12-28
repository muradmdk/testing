"use client";
import React from "react";
import { CRow, CCol } from "@coreui/react";
import "@/app/styles/mixtape/mixtape.css";
import Link from "next/link";
import albumTumbnail from "@/app/assets/feed/demo-img.png";
import Image from "next/image";

export default function MixtapePage() {
  return (
    <>
      <CRow className="justify-content-end mb-4">
        <CCol lg={5} xs={12}>
          <div
            className="empty-mixtape-message text-end"
            style={{ alignItems: "flex-end" }}
          >
            <Link href={"mixtape/create-mixtape"} className="w-100 text-center">
              Create Your Mixtape
            </Link>
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={12} className="mb-4">
          <div className="mixtape-header-placeholder">
            <div className="mixtape-thumbnail mb-lg-0 mb-3">
              <Image
                src={albumTumbnail}
                width={145}
                height={118}
                alt="thumbnail"
              />
            </div>
            <div className="mixtape-desc ps-lg-3 ps-0">
              <h4 className="mb-lg-2 mb-0">
                <Link href={`/mixtape/1`}>Retro English Song</Link>
              </h4>
              <label className="d-block">10 Subscribers</label>
              <span>10 Songs</span>, <span>40 Hours</span>,{" "}
              <span>30 Minutes</span>
              <div className="mt-lg-1 mt-2">
                <Link href={`#`} className="newSub-link">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </CCol>
        <CCol lg={12} className="mb-4">
          <div className="mixtape-header-placeholder">
            <div className="mixtape-thumbnail mb-lg-0 mb-3">
              <Image
                src={albumTumbnail}
                width={145}
                height={118}
                alt="thumbnail"
              />
            </div>
            <div className="mixtape-desc ps-lg-3 ps-0">
              <h4 className="mb-lg-2 mb-0">
                <Link href={`/mixtape/2`}>Rock & Roll</Link>
              </h4>
              <label className="d-block">0 Subscribers</label>
              <span>20 Songs</span>, <span>20 Hours</span>,{" "}
              <span>10 Minutes</span>
              <div className="mt-lg-1 mt-2">
                <Link
                  href={`/dashboard/settings/mixtape/1`}
                  className="newSub-link"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </CCol>
      </CRow>
    </>
  );
}
