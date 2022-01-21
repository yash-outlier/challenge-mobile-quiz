import React from 'react'
import { Text } from 'react-native'

const DifficultyLevel = ({ difficulty }) => {
  switch (difficulty) {
    case 'easy': return <Text>&#9733; &#9734; &#9734;</Text>
    case 'medium': return <Text>&#9733; &#9733; &#9734;</Text>
    case 'hard': return <Text>&#9733; &#9733; &#9733;</Text>
    default: return null
  }
}

export default DifficultyLevel
