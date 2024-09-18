export const printVideo = (video) => {
  const $videoContainer = document.querySelector('.video-container')
  
  const $videoBox = document.createElement('div')
  $videoBox.classList.add('video-box')

  const $iframe = document.createElement('iframe')
  $iframe.src = `https://www.youtube.com/embed/${video.id}?controls=0&autoplay=1&start=10`
  $iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
  $iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
  $iframe.classList.add('video-iframe')

  $videoBox.appendChild($iframe)
  $videoContainer.appendChild($videoBox)
}