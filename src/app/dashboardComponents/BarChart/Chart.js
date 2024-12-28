
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData] = useState({
    series: [{
      data: [2500, 3000, 2000, 1000, 0] // Updated y-axis values in 'k' format
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false // Hides the menu button
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false, // Vertical bar chart
          colors: {
            ranges: [{
              from: 0,
              to: 3000,
              color: 'url(#gradient1)' // Referencing the gradient
            }]
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ['#D8CED2'], 
          stops: [0, 100],
          colorStops: [
            { offset: 0, color: "#EF5660", opacity: 1 },
            { offset: 100, color: "#D8CED2", opacity: 1 }
          ]
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // x-axis labels
        labels: {
          style: {
            colors: 'rgba(255, 255, 255, 0.75)' // Set label color
          }
        },
        axisBorder: {
          show: false // Hide the bottom line on x-axis
        },
        axisTicks: {
          show: false // Hide the ticks on x-axis
        }
      },
      yaxis: {
        labels: {
          formatter: (val) => `${val / 1000}k`, // Format y-axis labels in 'k' format
          style: {
            colors: 'rgba(255, 255, 255, 0.75)' // Set label color
          }
        }
      },
      grid: {
        show: false // Hides background grid lines
      },
      tooltip: {
        theme: 'dark', // Set theme to dark for white text
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        y: {
          formatter: (val) => `${val} units` // Customize tooltip value format if desired
        },
        fillSeriesColor: false,
        marker: {
          show: true
        },
        custom: ({ series, seriesIndex, dataPointIndex, w }) => {
          const data = series[seriesIndex][dataPointIndex];
          return `<div style="background-color: #4A506980; color: white; padding: 8px; border-radius: 4px;">
                    <strong>${w.globals.labels[dataPointIndex]}</strong>: ${data}
                  </div>`;
        }
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default ApexChart;
