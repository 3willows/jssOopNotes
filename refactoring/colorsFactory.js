// OLDEST WAY: This is the "factory" pattern (???)

function makeColor (r, g, b) {
  const color = {}
  color.r = r
  color.g = g
  color.b = b
  // color.rgb = function () {
  //   const { r, g, b } = this
  //   return `rgb(${r},${g},${b})`
  // }
  // arrow notation saves one line
  color.rgb = () => `rgb(${r},${g},${b})`
  color.hex = () =>
    `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  return color
}

