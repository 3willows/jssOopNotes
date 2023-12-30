const hex = (r, g, b) =>
  `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

const rgb = (r, g, b) => {
  return `rgb(${r}${g}${b})`
}

// missing the code for HSL