import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  plugins,
  Legend,
} from "chart.js/auto";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
export default function Chart2() {
  const data = {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        data: [80, 100, 70, 80, 120, 80],
        borderColor: "#1f8ef1",
        tension: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 60,
        max: 130,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };
  return (
    <div className="component">
      <div className="component-header">
        <h5 className="component-heading">Completed Tasks</h5>
        <div className="component-detail">
          <i className="bi bi-send chart-3-icon"></i>
          <h3>12,100k</h3>
        </div>
      </div>
      <div className="components-chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
