export const randomNumbers = (quantity, max) => {
  const numberList = []

  for (let i = 0; i < quantity; i++) {
    const randomNumber = Math.floor(Math.random() * max)
    
    numberList.push(randomNumber)
  }
  
  return numberList
}