// the problem is that fucntions are unnecessarily copied
// MIDDLE WAY: Prototype
function Color (r, g, b) {
  this.r = r
  this.g = g
  this.b = b
}

// If you use arrow functions, this will point to the whole window
Color.prototype.rgb = function () {
  const { r, g, b } = this
  return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function () {
  const { r, g, b } = this
  return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this
  return `rgba(${r},${g},${b},${a})`
}
