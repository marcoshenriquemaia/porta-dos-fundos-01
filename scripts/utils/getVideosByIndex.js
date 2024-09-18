import { videos } from '../data.js'

export const getVideosByIndex = (indexList) => {
  const videoList = []

  for (const index of indexList) {
    const video = videos[index]

    videoList.push(video)
  }

  return videoList
}