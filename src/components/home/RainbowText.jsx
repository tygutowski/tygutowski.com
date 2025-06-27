// src/components/RainbowText.jsx
import { useEffect } from 'react';
import { animateRainbowWaveText } from '../rainbow-text.js';

export default function RainbowText({ text = 'game designer,' }) {
  useEffect(() => {
    animateRainbowWaveText('.rainbow-wave');
  }, []);

  return <span className="rainbow-wave">{text}</span>;
}
