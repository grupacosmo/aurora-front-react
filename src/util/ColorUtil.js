/**
 * Returns lighter color. Eg. If we will give color: [50, 70, 200] and value: 25, we will get: [75, 95, 200].
 * Color cannot be greater than 255. So if value of color is equal to 240 and you want color lighter of value 50, the
 * color value will be 255.
 *
 * @param color Array that represents rgb color eg. [50, 70, 255]
 * @param value How much lighter the color should be.
 * @returns {*} Array that represents rbg color [r, g, b]
 */
export function getLighterColor(color, value) {
  color = JSON.parse(JSON.stringify(color));

  for (let i = 0; i < 3; i++) {
    color[i] = color[i] + value < 255 ? color[i] + value : 255;
  }

  return color;
}

/**
 * Converts color to rgba string. Eg. if you give color: [20, 30, 40] and opacity 0.5, you will receive
 * string: rgba(20, 30, 40, 0.5).
 * @param color Array that represent rgb color [r, g, b]
 * @param opacity Value of opacity. By default it is 1.
 * @returns {string} Rgba value of color.
 */
export function toCssRgba(color, opacity=1) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
}