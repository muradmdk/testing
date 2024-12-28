"use client";

import React, { useState } from 'react';
import { CRow, CCol } from "@coreui/react";
import ReactApexChart from 'react-apexcharts'; 
import 'apexcharts/dist/apexcharts.css'; 

export default function ReportChart() {
  const [chartData] = useState({
    series: [{
      name: 'Subscribers',  
      data: [120, 130, 150, 170, 180, 100, 130, 200, 150] 
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false, 
        },
        fontFamily: 'Lato, sans-serif'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '15%',
          endingShape: 'rounded',
          borderRadius: 4,
        },
      },
      colors: ['#2D334B'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],  
        labels: {
          style: {
            colors: '#FFFFFF',
            fontFamily: 'Lato, sans-serif'
          }
        },
        title: {
          text: '', 
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#FFFFFF',
            fontFamily: 'Lato, sans-serif'
          }
        },
        title: {
          text: '',
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " subscribers"; 
          }
        }
      },
      grid: {
        borderColor: 'rgba(255,255,255,0.5)',  // Set the color for the grid lines
        strokeDashArray: 4,      // Make the lines dotted by setting dash length (adjust for dotted density)
      }
    },
  });

  return (
    <>
      <div className="charts-bg-wrapper">
        <CRow>
          <CCol lg={6}>
            <div className="chart-titles-wrapper">
              <h4 className="mb-0">Subscriber Growth Report</h4>
            </div>
          </CCol>
          <CCol lg={6}>
            <div className="chart-dropdown text-end">
              <select name="" id="">
                <option value="">Year</option>
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
              </select>
            </div>
          </CCol>
          <CCol lg={12} className='mt-4'>
            <div id="chart">
              {/* Render ApexCharts */}
              <ReactApexChart 
                options={chartData.options} 
                series={chartData.series} 
                type="bar" 
                height={350} 
              />
            </div>
          </CCol>
        </CRow>
      </div>
    </>
  );
}
