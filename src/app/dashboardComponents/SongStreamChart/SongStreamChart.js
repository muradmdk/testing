"use client";
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SongStreamChart = () => {
    const [chartData] = useState({
        series: [
            { name: 'Day', data: [0, 55, 41, 67, 22, 43, 45] },
            { name: 'Night', data: [57, 23, 20, 8, 13, 27, 5] },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 450,
                stacked: true,
                toolbar: { show: false }, // Hide toolbar
                zoom: { enabled: false }   // Disable zoom
            },
            colors: ['#EF5660', '#2D334B'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: { position: 'bottom', offsetX: -10, offsetY: 0 }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    borderRadiusApplication: 'end', // 'around', 'end'
                    borderRadiusWhenStacked: 'last', // 'all', 'last'
                    dataLabels: {
                        total: {
                            enabled: true,
                            style: { fontSize: '13px', fontWeight: 900 }
                        }
                    }
                }
            },
            xaxis: {
                type: 'category',
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'] // Days of the week
            },
            yaxis: {
                labels: { show: false } // Hides the y-axis labels
            },
            grid: {
                show: false // Removes the grid lines
            },
            legend: {
                position: 'right',
                offsetY: 40,
                markers: {
                    shape: 'circle' // Makes legend markers round
                }
            },
            fill: { opacity: 1 }
        }
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={450}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default SongStreamChart;
