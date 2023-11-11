import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, TimeScale } from "chart.js";
import weekendPlugin from "./weekendPlugin";
import dayLabelsPlugin from "./dayLabelsPlugin";
import currentMonthPlugin from "./currentMonthPlugin";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  TimeScale,
  weekendPlugin,
  dayLabelsPlugin,
  currentMonthPlugin
);

const GanttChart = () => {
  // 初始狀態設置圖表的選項
  const chartOptions = useSelector((state) => state.chart.chartOptions);

  // const [chartOptions, setChartOptions] = useState({
  //   indexAxis: "y",
  //   scales: {
  //     x: {
  //       position: "top",
  //       type: "time",
  //       time: {
  //         unit: "day",
  //         displayFormats: {
  //           day: "d",
  //         },
  //       },
  //       min: "2023-11-01",
  //       max: "2023-11-30",
  //       grid: {
  //         drawBorder: true,
  //         borderColor: "rgba(0, 0, 0, 1)",
  //         borderWidth: 2,
  //       },
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     tooltip: {
  //       callbacks: {
  //         label: (ctx) => {
  //           return "";
  //         },
  //         title: (ctx) => {
  //           const startDate = new Date(ctx[0].raw.x[0]);
  //           const endDate = new Date(ctx[0].raw.x[1]);
  //           const formattedStartDate = startDate.toLocaleDateString("en-US", {
  //             year: "numeric",
  //             month: "short",
  //             day: "numeric",
  //           });
  //           const formattedEndDate = endDate.toLocaleDateString("en-US", {
  //             year: "numeric",
  //             month: "short",
  //             day: "numeric",
  //           });
  //           return `Task Time: ${formattedStartDate} - ${formattedEndDate}`;
  //         },
  //       },
  //     },
  //   },
  // });

  const [chartData, setChartData] = useState({
    labels: ["Task 1"], // Make sure to have labels for each dataset entry
    datasets: [
      {
        label: "Weekly Scales",
        data: [
          {
            x: ["2023-11-04", "2023-11-06"],
            y: "Task 1",
          },
          {
            x: ["2023-11-07", "2023-11-14"],
            y: "Task 2",
          },
          {
            x: ["2023-11-10", "2023-11-21"],
            y: "Task 3",
          },
          {
            x: ["2023-11-13", "2023-11-28"],
            y: "Task 4",
          },
          {
            x: ["2023-11-16", "2023-11-30"],
            y: "Task 5",
          },
          {
            x: ["2023-12-10", "2023-12-21"],
            y: "Task 6",
          },
          {
            x: ["2023-12-13", "2023-12-28"],
            y: "Task 7",
          },
          {
            x: ["2023-12-16", "2023-12-30"],
            y: "Task 8",
          },
        ],
        backgroundColor: [
          "rgba(255, 26, 104, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(0, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 26, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(0, 0, 0, 0.2)",
        ],
        borderWidth: 1,
        borderSkipped: false,
        borderRadius: 10,
        barPercentage: 0.5,
      },
    ],
  });

  // 更新圖表時間範圍的函數
  // function chartFilter(event) {
  //   const year = event.target.value.substring(0, 4);
  //   const month = event.target.value.substring(5, 7);
  //   const lastDay = new Date(year, month, 0).getDate();
  //   const startDate = `${year}-${month}-01`;
  //   const endDate = `${year}-${month}-${lastDay}`;
  //   setChartOptions({
  //     ...chartOptions,
  //     scales: {
  //       ...chartOptions.scales,
  //       x: {
  //         ...chartOptions.scales.x,
  //         min: startDate,
  //         max: endDate,
  //       },
  //     },
  //   });
  // }

  function addTask() {
    const nameTask = document.getElementById("nameTask").value;
    const startDateTask = document.getElementById("startDateTask").value;
    const endDateTask = document.getElementById("endDateTask").value;

    const newDataset = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [...chartData.datasets[0].data, { x: [startDateTask, endDateTask], y: nameTask }],
        },
      ],
    };

    setChartData(newDataset);
  }
  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
      <input type="text" id="nameTask" />
      <input type="date" id="startDateTask" />
      <input type="date" id="endDateTask" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default GanttChart;
