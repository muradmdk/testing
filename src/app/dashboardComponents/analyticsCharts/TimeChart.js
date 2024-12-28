"use client";

import React from 'react';
import { CRow, CCol } from "@coreui/react";
import SongStreamChart from '@/app/dashboardComponents/SongStreamChart/SongStreamChart';

export default function TimeChart() {


  return (
    <>
      <div className="charts-bg-wrapper">
        <CRow>
          <CCol lg={12}>
            <div className="chart-titles-wrapper">
              <h4 className="mb-0">Streaming By Time</h4>
            </div>
          </CCol>
          <CCol lg={12} className="mt-4">
            <SongStreamChart></SongStreamChart>
          </CCol>
        </CRow>
      </div>
    </>
  );
}
