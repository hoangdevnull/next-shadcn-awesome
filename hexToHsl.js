/* eslint-disable */

function hexToCssHsl(hex, valuesOnly = true) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  let cssString = '';
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  let l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  cssString = `${h},${s}%,${l}%`;
  cssString = !valuesOnly ? `hsl(${cssString})` : cssString;

  return cssString;
}

const hex = {
  neutral: {
    10: '#E7E7E7',
    20: '#CECECE',
    30: '#B6B6B6',
    40: '#9D9D9D',
    50: '#858585',
    60: '#6C6C6C',
    70: '#545454',
    80: '#3B3B3B',
    90: '#232323',
    100: '#0A0A0A',
  },
  main: {
    10: '#E6EAF8',
    20: '#CCD5EF',
    30: '#B4C0E8',
    40: '#9AABDF',
    50: '#8196D8',
    60: '#6781D0',
    70: '#4E6CC8',
    80: '#3557C0',
    90: '#1C42B8',
    100: '#022DB0',
  },
  sub: {
    1: '#0D0434',
    2: '#050544',
    3: '#69CAF7',
  },
};

const neutral = Object.keys(hex.neutral).map((x) => ({
  [x]: hexToCssHsl(hex.neutral[x]),
}));
const main = Object.keys(hex.main).map((x) => ({
  [x]: hexToCssHsl(hex.main[x]),
}));
const sub = Object.keys(hex.sub).map((x) => ({
  [x]: hexToCssHsl(hex.sub[x]),
}));
