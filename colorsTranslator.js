const hex = (r, g, b) =>
  `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

const rgb = (r, g, b) => {
  return `rgb(${r}${g}${b})`
}

// console.log(hex(0, 51, 255))
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
  constructor (r, g, b, names) {
    this.r = r
    this.g = g
    this.b = b
    this.name = name
  }
  innerRgb () {
    const { r, g, b } = this
    return `${r},${g},${b}`
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
}

const c1 = new classyColor(170, 80, 105, 'classy purple')

// DOM

const colorTitles = document.querySelectorAll('.colorTitle')
const form = document.querySelector('form')

form.addEventListener('change', function (e) {
  const formData = new FormData(this) // Gets the form data

  const r = formData.get('r') // Retrieves the 'r' value from form data
  const g = formData.get('g') // Retrieves the 'g' value from form data
  const b = formData.get('b') // Retrieves the 'b' value from form data

  console.log(`Red: ${r}, Green: ${g}, Blue: ${b}`)
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  // Iterate through each .colorTitle element and apply the style
  colorTitles.forEach(colorTitle => {
    colorTitle.style.color = rgbColor
  })

  // const k = makeColor(r, g, b)
  // const colorObject = new Color(r, g, b)
  const colorObject = new classyColor(r, g, b)

  const rgbValues = document.querySelector('#rgbValues')
  const hexValues = document.querySelector('#hexValues')

  rgbValues.value = `${r}, ${g}, ${b}`

  hexValues.value = colorObject.hex()
})

const color1 = new Color(98, 164, 75)
