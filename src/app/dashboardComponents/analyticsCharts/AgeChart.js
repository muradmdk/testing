"use client";

import React, { useState } from 'react';
import { CRow, CCol } from "@coreui/react";
import ReactApexChart from 'react-apexcharts';
import 'apexcharts/dist/apexcharts.css';

export default function AgeChart() {
  const [chartData] = useState({
    series: [44, 55, 41],  // Example data for age groups: <25, 25-35, 35+ (adjust as needed)
    options: {
      chart: {
        type: 'donut',  // Change type to 'donut' for the donut chart
      },
      labels: ['<25', '25-35', '35+'],  // Labels for the age groups
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
        colors: ['#EF5660', '#E9ECF6', '#2D334B'],  // Customize the colors for each age group
      },
      legend: {
        position: 'top',  // Position of the legend
        labels: {
          colors: '#fff'  // Set legend text color to white
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',  // Adjust the donut hole size
          }
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
              <h4 className="mb-0">Subscription By Age Group</h4>
            </div>
          </CCol>
          <CCol lg={12} className="mt-4">
            <div id="chart">
              {/* Render the Donut ApexChart */}
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                height={350}
              />
            </div>
          </CCol>
        </CRow>
      </div>
    </>
  );
}
