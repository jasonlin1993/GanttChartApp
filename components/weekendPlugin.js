// components/weekendPlugin.js

const weekendPlugin = {
  id: "weekendHighlight",
  beforeDraw(chart) {
    const ctx = chart.ctx;
    const xAxis = chart.scales.x;
    const yAxis = chart.scales.y;

    // 只在第一組資料集上畫背景
    if (chart.data.datasets.length > 0) {
      // 計算一天的寬度
      const dayWidth = xAxis.width / (xAxis.ticks.length - 1); // -1 因為 ticks 包括開始和結束點

      // 開始繪製背景
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";

      xAxis.ticks.forEach((tick, index) => {
        if (index < xAxis.ticks.length - 1) {
          // 避免越界
          const currentDay = new Date(tick.value).getDay();
          const nextDay = new Date(xAxis.ticks[index + 1].value).getDay();

          // 檢查是否為週五或週六
          if (currentDay === 6) {
            // 如果當前是週五
            ctx.fillStyle = "rgba(102, 102, 102, 0.2)"; // 週六的顏色
            ctx.fillRect(xAxis.getPixelForTick(index), yAxis.top, dayWidth, yAxis.bottom - yAxis.top);
          } else if (currentDay === 0) {
            // 如果當前是週日
            // 如果下一天不是週日（避免週末重疊繪製）
            if (nextDay !== 0) {
              ctx.fillStyle = "rgba(102, 102, 102, 0.2)"; // 週日的顏色
              ctx.fillRect(xAxis.getPixelForTick(index), yAxis.top, dayWidth, yAxis.bottom - yAxis.top);
            }
          }
        }
      });

      ctx.restore();
    }
  },
};

export default weekendPlugin;
