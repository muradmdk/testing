"use client";

import React, { useState } from 'react';
import { CRow, CCol } from "@coreui/react";
import ReactApexChart from 'react-apexcharts';
import 'apexcharts/dist/apexcharts.css';

export default function GenderChart() {
  const [chartData] = useState({
    series: [60, 40],  // Female: 60%, Male: 40% (adjust as needed)
    options: {
      chart: {
        width: 380,
        type: 'pie',  // Change type to 'pie'
      },
      labels: ['Female', 'Male'],  // Labels for gender
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      fill: {
        colors: ['#EF5660', '#2D334B'],  // Female color: #EF5660, Male color: #36CFC9
      },
      legend: {
        position: 'top',  // Position of the legend
        labels: {
          colors: '#fff'  // Set legend text color to white
        }
      },
    },
  });

  return (
    <>
      <div className="charts-bg-wrapper">
        <CRow>
          <CCol lg={12}>
            <div className="chart-titles-wrapper">
              <h4 className="mb-0">Subscription By Gender</h4>
            </div>
          </CCol>
          <CCol lg={12} className="mt-4">
            <div id="chart">
              {/* Render the Pie ApexChart */}
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="pie"
                height={350}
              />
            </div>
          </CCol>
        </CRow>
      </div>
    </>
  );
}
