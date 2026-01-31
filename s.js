  const data = [40, 120, 80, 160, 100];
  const max = Math.max(...data);

  const chart = document.getElementById("chart");

  // bar を生成
  data.forEach(() => {
    const bar = document.createElement("div");
    bar.className = "bar";
    chart.appendChild(bar);
  });

  const bars = Array.from(chart.querySelectorAll(".bar"));
  const count = bars.length;

  const observer = new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;

    bars.forEach((bar, index) => {
      const delayIndex = count - 1 - index; // 右→左
      const height = (data[index] / max) * 100;

      setTimeout(() => {
        bar.style.height = height + "%";
      }, delayIndex * 150);
    });

    obs.disconnect();
  }, {
    rootMargin: "-40% 0px -60% 0px"
  });

  observer.observe(chart);