import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./MyChart.css"; // Import the CSS file

import chartsunimg from "../../assets/chartsun.png"; // Adjust the import path as necessary
import chartrainimg from "../../assets/chartrain.png"; // Adjust the import path as necessary
import chartcloudimg from "../../assets/cloudsun.png"; // Adjust the import path as necessary

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const MyChart = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  const data = {
    labels: [
      "3:00pm",
      "4:00pm",
      "5:00pm",
      "6:00pm",
      "7:00pm",
      "8:00pm",
      "9:00pm",
      "10:00pm",
      "11:00pm",
      "12:00pm",
    ],
    datasets: [
      {
        data: [32, 28, 38, 32, 28, 32, 24, 22, 20, 24],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true, // Ensure all labels are shown
          maxRotation: 0,
          minRotation: 0,
          callback: function (value, index, values) {
            return data.labels[index]; // Display only the time
          },
        },
      },
      y: {
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  const cards = [
    {
      day: "Fri",
      img: chartsunimg,
      temp: "35°C 27°C",
    },
    {
      day: "Sat",
      img: chartrainimg,
      temp: "35°C 27°C",
    },
    {
      day: "Sun",
      img: chartsunimg,
      temp: "35°C 27°C",
    },
    {
      day: "Mon",
      img: chartsunimg,
      temp: "35°C 27°C",
    },
    {
      day: "Tue",
      img: chartrainimg,
      temp: "35°C 27°C",
    },
    {
      day: "Wed",
      img: chartcloudimg,
      temp: "35°C 27°C",
    },
    {
      day: "Thu",
      img: chartsunimg,
      temp: "35°C 27°C",
    },
    {
      day: "Fri",
      img: chartsunimg,
      temp: "35°C 27°C",
    },
    {
      day: "Sat",
      img: chartrainimg,
      temp: "35°C 27°C",
    },
    {
      day: "Sun",
      img: chartsunimg,
      temp: "35°C 27°C",
    },
  ];

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
      <div className="cards-container">
        {cards.map((label, index) => (
          <div
            key={index}
            className={`card ${index === activeCardIndex ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-day">{label.day}</div>
            <img src={label.img} alt="icon" className="card-img" />
            <div className="card-temp">{label.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyChart;
