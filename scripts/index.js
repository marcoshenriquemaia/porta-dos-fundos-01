import { videos } from './data.js'
import { randomNumbers } from './utils/randomNumbers.js'
import { printOptions } from './modules/printOptions.js'
import { getVideosByIndex } from './utils/getVideosByIndex.js'
import { printVideo } from './modules/printVideo.js'
import { clearElements } from './modules/clearElements.js'

const runGame = () => {
  clearElements()

  const currentVideosIndex = randomNumbers(4, videos.length)

  const [selectedVideoIndex] = randomNumbers(1, 4)

  const videoList = getVideosByIndex(currentVideosIndex)

  printVideo(videoList[selectedVideoIndex])

  printOptions(videoList, selectedVideoIndex, runGame)
}

runGame()