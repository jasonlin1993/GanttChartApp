// components/ChangeMonth.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChartOptions } from "../store/chartSlice";

const ChangeMonth = () => {
  const dispatch = useDispatch();
  const chartOptions = useSelector((state) => state.chart.chartOptions);
  const chartFilter = (event) => {
    const year = event.target.value.substring(0, 4);
    const month = event.target.value.substring(5, 7);
    const lastDay = new Date(year, month, 0).getDate();
    const startDate = `${year}-${month}-01`;
    const endDate = `${year}-${month}-${lastDay}`;

    dispatch(
      setChartOptions({
        ...chartOptions,
        scales: {
          ...chartOptions.scales,
          x: {
            ...chartOptions.scales.x,
            min: startDate,
            max: endDate,
          },
        },
      })
    );
  };

  return <input type="month" onChange={chartFilter} />;
};

export default ChangeMonth;
