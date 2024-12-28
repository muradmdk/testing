import React from "react";
import { CRow, CCol } from "@coreui/react";
import "@/app/styles/dashboard/analytics/analytics.css";
import Image from "next/image";

import exportIcon from "@/app/assets/dashboard/export.svg";
import revenueIcon from "@/app/assets/dashboard/revenueGrowth.svg";
import subscribeIcon from "@/app/assets/dashboard/subscribeIcon.svg";

import ReportChart from "@/app/dashboardComponents/analyticsCharts/reportChart";
import SubLevelChart from "@/app/dashboardComponents/analyticsCharts/SubLevelChart";
import GenderChart from "@/app/dashboardComponents/analyticsCharts/GenderChart";
import AgeChart from "@/app/dashboardComponents/analyticsCharts/AgeChart";
export default function AnalyticsDashboard() {
  return (
    <>
      <section className="analytics-content-wrapper">
        <CRow>
          <CCol lg={8} className="mb-4 mb-lg-0">
            <div className="analytics-card-wrapper">
              <div className="analytic-card-content-wrapper d-flex justify-content-between">
                <div className="analytics-title">
                  <h3 className="mb-0">Subscriber</h3>
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
                <CCol lg={6} className="mb-3 mb-lg-0">
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
                      <label>Total Subscriber</label>
                      <h4 className="mt-1">4500</h4>
                    </div>
                  </div>
                </CCol>
                <CCol lg={6}>
                  <div className="analytics-card-widget">
                    <div className="card-widget-icon">
                      <span>
                        <Image
                          src={revenueIcon}
                          width={24}
                          height={24}
                          alt="widget-icon"
                        ></Image>
                      </span>
                    </div>
                    <div className="card-widget-content ps-4">
                      <label>Revenue Generated</label>
                      <h4 className="mt-1">$4500</h4>
                    </div>
                  </div>
                </CCol>
                <CCol lg={12} className="mt-4">
                  <ReportChart></ReportChart>
                </CCol>
                <CCol lg={12} className="mt-4">
                  <SubLevelChart></SubLevelChart>
                </CCol>
              </CRow>
            </div>
          </CCol>
          <CCol lg={4}>
            <GenderChart></GenderChart>
            <div className="mt-4">
              <AgeChart></AgeChart>
            </div>
          </CCol>
        </CRow>
      </section>
    </>
  );
}
