// store/chartSlice.js

import dayLabelsPlugin from "@/components/dayLabelsPlugin";
import weekendPlugin from "@/components/weekendPlugin";
import currentMonthPlugin from "@/components/currentMonthPlugin";
import { createSlice } from "@reduxjs/toolkit";

export const chartSlice = createSlice({
  name: "chart",
  initialState: {
    chartOptions: {
      indexAxis: "y",
      scales: {
        x: {
          position: "top",
          type: "time",
          time: {
            unit: "day",
            displayFormats: {
              day: "d",
            },
          },
          min: "2023-11-01",
          max: "2023-11-30",
          grid: {
            drawBorder: true,
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,
          },
        },
      },
      plugins: {
        weekend: {
          weekendColor: "rgba(102, 102, 102, 0.2)",
        },
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              return "";
            },
            title: (ctx) => {
              const startDate = new Date(ctx[0].raw.x[0]);
              const endDate = new Date(ctx[0].raw.x[1]);
              const formattedStartDate = startDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
              const formattedEndDate = endDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
              return `Task Time: ${formattedStartDate} - ${formattedEndDate}`;
            },
          },
        },
      },
    },
    plugins: {
      weekend: weekendPlugin,
      dayLabels: dayLabelsPlugin,
      currentMonthLabel: currentMonthPlugin,
    },
  },
  reducers: {
    setChartOptions: (state, action) => {
      state.chartOptions = action.payload;
    },
  },
});

export const { setChartOptions } = chartSlice.actions;

export default chartSlice.reducer;
