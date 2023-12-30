const colorTitles = document.querySelectorAll('.colorTitle')
const form = document.querySelector('form')

form.addEventListener('change', function (e) {
  const formData = new FormData(this) // Gets the form data

  const r = formData.get('r') // Retrieves the 'r' value from form data
  const g = formData.get('g') // Retrieves the 'g' value from form data
  const b = formData.get('b') // Retrieves the 'b' value from form data

  // console.log(`Red: ${r}, Green: ${g}, Blue: ${b}`)
  const rgbColor = `rgb(${r}, ${g}, ${b})`

  // Iterate through each .colorTitle element and apply the style
  colorTitles.forEach(colorTitle => {
    colorTitle.style.color = rgbColor
  })

  // const colorObject = makeColor(r, g, b)
  // const colorObject = new Color(r, g, b)
  const colorObject = new classyColor(r, g, b)
  const rgbValues = document.querySelector('#rgbValues')
  const hexValues = document.querySelector('#hexValues')

  rgbValues.value = `${r}, ${g}, ${b}`
  hexValues.value = colorObject.hex()
  console.log(colorObject.hsl())

  const oppositeObject = new classyColor(r, g, b)
  const oppositeColor = document.querySelector('.oppositeColor')
  oppositeColor.style.color = oppositeObject.opposite()
  console.log(oppositeObject.opposite())

  const saturatedObject = new classyColor(r, g, b)
  const saturatedColor = document.querySelector('.saturatedColor')
  saturatedColor.style.color = saturatedObject.fullSaturation()
  console.log(saturatedObject.fullSaturation())
})
