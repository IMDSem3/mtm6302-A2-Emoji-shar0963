const emojiCodes = [
  128512, // 😀 grinning face
  128514, // 😂 face with tears of joy
  129315, // 🤣 rolling on the floor laughing
  128525, // 😍 heart-eyes
  128526, // 😎 sunglasses
  129300, // 🤔 thinking face
  128564, // 😴 sleeping face
  128561, // 😱 screaming in fear
  129312, // 🤠 cowboy hat face
  128123, // 👻 ghost
  128125, // 👽 alien
  129302  // 🤖 robot face
]

const gallery = document.getElementById('gallery')

function showEmojis(count = emojiCodes.length) {
  // Clear the existing gallery
  gallery.innerHTML = ''

  // Build a card for the first `count` emojis, in array order
  for (let i = 0; i < count; i++) {
    const code = emojiCodes[i]

    const card = document.createElement('div')
    card.classList.add('card')

    const emoji = document.createElement('span')
    emoji.classList.add('emoji')
    emoji.textContent = String.fromCodePoint(code)

    const codeLabel = document.createElement('span')
    codeLabel.classList.add('code')
    codeLabel.textContent = code

    card.appendChild(emoji)
    card.appendChild(codeLabel)
    gallery.appendChild(card)
  }
}

showEmojis()
