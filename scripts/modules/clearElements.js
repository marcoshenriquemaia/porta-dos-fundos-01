export const clearElements = () => {
  const $videoContainer = document.querySelector('.video-container')
  const $optionsContainer = document.querySelector('.options-container')

  $optionsContainer.innerHTML = ''
  $videoContainer.innerHTML = ''
}