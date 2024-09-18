export const printOptions = (videos, rightOptionIndex, runGame) => {
  const $optionContainer = document.querySelector('.options-container')
  const rightOption = videos[rightOptionIndex]

  for (const video of videos) {
    const $button = document.createElement('button')
    $button.classList.add('option-button')
    $button.id = `id-${video.id}`
    $button.textContent = video.name

    $button.addEventListener('click', () => {
      const $rightButton = document.querySelector(`#id-${rightOption.id}`)

      $rightButton.classList.add('hit')

      setTimeout(runGame, 2000)
    })

    $optionContainer.appendChild($button)
  }
}