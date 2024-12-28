import React from "react";
import { CRow, CCol } from "@coreui/react";
import "@/app/styles/dashboard/analytics/analytics.css";
import Image from "next/image";

import exportIcon from "@/app/assets/dashboard/export.svg";
import subscribeIcon from "@/app/assets/dashboard/view.svg";

import TimeChart from "@/app/dashboardComponents/analyticsCharts/TimeChart";
import GenderChart from "@/app/dashboardComponents/analyticsCharts/GenderChart";
import AgeChart from "@/app/dashboardComponents/analyticsCharts/AgeChart";
export default function StreamingDashboard() {
  return (
    <>
      <section className="analytics-content-wrapper">
        <CRow>
          <CCol lg={12}>
            <div className="analytics-card-wrapper">
              <div className="analytic-card-content-wrapper d-flex justify-content-between">
                <div className="analytics-title">
                  <h3 className="mb-0">Streaming</h3>
                </div>
                <div className="analytics-export">
                  <button type="button">
                    Export{" "}
                    <Image
                      src={exportIcon}
                      width={16}
                      height={16}
                      alt="export-icon"
                      className="ms-2"
                    ></Image>
                  </button>
                </div>
              </div>
              <CRow className="mt-4">
                <CCol lg={6}>
                  <div className="analytics-card-widget">
                    <div className="card-widget-icon">
                      <span>
                        <Image
                          src={subscribeIcon}
                          width={24}
                          height={24}
                          alt="widget-icon"
                        ></Image>
                      </span>
                    </div>
                    <div className="card-widget-content ps-4">
                      <label>Total View</label>
                      <h4 className="mt-1">45000</h4>
                    </div>
                  </div>
                </CCol>
                
                <CCol lg={12} className="mt-4">
                  <TimeChart></TimeChart>
                </CCol>
                <CCol lg={4} className="mt-4">
                <GenderChart></GenderChart>
                </CCol>
                <CCol lg={8} className="mt-4">
                <AgeChart></AgeChart>
                </CCol>
              </CRow>
            </div>
          </CCol>
        </CRow>
      </section>
    </>
  );
}
