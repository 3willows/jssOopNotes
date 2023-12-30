// This is the "factory" pattern (???)

const hex = (r, g, b) =>
  `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

const rgb = (r, g, b) => {
  return `rgb(${r}${g}${b})`
}

// console.log(hex(0, 51, 255))

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

const firstColor = new makeColor(0, 51, 255)

// DOM

const colorTitle = document.querySelector('#colorTitle')
const form = document.querySelector('form')

form.addEventListener('change', function (e) {
  const formData = new FormData(this) // Gets the form data

  const r = formData.get('r') // Retrieves the 'r' value from form data
  const g = formData.get('g') // Retrieves the 'g' value from form data
  const b = formData.get('b') // Retrieves the 'b' value from form data

  console.log(`Red: ${r}, Green: ${g}, Blue: ${b}`)
  colorTitle.style.color = `rgb(${r}, ${g}, ${b})`

  const colorObject = makeColor(r, g, b)

  const rgbValues = document.querySelector('#rgbValues')
  const hexValues = document.querySelector('#hexValues')

  rgbValues.value = `${r}, ${g}, ${b}`

  hexValues.value = colorObject.hex()
})
