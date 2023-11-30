const sharp = require('sharp')

sharp('Screen.png')
  .resize(80)
  .grayscale()
  .toFile('rezied.png')