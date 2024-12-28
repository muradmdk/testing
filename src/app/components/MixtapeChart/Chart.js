'use client';
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import "@/app/styles/chart/chart.css"

export default function Chart() {
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light2", 
        backgroundColor: "transparent", 
        height: 300,
        axisX: {
            lineColor: "transparent", 
            tickColor: "transparent", 
            gridThickness: 0,
            interval: 1, 
            labelFormatter: function(e) {
                const months = [
                    "Jan", "Feb", "Mar", "Apr", 
                    "May", "Jun", "Jul", "Aug", 
                    "Sep", "Oct", "Nov", "Dec"
                ];
                return months[e.value]; 
            },
            labelFontColor: "#2D334B", 
        },
        axisY: {
            includeZero: true,
            lineColor: "transparent", 
            tickColor: "transparent", 
            gridThickness: 0, 
            valueFormatString: "$#,##0", 
            interval: 1000,
            labelFontColor: "#2D334B", 
        },
        data: [{
            type: "column", 
            indexLabelFontColor: "#2D334B", 
            indexLabelPlacement: "outside",
            cornerRadius: {
                topLeft: 10,
                topRight: 10
            },
            dataPoints: [
                { x: 0, y: 500, color: "#EF5660" },   
                { x: 1, y: 1200, color: "#EF5660" },  
                { x: 2, y: 1500, color: "#EF5660" },  
                { x: 3, y: 3000, color: "#EF5660" },
                { x: 4, y: 2500, color: "#EF5660" },  
                { x: 5, y: 4000, color: "#EF5660" },  
                { x: 6, y: 3800, color: "#EF5660" }, 
                { x: 7, y: 4300, color: "#EF5660" },  
                { x: 8, y: 2200, color: "#EF5660" },  
                { x: 9, y: 3100, color: "#EF5660" },  
                { x: 10, y: 2900, color: "#EF5660" }, 
                { x: 11, y: 3500, color: "#EF5660" }  
            ]
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}