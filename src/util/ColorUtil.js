export function getLighterColor(color, value) {
  color = JSON.parse(JSON.stringify(color));

  for (let i = 0; i < 3; i++) {
    color[i] = color[i] + value < 255 ? color[i] + value : 255;
  }

  return color;
}


export function toCssRgba(color, opacity=1) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
}