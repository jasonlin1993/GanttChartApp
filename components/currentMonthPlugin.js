// components/currentMonthPlugin.js

const currentMonthPlugin = {
  id: "currentMonthLabel",
  afterDraw(chart, args, options) {
    const { ctx, chartArea, scales } = chart;
    const xAxis = scales.x;

    // 設定文字樣式
    ctx.save();
    ctx.font = "20px Arial"; // 調整為你想要的字體大小和樣式
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#000"; // 文字顏色

    // 從圖表的 X 軸選項中獲取選擇的年月
    const selectedStartDate = xAxis.min;
    const selectedDate = new Date(selectedStartDate);
    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.toLocaleString("default", { month: "long" });

    // 設定要顯示的文字
    const text = `${selectedYear} 年 ${selectedMonth}`;

    // 計算位置並在圖表上方中間繪製年月
    const x = (chartArea.left + chartArea.right) / 2;
    const y = chartArea.top - 30; // 根據你的圖表調整適當的 Y 位置

    // 繪製文字
    ctx.fillText(text, x, y);
    ctx.restore();
  },
};

export default currentMonthPlugin;
