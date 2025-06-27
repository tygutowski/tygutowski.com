export function animateRainbowWaveText(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const {
    waveHeight = 4,
    waveSpeed = 1,
    colorSpeed = 8,
    colorOffset = 1,
  } = options;

  const COLORS = [
    "#c084fc", "#f472b6", "#fb7185", "#e879f9", "#a78bfa",
    "#818cf8", "#60a5fa", "#38bdf8", "#fb923c", "#f87171"
  ];

  const letters = [];

  elements.forEach((el) => {
    const text = el.textContent;
    el.textContent = '';

    let visibleCharIndex = 0;

    [...text].forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      el.appendChild(span);

      if (char !== ' ') {
        span.style.display = 'inline-block';
        span.style.position = 'relative';
        letters.push({ span, index: visibleCharIndex });
        visibleCharIndex++;
      }
    });
  });

  let lastTimestamp = 0;
  let colorShift = 0;

  function animate(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const elapsed = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    const t = timestamp / 1000;
    colorShift = (colorShift + elapsed * colorSpeed) % COLORS.length;

    letters.forEach(({ span, index }) => {
      const wave = Math.sin((t * 2 * Math.PI / waveSpeed) + index * 0.4);
      span.style.transform = `translateY(${wave * waveHeight}px)`;

      const colorIndex = Math.floor((index + colorShift * colorOffset)) % COLORS.length;
      span.style.color = COLORS[colorIndex];
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
