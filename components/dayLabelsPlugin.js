// components/dayLabelsPlugin.js

const dayLabelsPlugin = {
  id: "dayLabels",
  afterDatasetsDraw(chart, args, options) {
    const { ctx, scales } = chart;
    const xAxis = scales.x;

    // 確保我們有一個有效的 X 軸刻度
    if (!xAxis.ticks || xAxis.ticks.length === 0) return;

    // 設定文字樣式
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.font = "12px Arial"; // 可以根據你的需求調整字體樣式
    ctx.fillStyle = "red"; // 文字顏色

    // 星期的標籤
    const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

    // 繪製每個標籤
    xAxis.ticks.forEach((tick, index) => {
      const dayIndex = (new Date(tick.value).getDay() + 6) % 7; // 將星期日轉換為索引 6
      const label = dayLabels[dayIndex];
      const x = xAxis.getPixelForTick(index);

      // 在頂部繪製星期標籤
      ctx.fillText(label, x, xAxis.top + 30); // 調整 Y 位置以適應你的設計
    });

    ctx.restore();
  },
};

export default dayLabelsPlugin;
