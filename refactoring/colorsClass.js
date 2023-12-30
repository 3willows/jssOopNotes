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

// LATEST WAY: Class
// Just better packaged

class example {
  constructor (r, g, b) {
    console.log('in constructor!')
    console.log(r, g, b)
  }
}

// when you create a new instance, constructor runs immediately
// const c1 = new example(222, 2, 22)

class classyColor {
  constructor (r, g, b, name = "unnamed color") {
    this.r = r
    this.g = g
    this.b = b
    this.name = name
    this.calcHSL()
  }
  innerRgb () {
    const { r, g, b } = this
    return `${r},${g},${b}`
  }
  hsl () {
    const { h, s, l } = this
    return `hsl(${h},${s}%,${l}%)`
  }
  displayHsl () {
    const { h, s, l } = this
    return `${h}, ${s}%, ${l}%`
  }
  opposite (){
    const { h, s, l } = this
    return `hsl(${(h+180)%360},${Math.abs(100-s)}%,${Math.abs(100-l)}%)`
  }
  fullSaturation(){
    const { h, l } = this
    return `hsl(${h},100%,${l}%)`
  }
  rgb () {
    return `rgb(${this.innerRgb()})`
  }
  rgba (a = 1) {
    return `rgba(${this.innerRgb()},${a})`
  }
  hex () {
    const { r, g, b } = this
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }
  calcHSL () {
    let { r, g, b } = this
    // Make r, g, and b fractions of 1
    r /= 255
    g /= 255
    b /= 255

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0
    if (delta == 0) h = 0
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2
    // Blue is max
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    // Make negative hues positive behind 360°
    if (h < 0) h += 360
    // Calculate lightness
    l = (cmax + cmin) / 2

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
    this.h = h
    this.s = s
    this.l = l
  }
}

const c1 = new classyColor(170, 80, 105, 'classy purple')
